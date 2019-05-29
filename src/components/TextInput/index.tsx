import * as React from "react";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import Icon from "../Icon";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import View from "../View";

export interface TextInputProps extends TextProps {
  id: string;
  size?: "lg" | "md" | "sm";
  name?: string;
  value?: string;
  multiline?: number;
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
  iconName?: string;
  suffixNode?: React.ReactNode;
  inputType?: string;
  error?: boolean;
  borderRadius?: number;
  viewCss?: any;
  borderColor?: string;
  tid?: string;
}

const sizeStyles = {
  lg: {
    height: 48,
    paddingY: 3,
    paddingX: 4,
    typeScale: 3,
  },
  md: {
    height: 40,
    paddingY: 3,
    paddingX: 3,
    typeScale: 2,
  },
  sm: {
    height: 32,
    paddingY: 2,
    paddingX: 3,
    typeScale: 1,
  },
};

class TextInput extends React.PureComponent<TextInputProps, any> {
  public static displayName = "TextInput";

  public static defaultProps = {
    size: "md",
    borderRadius: 2,
    inputType: "text",
  };

  constructor(props) {
    super(props);

    this.state = { isFocused: false };
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

    return borderColor ? borderColor : "soft";
  }

  public render() {
    const {
      id,
      iconName,
      size,
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
      ...props
    } = this.props;

    const { height, paddingY, paddingX, typeScale } = sizeStyles[size];

    return (
      <Theme.Consumer>
        {({ colors }) => (
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
            {iconName && (
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
                <Icon name={iconName} size={typeScale} color="subtle" />
              </View>
            )}
            <Text
              id={id}
              element={multiline ? "textarea" : "input"}
              type={inputType}
              rows={multiline}
              lineHeight="ui"
              fontSize={typeScale}
              paddingX={paddingX}
              paddingY={paddingY}
              color="inherit"
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
              disabled={disabled}
              data-testid="inputElement"
              {...props}
              css={[
                {
                  // get rid of default styles
                  width: "100%",
                  minHeight: height,
                  paddingLeft: iconName && height,
                  background: 0,
                  border: 0,
                  flexGrow: 1,
                  "::placeholder": {
                    color: "inherit",
                    opacity: 0.5,
                  },
                },
                css,
              ]}
            />
            {suffixNode && (
              <View backgroundColor="transparent">{suffixNode}</View>
            )}
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default TextInput;
