import { isEqual } from "lodash";
import * as React from "react";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import BaseUploader from "../BaseUploader";
import ButtonMinimal from "../ButtonMinimal";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface ImageUploaderProps extends ViewProps {
  onChange?: (evt: { target: { name: string; value: string | File } }) => void;
  value?: File | string;
  name?: string;
  uploadText?: string;
  supportedFormatText?: string;
}

interface State {
  file?: File;
  disabledClick?: boolean;
  preview?: string;
}

class ImageUploader extends React.Component<ImageUploaderProps, State> {
  public static defaultProps = {
    height: "200px",
    uploadText: "Upload an image",
    supportedFormatText: "jpg, png, and gif are supported",
  };

  public static getDerivedStateFromProps(
    nextProps: ImageUploaderProps,
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

  constructor(props: ImageUploaderProps) {
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

  public render() {
    const {
      value,
      onChange,
      disabled,
      onBlur: propBlur,
      error,
      uploadText,
      supportedFormatText,
      ...props
    } = this.props;

    return (
      <View {...props}>
        <View
          width="100%"
          height="100%"
          overflow="hidden"
          position="relative"
          boxShadow="inner"
        >
          <BaseUploader
            fileType="image/*"
            disabled={!!disabled}
            multiple={false}
            onBlur={this.props.onBlur}
            onChange={this.onChange}
          >
            {({ open, getRootProps, isDragActive }) => {
              const { ref, ...rootProps } = getRootProps();
              const change = this.state.disabledClick
                ? null
                : rootProps.onClick;
              return (
                <Theme.Consumer>
                  {({ colors }) => (
                    <View
                      backgroundColor={isDragActive ? "soft" : "faint"}
                      borderColor={isDragActive ? "accent" : "transparent"}
                      border={isDragActive ? 2 : 0}
                      width="100%"
                      height="100%"
                      css={{
                        "&:hover, &:focus": {
                          backgroundColor: colors.soft,
                        },
                      }}
                      {...rootProps}
                      onClick={change}
                      innerRef={ref}
                    >
                      {this.renderImage(open, isDragActive)}
                    </View>
                  )}
                </Theme.Consumer>
              );
            }}
          </BaseUploader>
        </View>
      </View>
    );
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
  public renderImage(open: () => void, isDragActive: boolean) {
    const { file, preview } = this.state;
    const { disabled, uploadText, supportedFormatText } = this.props;

    return file || preview ? (
      <View height="100%">
        <View
          height="100%"
          css={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <View
            marginTop={4}
            marginLeft={4}
            display="flex"
            flexDirection="row"
            backgroundColor="#fff"
            borderRadius={2}
            overflow="hidden"
            height="100%"
          >
            <ButtonMinimal
              iconName="Trash"
              onClick={this.removeImage}
              disabled={disabled}
              mode="light"
              css={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
            <ButtonMinimal
              iconName="Camera"
              onClick={open}
              disabled={disabled}
              mode="light"
              css={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            />
          </View>
        </View>
        <View
          css={{
            backgroundImage: `url("${preview}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          width="100%"
          height="100%"
        />
      </View>
    ) : (
      <View
        justifyContent="center"
        height="100%"
        css={{ cursor: "pointer" }}
        position="relative"
      >
        <View
          display="flex"
          alignItems="center"
          flexDirection="column"
          css={{ opacity: isDragActive ? 0 : 1 }}
        >
          <Icon name="Camera" color="muted" size={8} />
          <View marginBottom={2}>
            <Text fontWeight="semibold">{uploadText}</Text>
          </View>
          <Text color="subtle" fontSize={1}>
            {supportedFormatText}
          </Text>
        </View>
        <Icon
          name="AddItem"
          size={6}
          position="absolute"
          color="accent"
          backgroundColor="background"
          css={{
            opacity: isDragActive ? 1 : 0,
            top: "50%",
            left: "50%",
            transform: `translate3D(-50%, ${
              isDragActive ? "-50%" : "50%"
            }, 1px)`,
            borderRadius: "50%",
          }}
        />
      </View>
    );
  }
}

export default ImageUploader;
