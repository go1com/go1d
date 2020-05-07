import { isEqual } from "lodash";
import * as React from "react";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import BaseUploader from "../BaseUploader";
import ButtonMinimal from "../ButtonMinimal";
import Spinner from "../Spinner";
import Text from "../Text";
import View, { ViewProps } from "../View";

import TrashIcon from "../Icons/Trash";
import CameraIcon from "../Icons/Camera";
import PlusCircleIcon from "../Icons/PlusCircle";
import SuccessIcon from "../Icons/Success";
import UploadIcon from "../Icons/Upload";

export interface ImageUploadSlatProps extends ViewProps {
  onChange?: (evt: { target: { name: string; value: string | File } }) => void;
  value?: File | string;
  name?: string;
  uploadProgress: number;
  onUploadProgress: ({
    loaded,
    total,
  }: {
    loaded: number;
    total: number;
  }) => void;
  showUploadCompleted: boolean;
  fileName?: string;
  dragDropText?: string;
  dropImageText?: string;
  deleteText?: string;
  replaceImageText?: string;
  uploadedText?: string;
  uploadingText?: string;
  sizeLimitText?: string;
  acceptedFileTypesText?: string;
  chooseAFileText?: string;
}

interface State {
  file?: File;
  disabledClick?: boolean;
  preview?: string;
}

class ImageUploadSlat extends React.Component<ImageUploadSlatProps, State> {
  public static defaultProps = {
    fileName: "Upload interactive preview",
    dragDropText: "Drag and drop to upload",
    dropImageText: "Drop your image",
    deleteText: "Delete",
    replaceImageText: "Replace Image",
    uploadedText: "Uploaded",
    uploadingText: "Uploading...",
    sizeLimitText: "Maximum size is 10MB.",
    acceptedFileTypesText: "JPG, JPEG, PNG and GIF are supported.",
    chooseAFileText: "Choose a file",
  };

  public static getDerivedStateFromProps(
    nextProps: ImageUploadSlatProps,
    prevState: State
  ) {
    if (
      nextProps.value !== undefined &&
      !isEqual(nextProps.value, prevState.file)
    ) {
      if (prevState.preview) {
        URL.revokeObjectURL(prevState.preview);
      }
      if (typeof nextProps.value === "string") {
        return {
          preview: nextProps.value,
        };
      } else {
        let preview = "";
        try {
          preview = URL.createObjectURL(nextProps.value);
        } catch (e) {
          // Do nothing
        }

        return {
          file: nextProps.value,
          preview,
        };
      }
    }

    return null;
  }

  private height = 124;
  private imageWidth = 206;

  constructor(props: ImageUploadSlatProps) {
    super(props);

    this.state = {};
  }

  public componentDidMount() {
    const { value } = this.props;
    if (value && typeof value !== "string") {
      const file: File = {
        ...value,
      };
      this.setState({
        file,
        disabledClick: true,
        preview: URL.createObjectURL(value),
      });
    } else if (value && typeof value === "string") {
      this.setState({
        disabledClick: true,
        preview: value,
      });
    }
  }

  public componentWillUnmount() {
    const { preview } = this.state;

    if (preview) {
      URL.revokeObjectURL(preview);
    }
  }

  @autobind
  public onChange(files: File[]) {
    const { onChange, name } = this.props;

    if (files.length > 0) {
      this.setState({
        disabledClick: true,
        file: files[0],
        preview: URL.createObjectURL(files[0]),
      });

      safeInvoke(onChange, {
        target: {
          name,
          value: files[0],
        },
      });
    }
  }

  @autobind
  public removeImage() {
    const { onChange, name } = this.props;
    const { preview } = this.state;

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    this.setState({
      file: undefined,
      disabledClick: false,
      preview: undefined,
    });

    safeInvoke(onChange, { target: { name, value: "" } });
  }

  @autobind
  public renderNoFileState() {
    return (
      <View
        height="100%"
        flexDirection="row"
        borderColor="faded"
        border={1}
        borderRadius={2}
        backgroundColor="faint"
        css={{
          cursor: "pointer",
        }}
        justifyContent={["center", null, null]}
      >
        <View
          display={["none", "flex", "flex"]}
          borderColor="faded"
          borderRight={1}
          alignItems="center"
          justifyContent="center"
          height="100%"
          width={this.imageWidth}
          marginRight={5}
          padding={5}
        >
          <CameraIcon color="muted" size={4} marginBottom={2} />
          <Text textAlign="center" color="subtle">
            {this.props.dragDropText}
          </Text>
        </View>
        <View justifyContent="center">
          <View flexDirection="row">
            <UploadIcon
              marginTop={2}
              color="muted"
              size={2}
              marginRight={4}
              marginBottom={3}
            />
            <Text fontWeight="semibold" color="default" fontSize={2}>
              {this.props.chooseAFileText}
            </Text>
          </View>
          <View>
            <Text color="subtle" fontSize={1} lineHeight="paragraph">
              {this.props.acceptedFileTypesText}
              <br />
              {this.props.sizeLimitText}
            </Text>
          </View>
        </View>
      </View>
    );
  }

  @autobind
  public renderPreview() {
    const { preview } = this.state;
    return (
      <View
        width={this.imageWidth}
        borderRight={1}
        borderColor="soft"
        css={{
          backgroundImage: `url("${preview}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    );
  }

  @autobind
  public renderUploadInProgressState() {
    return (
      <View flexDirection="row" border={1} borderColor="soft">
        {this.renderPreview()}
        <View
          borderRadius={2}
          paddingX={4}
          height={this.height}
          flexGrow={1}
          justifyContent="center"
        >
          <View marginBottom={3} flexDirection="row">
            <Spinner color="accent" size={3} marginRight={3} />
            <Text color="subtle">{this.props.uploadingText}</Text>
          </View>
          {`${this.props.uploadProgress}%`}
        </View>
      </View>
    );
  }

  @autobind
  public renderUploadHasCompleted() {
    return (
      <View flexDirection="row" border={1} borderColor="faint">
        {this.renderPreview()}
        <View
          borderRadius={2}
          paddingX={4}
          height={this.height}
          flexGrow={1}
          justifyContent="center"
        >
          <View marginBottom={3} flexDirection="row">
            <SuccessIcon color="success" size={3} marginRight={3} />
            <Text>{this.props.uploadedText}</Text>
          </View>
          {`${this.props.uploadProgress}%`}
        </View>
      </View>
    );
  }

  @autobind
  public renderHasValueState(fileName: string, open: any) {
    return (
      <View flexDirection="row" border={1} borderColor="soft" boxShadow="crisp">
        {this.renderPreview()}
        <View
          borderRadius={2}
          paddingRight={4}
          height={this.height}
          flexGrow={1}
          justifyContent="center"
        >
          <View marginLeft={4} marginBottom={3} flexDirection="row">
            <Text>{fileName}</Text>
          </View>
          <View flexDirection="row">
            <ButtonMinimal icon={CameraIcon} iconColor="subtle" onClick={open}>
              {this.props.replaceImageText}
            </ButtonMinimal>
            <ButtonMinimal
              icon={TrashIcon}
              iconColor="subtle"
              onClick={this.removeImage}
            >
              {this.props.deleteText}
            </ButtonMinimal>
          </View>
        </View>
      </View>
    );
  }

  public render() {
    const {
      name,
      value,
      onChange,
      disabled,
      onBlur: propBlur,
      error,
      // All props below here are being removed to prevent react errors
      fileName: removingFileName,
      chooseAFileText,
      acceptedFileTypesText,
      sizeLimitText,
      uploadedText,
      replaceImageText,
      uploadingText,
      deleteText,
      dropImageText,
      dragDropText,
      uploadProgress,
      showUploadCompleted,
      onUploadProgress,
      height = 110,
      ...props
    } = this.props;
    const { disabledClick } = this.state;

    let fileName = this.props.fileName;

    if (value && typeof value !== "string" && value.name) {
      fileName = value.name;
    } else if (typeof value === "string" && value.trim() !== "") {
      const nameArray = value.split("/");
      fileName = nameArray[nameArray.length - 1];
    }

    return (
      <View {...props} width="100%" height={height}>
        <BaseUploader
          fileType="image/*"
          disabled={!!disabled}
          multiple={false}
          onBlur={this.props.onBlur}
          onChange={this.onChange}
        >
          {({ getRootProps, isDragActive, open }) => {
            let fileUploadInner;
            let allowOpen = false;
            const { ref, ...rootProps } = getRootProps();
            if (isDragActive) {
              fileUploadInner = (
                <View
                  borderRadius={2}
                  flexDirection="row"
                  alignItems="center"
                  borderColor="accent"
                  border={1}
                  height={this.height}
                >
                  <View
                    height="100%"
                    marginRight={5}
                    width={this.imageWidth}
                    justifyContent="center"
                    alignItems="center"
                    borderColor="accent"
                    borderRight={1}
                  >
                    <PlusCircleIcon color="accent" size={3} />
                  </View>
                  <View>
                    <Text fontWeight="semibold">
                      {this.props.dropImageText}
                    </Text>
                  </View>
                </View>
              );
            } else if (this.props.uploading) {
              fileUploadInner = this.renderUploadInProgressState();
            } else if (this.props.showUploadCompleted) {
              fileUploadInner = this.renderUploadHasCompleted();
            } else if (this.props.value) {
              fileUploadInner = this.renderHasValueState(fileName, open);
            } else {
              allowOpen = true;
              fileUploadInner = this.renderNoFileState();
            }
            return (
              <View
                {...rootProps}
                height={this.height}
                onClick={allowOpen && !disabledClick ? open : null}
                innerRef={ref}
              >
                {fileUploadInner}
              </View>
            );
          }}
        </BaseUploader>
      </View>
    );
  }
}

export default ImageUploadSlat;
