import { isEqual } from "lodash";
import * as React from "react";
import CropperInternal, { CropperProps } from "react-easy-crop";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import BaseUploader from "../BaseUploader";
import ButtonFilled from "../ButtonFilled";
import Stepper, { StepperProps } from "../Stepper";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";
import { getCroppedImg } from "./utils";

import IconAddItem from "../Icons/AddItem";
import IconCamera from "../Icons/Camera";
import IconTrash from "../Icons/Trash";

// `react-easy-crop` is exported which many module types (cjs/esm)
// Unfortunately it won't work properly if we build code with `tsc` without `esModuleInterop`
// then is built with `webpack` by using: `import * as Cropper from "react-easy-crop"`
// I have a article talking about this issue: https://dev.to/tmhao2005/understand-esmoduleinterop-option-in-typescript-5589
// the solution for this one is to either enable `esModuleInterop` option for `tsc` or use babel instead
const importDefault = (mod: any) => {
  return mod && mod.__esModule ? mod : { default: mod };
}
// tslint:disable
const Cropper: typeof CropperInternal = importDefault(require("react-easy-crop")).default;

const isDev = process.env.NODE_ENV !== "production";
// tslint:disable
const logError = console.error;

interface Crop {
  x: number;
  y: number;
}

interface CropAreaPixels {
  width: number;
  height: number;
  x: number;
  y: number;
}

const DEFAULT_IMAGE_ZOOM = 1;
const MIN_ZOOM = 1;
const MAX_ZOOM = 3;
const STEP_INCREMENT = 0.1;
const DEFAULT_ASPECT_RATIO = 16 / 9;

export interface ImageUploaderProps extends ViewProps {
  onChange?: (evt: { target: { name: string; value: string | File } }) => void;
  value?: File | string;
  name?: string;
  uploadText?: React.ReactNode | string;
  supportedFormatText?: React.ReactNode | string;
  allowCrop?: boolean;
  cropConfig?: Partial<CropperProps & Record<"onCrop", (file: Blob) => void>>;
  stepperProps?: Partial<StepperProps>;
  imageBackgroundSize?: React.CSSProperties['backgroundSize']

  zoomValue?: number
  onZoomChange?: (value: number) => void;
}

interface State {
  file?: File;
  disabledClick?: boolean;
  preview?: string;
  crop: Crop;
  zoom: number;
  stepper: number;
  croppedAreaPixels?: CropAreaPixels;
}

class ImageUploader extends React.Component<ImageUploaderProps, State> {
  public static defaultProps: Partial<ImageUploaderProps> = {
    height: "200px",
    uploadText: "Upload an image",
    supportedFormatText: "jpg, png, and gif are supported",
    imageBackgroundSize: 'cover',
    allowCrop: false,
    stepperProps: {},
    cropConfig: {},
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
          if (isDev) {
            logError(e);
          }
        }

        return {
          file: nextProps.value,
          preview,
        };
      }
    }
    return null;
  }

  public timerId: number;

  private defaultCropState: State = {
    zoom: DEFAULT_IMAGE_ZOOM,
    stepper: DEFAULT_IMAGE_ZOOM,
    crop: {
      x: 0,
      y: 0,
    },
  };

  constructor(props: ImageUploaderProps) {
    super(props);
    this.state = {
      ...this.defaultCropState,
    };
  }

  public setCrop = (values: Crop) => {
    this.setState({
      crop: values,
    });
  };

  public setZoom = (evt: React.ChangeEvent<Record<"value", number>>) => {
    const newValue = this.roundNumber(evt.target.value);

    this.setState({
      zoom: newValue,
      stepper: newValue,
    });
  };

  public handleZoomChange = (zoom: number) => {
    this.setState({
      zoom,
      stepper: this.roundNumber(zoom),
    });
    this.props.onZoomChange?.(zoom);
  };

  public roundNumber(value: number) {
    return Number(value.toFixed(1));
  }

  public setCroppedAreaPixels = (
    croppedArea: unknown,
    croppedAreaPixels: CropAreaPixels
  ) => {
    clearTimeout(this.timerId);
    this.timerId = window.setTimeout(async () => {
      const { onCrop } = this.props.cropConfig;

      if (onCrop) {
        const croppedImage = await this.doCrop(
          this.state.preview,
          croppedAreaPixels
        );

        if (croppedImage) {
          onCrop(croppedImage);
        }
      }
    }, 250);
  };

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

    this.onBlur();
  }

  @autobind
  public onBlur() {
    const { onBlur, name } = this.props;

    safeInvoke(onBlur, {
      target: {
        name,
      },
    });
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
      allowCrop,
      cropConfig,
      stepperProps,
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
          border={1}
          borderColor={error ? 'danger' : 'transparent'}
        >
          <BaseUploader
            fileType="image/*"
            disabled={!!disabled}
            multiple={false}
            onBlur={this.onBlur}
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
      zoom: DEFAULT_IMAGE_ZOOM,
    });

    safeInvoke(onChange, { target: { name, value: "" } });
    this.onBlur();
  }

  @autobind
  public renderImage(open: () => void, isDragActive: boolean) {
    const { file, preview, crop, zoom, stepper } = this.state;
    const {
      disabled,
      uploadText,
      supportedFormatText,
      allowCrop,
      cropConfig,
      stepperProps,
      imageBackgroundSize,
      zoomValue,
    } = this.props;

    return file || preview ? (
      <View height="100%">
        <View
          position="absolute"
          css={{
            top: 0,
            left: 0,
            bottom: 0,
          }}
          padding={4}
          justifyContent="space-between"
          zIndex="sticky"
        >
          <View
            display="flex"
            flexDirection="row"
            backgroundColor="#fff"
            borderRadius={2}
            overflow="hidden"
          >
            <ButtonFilled
              icon={IconTrash}
              iconColor="subtle"
              onClick={this.removeImage}
              disabled={disabled}
              mode="light"
              css={{
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
            <ButtonFilled
              icon={IconCamera}
              iconColor="subtle"
              onClick={open}
              disabled={disabled}
              mode="light"
              css={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            />
          </View>

          {allowCrop && (
            // IE doesn't seem to set 120px if `maxWidth` is set `100%`
            <View width={120} maxWidth="none">
              <Stepper
                data-testid="cropZoom"
                id="zoomImage"
                value={stepper}
                stepIncrement={STEP_INCREMENT}
                minNumber={MIN_ZOOM}
                maxNumber={MAX_ZOOM}
                {...stepperProps}
                onChange={this.setZoom}
              />
            </View>
          )}
        </View>

        {allowCrop ? (
          <Cropper
            image={preview}
            aspect={DEFAULT_ASPECT_RATIO}
            crop={crop}
            onCropChange={this.setCrop}
            onCropComplete={this.setCroppedAreaPixels}
            maxZoom={MAX_ZOOM}
            minZoom={MIN_ZOOM}
            zoom={zoomValue !== undefined ? zoomValue : zoom}
            onZoomChange={this.handleZoomChange}
            {...cropConfig}
          />
        ) : (
          <View
            css={{
              backgroundImage: `url("${preview}")`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: imageBackgroundSize,
              backgroundPosition: "center",
            }}
            width="100%"
            height="100%"
          />
        )}
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
          textAlign="center"
          css={{ opacity: isDragActive ? 0 : 1 }}
        >
          <IconCamera color="muted" size={8} />
          <View marginBottom={2}>
            <Text fontWeight="semibold">{uploadText}</Text>
          </View>
          <Text color="subtle" fontSize={1}>
            {supportedFormatText}
          </Text>
        </View>
        <IconAddItem
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

  private doCrop = async (
    blobUrl: string,
    croppedAreaPixels: CropAreaPixels
  ) => {
    try {
      const croppedImage = await getCroppedImg(blobUrl, croppedAreaPixels);

      return croppedImage;
    } catch (e) {
      if (isDev) {
        logError(e);
      }
    }
  };
}

export default ImageUploader;
