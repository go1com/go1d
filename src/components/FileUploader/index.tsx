import axios from "axios";
import { connect, FormikContext } from "formik";
import { get } from "lodash";
import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";

import BaseUploader from "../BaseUploader";
import Button from "../Button";
import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Spinner from "../Spinner";
import Text from "../Text";
import View, { ViewProps } from "../View";

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
  fileTypeError: fileName => `${fileName} is not a supported file type.`,
};

export interface FileUploaderProps extends ViewProps {
  acceptedFileExts?: string;
  description?: string;
  errorMessage?: string;
  iconName?: string;
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
  removeIcon?: string;
  formik: FormikContext<any>;
}

export class FileUploader extends React.Component<InnerProps, State> {
  public static displayName = "FileUploader";
  public static defaultProps = {
    iconName: "Document",
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
      iconName,
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
          <Icon name={iconName} color="muted" size={3} marginRight={3} />
          <Text>{this.messages.dragFile}</Text>
          <Button iconName="Upload" marginLeft="auto" color="subtle">
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
        <Spinner color="success" size={3} marginRight={3} />
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
      formik.setFieldError(
        name,
        this.messages.fileSizeError(
          file.name,
          Math.round(maxSizeInBytes / 1000000)
        )
      );
    }
    if (acceptedExtsList) {
      const fileExt = file.name.split(".").map(fl => `.${fl}`);
      if (!acceptedExtsList.find(af => fileExt.includes(af))) {
        formik.setFieldError(name, this.messages.fileTypeError(file.name));
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
        <Icon name="Success" color="success" size={3} marginRight={3} />
        <Text>{this.messages.fileUploaded}</Text>
      </View>
    );
  };

  public renderHasValueState = (fileName: string) => {
    const {
      formik: { errors },
      iconName,
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
          <Icon name={iconName} color="muted" size={3} marginRight={3} />
          <Text ellipsis={true}>{fileName}</Text>
          <ButtonMinimal
            flexDirection="row"
            marginLeft="auto"
            iconName={removeIcon || "Trash"}
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
                  <Icon
                    name="PlusCircle"
                    color="accent"
                    size={3}
                    marginRight={3}
                  />
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
