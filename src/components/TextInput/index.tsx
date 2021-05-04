import * as React from "react";
import { Transition } from "react-transition-group";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import { IconProps } from "../IconBase";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import View from "../View";

export interface TextInputProps extends TextProps {
  id: string;
  size?: "lg" | "md" | "sm";
  name?: string;
  value?: string;
  multiline?: number;
  label?: string;
  floating?: boolean;
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  readOnly?: boolean;
  tabIndex?: string;
  onChange?: (evt: React.ChangeEvent<any>) => void;
  onKeyDown?: (evt: React.KeyboardEvent<any>) => void;
  onClick?: (evt: React.MouseEvent<any>) => void;
  onFocus?: (evt: React.FocusEvent<any>) => void;
  onBlur?: (evt: React.FocusEvent<any>) => void;
  iconName?: never; // Removed
  icon?: React.ComponentType<IconProps>;
  suffixNode?: React.ReactNode;
  inputType?: string;
  error?: boolean;
  borderRadius?: number;
  viewCss?: any;
  borderColor?: string;
  tid?: string;
}

interface TextInputState {
  value: string;
  isFocused: boolean;
  valueLength?: number;
}

const sizeStyles = {
  lg: {
    paddingY: 3,
    paddingX: 4,
    typeScale: 2,
  },
  md: {
    paddingY: 3,
    paddingX: 4,
    typeScale: 2,
  },
  sm: {
    paddingY: 2,
    paddingX: 3,
    typeScale: 1,
  },
};

class TextInput extends React.PureComponent<TextInputProps, TextInputState> {
  public static displayName = "TextInput";

  public static defaultProps = {
    size: "md",
    borderRadius: 2,
    inputType: "text",
  };

  constructor(props: TextInputProps) {
    super(props);

    const value =
      typeof props.defaultValue === "undefined"
        ? props.value
        : props.defaultValue;
    this.state = {
      value,
      isFocused: false,
    };
  }

  @autobind
  public handleFocus(evt: React.FocusEvent<any>) {
    this.setState({
      isFocused: true,
    });

    safeInvoke(this.props.onFocus, evt);
  }

  @autobind
  public handleBlur(evt: React.FocusEvent<any>) {
    this.setState({
      isFocused: false,
    });

    safeInvoke(this.props.onBlur, evt);
  }

  @autobind
  public getBorderColor() {
    const { isFocused } = this.state;
    const { error, borderColor } = this.props;

    if (error) {
      return "danger";
    }
    if (isFocused) {
      return "accent";
    }

    return borderColor ? borderColor : "faded";
  }

  public handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { onChange } = this.props;
    const { value } = event.target;

    this.setState({
      value,
    });
    onChange?.(event);
  };

  public render() {
    const {
      id,
      size,
      defaultValue,
      icon: IconElement,
      label,
      floating,
      placeholder,
      suffixNode,
      disabled,
      onFocus,
      onBlur,
      borderRadius,
      viewCss,
      multiline,
      inputType,
      error, // do not pass
      borderColor, // do not pass
      css,
      maxLength,
      ...props
    } = this.props;

    // Controlled or uncontrolled based on the default value
    const value =
      typeof this.props.value !== "undefined"
        ? this.props.value
        : this.state.value;
    const valueLength = (value && value.length) || 0;
    const { paddingY, paddingX, typeScale } = sizeStyles[size];

    const { isFocused } = this.state;
    const isFloatingEnabled = floating && label;
    const isFloating = isFloatingEnabled && (!!value || isFocused);

    return (
      <Theme.Consumer>
        {({ animation, colors, type, inputSizes }) => (
          <View
            borderRadius={borderRadius}
            backgroundColor="background"
            border={1}
            borderColor={this.getBorderColor()}
            flexDirection="row"
            alignItems="center"
            htmlFor={id}
            opacity={disabled ? "disabled" : null}
            overflow="hidden"
            css={{
              position: "relative",
              ...viewCss,
            }}
            minHeight={inputSizes[size]}
          >
            {IconElement && (
              <View
                position="absolute"
                height={inputSizes[size]}
                width={inputSizes[size]}
                alignItems="center"
                justifyContent="center"
                css={{
                  top: 0,
                  left: 0,
                }}
              >
                <IconElement size={typeScale} color="subtle" />
              </View>
            )}
            <Transition in={isFloating} timeout={animation.subtle}>
              <Text
                id={id}
                element={multiline ? "textarea" : "input"}
                type={inputType}
                rows={multiline}
                lineHeight="ui"
                placeholder={placeholder}
                fontSize={typeScale}
                paddingX={paddingX}
                paddingY={paddingY}
                color="inherit"
                disabled={disabled}
                data-testid="inputElement"
                maxLength={maxLength}
                {...props}
                value={value}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                css={[
                  {
                    width: "100%",
                    maxHeight: inputSizes[size] - 2,
                    paddingLeft: IconElement && inputSizes[size],
                    background: 0,
                    backgroundColor: colors.background,
                    border: 0,
                    flexGrow: 1,
                    "::placeholder": {
                      color: colors.subtle,
                      opacity: 1,
                      fontWeight: type.weight.normal,
                    },
                    ...(isFloatingEnabled && {
                      paddingTop: `${inputSizes[size] / 2 + 1}px`,
                    }),

                    // Keep label on the top in case of autofill
                    // In theory we can just set to 0 but somehow it isn't related to its parent with relative position (Chrome)
                    // it's likely an issue with Chrome
                    ":-webkit-autofill + label": {
                      ...(isFloatingEnabled &&
                        !isFloating && {
                          top: `${Math.round(inputSizes[size] / 4)}px`,
                        }),
                    },
                  },
                  css,
                ]}
              />
            </Transition>

            {isFloatingEnabled && (
              <Transition in={isFloating} timeout={animation.subtle}>
                <Text
                  element="label"
                  color={error ? "danger" : "subtle"}
                  lineHeight="ui"
                  htmlFor={id}
                  paddingX={!IconElement ? paddingX : 0}
                  fontSize={typeScale}
                  fontWeight="normal"
                  css={[
                    {
                      position: "absolute",
                      height: `${inputSizes[size] / 2}px`,
                      width: "calc(100% - 16px)",
                      display: "flex",
                      alignItems: "center",
                      backgroundColor: colors.background,
                      top: !placeholder && !isFloating ? "50%" : 0,
                      left: IconElement ? inputSizes[size] : 0,
                      transform:
                        !placeholder && !isFloating
                          ? `translate(0, -50%)`
                          : "unset",
                    },
                    !placeholder &&
                      isFloating && {
                        top: 0,
                        left: IconElement ? inputSizes[size] : 0,
                        transform: "none",
                      },
                  ]}
                >
                  {label}
                </Text>
              </Transition>
            )}
            {suffixNode && (
              <View backgroundColor="transparent">{suffixNode}</View>
            )}
            {maxLength && (
              <Text
                padding={3}
                color="subtle"
                css={{ "align-self": "flex-end" }}
              >
                {maxLength - valueLength}
              </Text>
            )}
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default TextInput;
