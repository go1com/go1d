import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";
import Base from "../Base";
import View, { ViewProps } from "../View";

const sizeStyles = {
  lg: {
    height: 32,
    switchPadding: 3,
  },
  md: {
    height: 24,
    switchPadding: 2,
  },
  sm: {
    height: 16,
    switchPadding: 1,
  },
};

export interface ToggleSwitchProps extends ViewProps {
  id?: string;
  name?: string;
  value?: boolean | string;
  defaultValue?: boolean | string;
  disabled?: boolean;
  size?: "lg" | "md" | "sm";
  onChange?: (evt: React.ChangeEvent<any>) => void;
}

class ToggleSwitch extends React.Component<
  ToggleSwitchProps,
  { randomId: string; checkedState: boolean }
> {
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
      fontSize = 2,
      onChange,
      defaultValue,
      disabled = false,
      size = "md",
      ...props
    } = this.props;

    const { height, switchPadding } = sizeStyles[size];
    const width = height * 1.75;
    const diameter = height - switchPadding * 2;

    const value = typeof propValue === "undefined" ? checkedState : propValue;
    const currentPos = value ? width - diameter - switchPadding : switchPadding;

    return (
      <React.Fragment>
        <View
          element="label"
          htmlFor={id}
          width={width}
          height={height}
          position="relative"
          {...props}
        >
          <View
            width={width}
            height={height}
            backgroundColor={value ? "accent" : "subtle"}
            boxShadow="inner"
            transition="subtle"
            opacity={disabled && "disabled"}
            css={{
              cursor: disabled ? "default" : "pointer",
              borderRadius: height,
            }}
          />
          <View
            height={diameter}
            width={diameter}
            backgroundColor="background"
            boxShadow="soft"
            transition="subtle"
            opacity={disabled && "disabled"}
            css={{
              position: "absolute",
              bottom: switchPadding,
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
      </React.Fragment>
    );
  }
}

export default ToggleSwitch;
