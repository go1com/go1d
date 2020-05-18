import axios from "axios";
import { connect, FormikContext } from "formik";
import { get } from "lodash";
import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";

import BaseUploader from "../BaseUploader";
import Button from "../Button";
import ButtonMinimal from "../ButtonMinimal";
import Spinner from "../Spinner";
import Text from "../Text";
import View, { ViewProps } from "../View";

import { IconProps } from "../IconBase";
import DocumentIcon from "../Icons/Document";
import PlusCircleIcon from "../Icons/PlusCircle";
import SuccessIcon from "../Icons/Success";
import TrashIcon from "../Icons/Trash";
import UploadIcon from "../Icons/Upload";

const MESSAGES = {
  cancelled: "Cancelled because a new file is being used",
  chooseFile: "Choose a file",
  dropFile: "Drop your file",
  dragFile: "Drag and drop to upload",
  fileUploaded: "File uploaded",
  networkError: "Network Error",
  uploading: "Uploading...",
  fileSizeError: (fileName, fileSize) =>
    `${fileName} exceeds the ${fileSize}MB limit. Please upload a smaller file.`,
  fileTypeError: fileExt => `${fileExt} is not a supported file type.`,
};

export interface FileUploaderProps extends ViewProps {
  acceptedFileExts?: string;
  description?: string;
  errorMessage?: string;
  iconName?: never;
  icon: React.ComponentType<IconProps>;
  maxSizeInBytes?: number;
  name?: string;
  uploadProgress?: number;
  value?: File | string;
  onChange?: (evt: { target: { name: string; value: string | File } }) => void;
  upload?: (file: File) => Promise<File | string>;
}

interface State {
  uploadCompleted: boolean;
  uploading: boolean;
  uploadError: boolean;
}

interface InnerProps extends FileUploaderProps {
  removeIcon?: React.ComponentType<IconProps>;
  formik: FormikContext<any>;
}

export class FileUploader extends React.Component<InnerProps, State> {
  public static displayName = "FileUploader";
  public static defaultProps = {
    icon: DocumentIcon,
    uploadProgress: 0,
  };

  public cancelToken = axios.CancelToken.source();
  public messages = MESSAGES;
  private readonly containerStyle: any = {
    alignItems: "center",
    backgroundColor: "faint",
    borderColor: "faded",
    flexDirection: "row",
    border: 1,
    borderRadius: 2,
    height: 52,
    marginBottom: 2,
    paddingX: 4,
  };
  private readonly iconStyle: any = {
    size: 3,
    marginRight: 3,
  };

  constructor(props: InnerProps) {
    super(props);
    this.messages = { ...MESSAGES, ...props.messages };
    this.state = {
      uploadCompleted: false,
      uploadError: false,
      uploading: false,
    };
  }

  public handleError = (err: Error) => {
    this.setState({
      uploadCompleted: true,
      uploadError: true,
      uploading: false,
    });
    window.onbeforeunload = null;
    if (err && err.message) {
      if (err.message === this.messages.cancelled) {
        safeInvoke(this.props.onChange, {
          target: { name, value: "" },
        });
      }
    }
  };

  public showUploadCompleted = () => {
    if (this.props.uploadComplete) {
      this.props.uploadComplete();
    }
    this.setState(
      {
        uploadCompleted: true,
        uploadError: false,
        uploading: false,
      },
      () => {
        setTimeout(() => {
          this.setState({
            uploadCompleted: false,
          });
        }, 1000);
      }
    );
  };

  public onChange = (files: File[]) => {
    const { name, upload, onChange } = this.props;
    const file: File = files[0];

    this.cancelToken.cancel(this.messages.cancelled);
    if (file && upload) {
      this.cancelToken = axios.CancelToken.source();
      this.setState({
        uploading: true,
      });

      upload(file)
        .then(res => {
          this.showUploadCompleted();

          safeInvoke(onChange, {
            target: { name, value: res },
          });
        })
        .catch(this.handleError);
    } else if (file) {
      safeInvoke(onChange, {
        target: { name, value: file },
      });
    } else {
      safeInvoke(onChange, {
        target: { name, value: "" },
      });
    }
  };

  public onDelete = () => {
    const { name, onChange } = this.props;
    safeInvoke(onChange, {
      target: { name, value: "" },
    });
  };

  public renderNoFileState = () => {
    const {
      formik: { errors },
      icon: IconElement,
      name,
    } = this.props;
    const error = get(errors, name);

    return (
      <>
        <View
          {...this.containerStyle}
          borderColor={error ? "danger" : this.containerStyle.borderColor}
          css={{
            "&:hover, &:focus": {
              cursor: "pointer",
            },
          }}
        >
          <IconElement color="muted" {...this.iconStyle} />
          <Text>{this.messages.dragFile}</Text>
          <Button icon={UploadIcon} marginLeft="auto" color="subtle">
            {this.messages.chooseFile}
          </Button>
        </View>
        {error && <Text color="danger">{error}</Text>}
      </>
    );
  };

  public renderUploadInProgressState = () => {
    return (
      <View {...this.containerStyle}>
        <Spinner color="success" {...this.iconStyle} />
        <Text>{this.messages.uploading}</Text>
        <View flexDirection="row" marginLeft="auto">
          <Text>{this.props.uploadProgress}%</Text>
        </View>
      </View>
    );
  };

  public onReject = (files: File[]) => {
    const { acceptedFileExts, formik, maxSizeInBytes, name } = this.props;
    const file: File = files[0];
    const acceptedExtsList = acceptedFileExts && acceptedFileExts.split(",");
    if (maxSizeInBytes && file.size > maxSizeInBytes) {
      const maxSizeInMegaBytes = Math.round(maxSizeInBytes / 1000000);
      formik.setFieldError(
        name,
        this.messages.fileSizeError(file.name, maxSizeInMegaBytes)
      );
    }
    if (acceptedExtsList) {
      const fileExt = file.name.split(".").map(fl => `.${fl}`);
      if (!acceptedExtsList.find(af => fileExt.includes(af))) {
        formik.setFieldError(name, this.messages.fileTypeError(fileExt));
      }
    }
  };

  public renderUploadHasCompleted = () => {
    const {
      formik: { errors },
    } = this.props;
    const error = get(errors, this.props.name);
    return (
      <View
        {...this.containerStyle}
        borderColor={error ? "danger" : this.containerStyle.borderColor}
      >
        <SuccessIcon color="success" {...this.iconStyle} />
        <Text>{this.messages.fileUploaded}</Text>
      </View>
    );
  };

  public renderHasValueState = (fileName: string) => {
    const {
      formik: { errors },
      icon: IconElement,
      removeIcon,
    } = this.props;
    const error = get(errors, this.props.name);
    return (
      <>
        <View
          {...this.containerStyle}
          borderColor={error ? "danger" : this.containerStyle.borderColor}
          boxShadow="crisp"
        >
          <IconElement color="muted" {...this.iconStyle} />
          <Text ellipsis={true}>{fileName}</Text>
          <ButtonMinimal
            flexDirection="row"
            marginLeft="auto"
            icon={removeIcon || TrashIcon}
            iconColor="subtle"
            onClick={this.onDelete}
          />
        </View>
        {error && <Text color="danger">{error}</Text>}
      </>
    );
  };

  public render() {
    const {
      value,
      description,
      acceptedFileExts,
      uploadProgress,
      maxSizeInBytes,
    } = this.props;
    const { uploading, uploadCompleted, uploadError } = this.state;

    let fileName = "";
    if (value) {
      fileName =
        get(value, "name") ||
        (typeof value === "string" && value.substr(value.lastIndexOf("/") + 1));
    }

    return (
      <>
        <BaseUploader
          {...this.props}
          value={fileName}
          fileType={acceptedFileExts}
          maxSize={maxSizeInBytes}
          multiple={false}
          onChange={this.onChange}
          onDropRejected={this.onReject}
        >
          {({ getRootProps, isDragActive, open }) => {
            let fileUploadInner;
            let allowOpen = false;
            const { ref, ...rootProps } = getRootProps();
            if (isDragActive) {
              fileUploadInner = (
                <View {...this.containerStyle} borderColor="accent">
                  <PlusCircleIcon color="accent" {...this.iconStyle} />
                  <Text>{this.messages.dropFile}</Text>
                </View>
              );
            } else if (
              uploading ||
              (uploadProgress && (uploadProgress > 0 && uploadProgress < 100))
            ) {
              fileUploadInner = this.renderUploadInProgressState();
            } else if (
              (uploadCompleted || uploadProgress === 100) &&
              !uploadError
            ) {
              fileUploadInner = this.renderUploadHasCompleted();
            } else if (value) {
              fileUploadInner = this.renderHasValueState(fileName);
            } else {
              allowOpen = true;
              fileUploadInner = this.renderNoFileState();
            }
            return (
              <View
                {...rootProps}
                onClick={allowOpen ? open : undefined}
                innerRef={ref}
              >
                {fileUploadInner}
              </View>
            );
          }}
        </BaseUploader>
        {description && (
          <Text color="subtle" marginTop={2}>
            {description}
          </Text>
        )}
      </>
    );
  }
}

export default connect<FileUploaderProps>(FileUploader);
