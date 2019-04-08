import * as React from "react";
import safeInvoke from "../../utils/safeInvoke";
import Base from "../Base";
import Icon from "../Icon";
import Text, { TextProps } from "../Text";
import View from "../View";

export interface CheckboxProps extends TextProps {
  id?: string;
  name?: string;
  label?: string;
  value?: boolean | string;
  disabled?: boolean;
  error?: boolean;
  isStatic?: boolean; // If true onChange will stop working. It'll be just the markup of a Checkbox
}

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
      children,
      label,
      error, // Do not pass
      fontSize = 2,
      onChange, // Do not pass
      marginX,
      marginY,
      marginTop,
      isStatic = false,
      marginBottom,
      disabled = false,
      color = "contrast",
      fontWeight,
      ...props
    } = this.props;

    const value =
      propValue === undefined || propValue === "" ? checkedState : propValue;

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
            borderRadius={2}
            alignItems="center"
            justifyContent="center"
            opacity={disabled ? "disabled" : null}
            css={{
              height: 24,
              width: 24,
              borderWidth: 1,
            }}
          >
            {value && <Icon color="accent" name="Check" />}
          </View>
          <Text
            color={color}
            fontWeight={fontWeight}
            fontSize={fontSize}
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
