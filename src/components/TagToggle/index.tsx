import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";
import Base from "../Base";
import Provider from "../Provider";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import View from "../View";

import { IconProps } from "../IconBase";
import CheckIcon from "../Icons/Check";
import PlusIcon from "../Icons/Plus";

const sizeStyles = {
  lg: {
    height: 48,
    paddingY: 3,
    paddingX: 5,
    typeScale: 3,
  },
  md: {
    height: 40,
    paddingY: 3,
    paddingX: 4,
    typeScale: 2,
  },
  sm: {
    height: 32,
    paddingY: 2,
    paddingX: 4,
    typeScale: 1,
  },
};

export interface TagToggleProps extends TextProps {
  id?: string;
  name?: string;
  label?: string;
  value?: boolean | string;
  defaultValue?: boolean | string;
  disabled?: boolean;
  size?: "lg" | "md" | "sm";
  activeIconName?: never; // Removed
  inactiveIconName?: string; // Removed
  activeIcon?: React.ComponentType<IconProps>;
  inactiveIcon?: React.ComponentType<IconProps>;
}

class TagToggle extends React.Component<
  TagToggleProps,
  { randomId: string; checkedState: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      randomId: `TagToggle_${Math.random()}`,
      checkedState: !!props.defaultValue,
    };
  }

  public handleOnChange = () => {
    const { checkedState } = this.state;
    const { onChange, name, value } = this.props;
    const lastValue = typeof value === "undefined" ? checkedState : value;

    this.setState({
      checkedState: !lastValue,
    });

    safeInvoke(onChange, {
      target: {
        name,
        value: lastValue,
        checked: lastValue,
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
      children,
      label,
      error, // Do not pass
      fontSize = 2,
      onChange, // Do not pass
      marginX,
      marginY,
      marginTop,
      defaultValue, // Do not pass
      marginBottom = 0,
      disabled = false,
      size = "md",
      activeIcon,
      inactiveIcon,
      ...props
    } = this.props;

    const { height, paddingY, paddingX, typeScale } = sizeStyles[size];

    const value = typeof propValue === "undefined" ? checkedState : propValue;
    const IconElement = value
      ? activeIcon || CheckIcon
      : inactiveIcon || PlusIcon;

    return (
      <Provider mode={value ? "dark" : "light"}>
        <Theme.Consumer>
          {({ colors }) => (
            <React.Fragment>
              <Base
                element="input"
                id={id}
                onChange={this.handleOnChange}
                type="checkbox"
                name={name}
                disabled={disabled}
                value={value}
                checked={value}
                css={{
                  position: "absolute",
                  opacity: 0,
                  ":disabled": {
                    // This gets overwritten by a global style unless we do this
                    opacity: "0 !important",
                  },
                  ":disabled + label": {
                    opacity: 0.5,
                    pointerEvents: "none",
                  },
                  ":hover + label, :focus + label": {
                    backgroundColor: colors.faded,
                    borderColor: "transparent",
                    color: colors.contrast,
                  },
                  ":focus + label": {
                    borderColor: !value && colors.accent,
                  },
                }}
                {...props}
              />
              <View
                element="label"
                htmlFor={id}
                display="inline-flex"
                flexDirection="row"
                alignItems="center"
                borderRadius={2}
                height={height}
                paddingY={paddingY}
                paddingX={paddingX}
                marginBottom={marginBottom}
                transition="quick"
                color={value ? "contrast" : "subtle"}
                backgroundColor={value ? "faint" : "background"}
                border={2}
                borderColor={value ? "transparent" : "soft"}
                css={{
                  cursor: "pointer",
                }}
                {...props}
              >
                <Text
                  lineHeight="ui"
                  fontSize={typeScale}
                  ellipsis={true}
                  fontWeight="semibold"
                  color="inherit"
                >
                  {label}
                  {children}
                </Text>
                {typeof IconElement === "function" && (
                  <IconElement
                    size={typeScale}
                    marginLeft={size === "lg" ? 4 : 3}
                  />
                )}
              </View>
            </React.Fragment>
          )}
        </Theme.Consumer>
      </Provider>
    );
  }
}

export default TagToggle;
