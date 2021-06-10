import get = require("lodash/get");
import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";
import Base from "../Base";
import Text, { TextProps } from "../Text";
import View from "../View";

import IconCheck from "../Icons/Check";
import IconMinus from "../Icons/Minus";

export interface CheckboxProps extends TextProps {
  id?: string;
  name?: string;
  label?: string;
  value?: boolean | string;
  disabled?: boolean;
  error?: boolean;
  isStatic?: boolean; // If true onChange will stop working. It'll be just the markup of a Checkbox
  indeterminate?: boolean;
  size?: "lg" | "md" | "sm";
}

const checkboxSizes = {
  lg: 32,
  md: 24,
  sm: 16,
};

const checkboxRadiusValues = {
  lg: 2,
  md: 2,
  sm: 1,
};

const iconSizes = {
  lg: 4,
  md: 2,
  sm: 1,
};

const fontSizes = {
  lg: 3,
  md: 2,
  sm: 1,
};

class Checkbox extends React.Component<
  CheckboxProps,
  { randomId: string; checkedState: boolean }
> {
  constructor(props) {
    super(props);
    this.state = {
      randomId: `RadioInput_${Math.random()}`,
      checkedState: !!props.value,
    };
  }

  public handleOnChange = () => {
    const { checkedState } = this.state;
    const { onChange, name, value } = this.props;
    const newValue = !(value === undefined || value === ""
      ? checkedState
      : value);

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

  public getBorderColor(currentCheckedState) {
    const { error } = this.props;

    if (error) {
      return "danger";
    }
    if (currentCheckedState) {
      return "accent";
    }

    return "faded";
  }

  public render() {
    const { randomId, checkedState } = this.state;

    const {
      name,
      id = randomId,
      value: propValue,
      indeterminate,
      children,
      label,
      error, // Do not pass
      fontSize,
      onChange, // Do not pass
      marginX,
      marginY,
      marginTop,
      isStatic = false,
      marginBottom,
      disabled = false,
      color = "contrast",
      size = "md",
      fontWeight,
      ...props
    } = this.props;

    const value =
      propValue === undefined || propValue === "" ? checkedState : propValue;

    const checkboxSize = get(checkboxSizes, size);
    const checkboxRadius = get(checkboxRadiusValues, size);
    const iconSize = get(iconSizes, size);
    const scaledFontSize =
      fontSize !== undefined ? fontSize : get(fontSizes, size);

    return (
      <React.Fragment>
        <View
          element="label"
          htmlFor={!isStatic ? id : undefined}
          flexDirection="row"
          marginX={marginX}
          marginY={marginY}
          marginTop={marginTop}
          marginBottom={marginBottom}
          css={{
            cursor: "pointer",
          }}
          {...props}
        >
          <View
            borderColor={this.getBorderColor(value)}
            backgroundColor="background"
            borderRadius={checkboxRadius}
            alignItems="center"
            justifyContent="center"
            opacity={disabled ? "disabled" : null}
            width={checkboxSize}
            height={checkboxSize}
            css={{
              borderWidth: 1,
            }}
          >
            {!indeterminate && value && (
              <IconCheck size={iconSize} color="accent" />
            )}
            {indeterminate && <IconMinus size={iconSize} color="accent" />}
          </View>
          <Text
            color={color}
            fontWeight={fontWeight}
            fontSize={scaledFontSize}
            title={label}
            paddingLeft={3}
            ellipsis={true}
            css={{
              alignSelf: "center",
            }}
          >
            {label}
            {children}
          </Text>
        </View>
        {!isStatic && (
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
              left: -9999,
            }}
            {...props}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Checkbox;
