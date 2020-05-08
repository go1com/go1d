import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";
import Base from "../Base";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

const sizeStyles = {
  lg: {
    height: 32,
    switchPadding: 3,
    labelSize: 3,
    iconSize: {
      check: {
        width: "16px",
        height: "16px",
      },
      cross: {
        width: "16px",
        height: "16px",
      },
    },
  },
  md: {
    height: 24,
    switchPadding: 2,
    labelSize: 2,
    iconSize: {
      check: {
        width: "12px",
        height: "12px",
      },
      cross: {
        width: "12px",
        height: "12px",
      },
    },
  },
  sm: {
    height: 20,
    switchPadding: 1,
    labelSize: 2,
    iconSize: {
      check: {
        width: "12px",
        height: "12px",
      },
      cross: {
        width: "12px",
        height: "12px",
      },
    },
  },
};

export interface ToggleSwitchProps extends ViewProps {
  id?: string;
  name?: string;
  value?: boolean | string;
  defaultValue?: boolean | string;
  disabled?: boolean;
  size?: "lg" | "md" | "sm";
  label?: string | React.ReactNode;
  helperText?: string | React.ReactNode;
  reverse?: boolean;
  onChange?: (evt: React.ChangeEvent<any>) => void;
}

class ToggleSwitch extends React.Component<
  ToggleSwitchProps,
  { randomId: string; checkedState: boolean }
> {
  public static displayName = "ToggleSwitch";
  constructor(props) {
    super(props);
    this.state = {
      randomId: `ToggleSwitch_${Math.random()}`,
      checkedState: !!props.defaultValue,
    };
  }

  public handleOnChange = () => {
    const { checkedState } = this.state;
    const { onChange, name, value } = this.props;
    const newValue = !(typeof value === "undefined" ? checkedState : value);

    this.setState({
      checkedState: newValue,
    });

    safeInvoke(onChange, {
      target: {
        name,
        value: newValue,
        checked: newValue,
        type: "checkbox",
      },
    });
  };

  public render() {
    const { randomId, checkedState } = this.state;

    const {
      name,
      id = randomId,
      value: propValue,
      onChange,
      defaultValue,
      disabled = false,
      size = "md",
      label,
      helperText,
      reverse,
      ...props
    } = this.props;

    const { height, switchPadding } = sizeStyles[size];
    const width = height * 1.75;
    const diameter = height - switchPadding * 2;

    const value = typeof propValue === "undefined" ? checkedState : propValue;
    const currentPos = value ? width - diameter - switchPadding : switchPadding;

    return (
      <Theme.Consumer>
        {({ breakpoints, colors }) => {
          const iconCheckStyles = {
            opacity: value ? 1 : 0,
            ...Object.keys(breakpoints).reduce(
              (previous: any, current: any) => {
                return {
                  ...previous,
                  [breakpoints[current]]: {
                    ...sizeStyles[size].iconSize.check,
                  },
                };
              },
              {}
            ),
          };
          const iconCrossStyles = {
            opacity: !value ? 1 : 0,
            ...Object.keys(breakpoints).reduce(
              (previous: any, current: any) => {
                return {
                  ...previous,
                  [breakpoints[current]]: {
                    ...sizeStyles[size].iconSize.cross,
                  },
                };
              },
              {}
            ),
          };
          return (
            <>
              <View
                flexDirection={reverse ? "row-reverse" : "row"}
                alignItems="baseline"
              >
                <View>
                  <View
                    element="label"
                    htmlFor={id}
                    width={width + 6}
                    height={height + 6}
                    border={2}
                    borderColor="transparent"
                    position="relative"
                    transition="subtle"
                    css={{
                      borderRadius: height + 6,
                      padding: "1px",
                      "&:active, &:focus": {
                        borderColor: value ? colors.default : colors.accent,
                      },
                    }}
                    {...props}
                  >
                    <View
                      width={width}
                      height={height}
                      flexDirection="row"
                      backgroundColor={value ? "accent" : "subtle"}
                      boxShadow="inner"
                      transition="subtle"
                      alignItems="center"
                      justifyContent="space-between"
                      paddingX={switchPadding}
                      opacity={disabled && "disabled"}
                      css={{
                        cursor: disabled ? "default" : "pointer",
                        borderRadius: height,
                      }}
                    >
                      <Icon
                        name="Check"
                        color="background"
                        transition="subtle"
                        css={{
                          ...iconCheckStyles,
                        }}
                      />
                      <Icon
                        name="Cross"
                        color="background"
                        transition="subtle"
                        css={{
                          ...iconCrossStyles,
                        }}
                      />
                    </View>
                    <View
                      height={diameter}
                      width={diameter}
                      backgroundColor="background"
                      boxShadow="soft"
                      transition="subtle"
                      opacity={disabled && "disabled"}
                      css={{
                        position: "absolute",
                        bottom: switchPadding + 1,
                        cursor: disabled ? "default" : "pointer",
                        transform: `translateX(${currentPos}px)`,
                        borderRadius: height,
                      }}
                    />
                  </View>
                  <Base
                    element="input"
                    id={id}
                    onChange={this.handleOnChange}
                    type="checkbox"
                    name={name}
                    disabled={disabled}
                    value={value}
                    checked={value}
                    data-testid="inputCheckbox"
                    css={{
                      position: "absolute",
                      left: -9999,
                    }}
                    {...props}
                  />
                </View>
                <View flexShrink={1} paddingX={3}>
                  {typeof label === "string" && (
                    <Text
                      color="default"
                      fontSize={sizeStyles[size].labelSize}
                      fontWeight="semibold"
                    >
                      {label}
                    </Text>
                  )}
                  {typeof label !== "string" && label}
                  {typeof helperText === "string" && (
                    <Text color="subtle" fontSize={sizeStyles[size].labelSize}>
                      {helperText}
                    </Text>
                  )}
                  {typeof helperText !== "string" && helperText}
                </View>
              </View>
            </>
          );
        }}
      </Theme.Consumer>
    );
  }
}

export default ToggleSwitch;
