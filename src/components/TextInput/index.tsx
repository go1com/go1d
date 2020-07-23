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
  isFocused: boolean;
  valueLength?: number;
}

class TextInput extends React.PureComponent<TextInputProps, TextInputState> {
  public static displayName = "TextInput";

  public static defaultProps = {
    size: "md",
    borderRadius: 2,
    inputType: "text",
  };

  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
      valueLength: (this.props.value && this.props.value.length) || 0,
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
  public handleChange(evt: React.ChangeEvent<any>) {
    this.setState({
      valueLength: evt.currentTarget.value.length,
    });
    safeInvoke(this.props.onChange, evt);
  }

  @autobind
  public handleBlur(evt: React.FocusEvent<any>) {
    this.setState({
      isFocused: false,
      valueLength: evt.currentTarget.value.length,
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

    return borderColor ? borderColor : "soft";
  }

  public render() {
    const {
      id,
      size,
      value,
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

    const { valueLength } = this.state;

    const sizeStyles = {
      lg: {
        height: 48,
        paddingY: 3,
        paddingX: 4,
        typeScale: 3,
        floatingLabelTop: 4,
        floatingLabelSize: 13,
        floatingLineHeight: "20px",
        floatingPaddingTop: "16px",
        floatingPaddingBottom: 0,
      },
      md: {
        height: 40,
        paddingY: 3,
        paddingX: 3,
        typeScale: 2,
        floatingLabelTop: 3,
        floatingLabelSize: 12,
        floatingLineHeight: "16px",
        floatingPaddingTop: "12px",
        floatingPaddingBottom: 0,
      },
      sm: {
        height: 32,
        paddingY: 2,
        paddingX: 3,
        typeScale: 1,
        floatingLabelTop: 2,
        floatingLabelSize: 10,
        floatingLineHeight: "16px",
        floatingPaddingTop: "12px",
        floatingPaddingBottom: 0,
      },
    };

    const {
      height,
      paddingY,
      paddingX,
      typeScale,
      floatingLabelTop,
      floatingLabelSize,
      floatingLineHeight,
      floatingPaddingTop,
      floatingPaddingBottom,
    } = sizeStyles[size];

    const { isFocused } = this.state;
    const isFloatingEnabled = floating && label;
    const isFloating = isFloatingEnabled && (!!value || isFocused);
    const isShowPlaceholder = isFloating || !isFloatingEnabled;

    return (
      <Theme.Consumer>
        {({ animation }) => (
          <View
            borderRadius={borderRadius}
            backgroundColor="background"
            border={1}
            borderColor={this.getBorderColor()}
            boxShadow="inner"
            flexDirection="row"
            alignItems="center"
            htmlFor={id}
            opacity={disabled ? "disabled" : null}
            css={{
              position: "relative",
              ...viewCss,
            }}
          >
            {IconElement && (
              <View
                position="absolute"
                height={height}
                width={height}
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
                value={value}
                element={multiline ? "textarea" : "input"}
                type={inputType}
                rows={multiline}
                lineHeight="ui"
                placeholder={isShowPlaceholder ? placeholder : null}
                fontSize={typeScale}
                paddingX={paddingX}
                paddingY={paddingY}
                color="inherit"
                onFocus={this.handleFocus}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
                disabled={disabled}
                data-testid="inputElement"
                maxLength={maxLength}
                {...props}
                css={[
                  {
                    // get rid of default styles
                    width: "100%",
                    minHeight: height,
                    paddingLeft: IconElement && height,
                    background: 0,
                    border: 0,
                    flexGrow: 1,
                    "::placeholder": {
                      color: "inherit",
                      opacity: 0.5,
                    },
                  },
                  isFloating && {
                    paddingBottom: floatingPaddingBottom,
                    lineHeight: floatingLineHeight,
                    paddingTop: floatingPaddingTop,
                  },
                  css,
                ]}
              />
            </Transition>

            {isFloatingEnabled && (
              <Transition in={isFloating} timeout={animation.subtle}>
                <Text
                  element="label"
                  color={error ? "danger" : "inherit"}
                  lineHeight="ui"
                  htmlFor={id}
                  paddingX={!IconElement ? paddingX : 0}
                  fontSize={isFloating ? floatingLabelSize : typeScale}
                  css={[
                    {
                      position: "absolute",
                      top: "50%",
                      left: IconElement ? height : 0,
                      transform: "translate(0, -50%)",
                    },
                    isFloating && {
                      fontSize: floatingLabelSize,
                      top: floatingLabelTop,
                      left: IconElement ? height : 0,
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
