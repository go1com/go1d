import * as React from "react";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import ButtonMinimal from "../ButtonMinimal";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import View from "../View";

import IconMinus from "../Icons/Minus";
import IconPlus from "../Icons/Plus";

export interface StepperProps extends TextProps {
  id: string;
  name?: string;
  value?: number;
  unitLabel?: string;
  stepIncrement?: number;
  maxNumber?: number;
  minNumber?: number;
  disabled?: boolean;
  tabIndex?: string;
  onChange?: (evt: React.ChangeEvent<any>) => void;
  onFocus?: (evt: React.FocusEvent<any>) => void;
  onBlur?: (evt: React.FocusEvent<any>) => void;
  error?: boolean;
  borderColor?: string;
  borderRadius?: number;
  defaultValue?: number;
  hideButtons?: boolean;
  disableResetOnBlur?: boolean;
  allowDecimal?: boolean;
}

interface StepperState {
  isFocused: boolean;
  value: number | string;
}

class TextInput extends React.PureComponent<StepperProps, StepperState> {
  public static displayName = "Stepper";

  public static defaultProps = {
    borderRadius: 2,
    stepIncrement: 1,
    maxNumber: Number.MAX_SAFE_INTEGER,
    minNumber: Number.MIN_SAFE_INTEGER,
    disableResetOnBlur: false,
  };

  public static getDerivedStateFromProps(
    props: StepperProps,
    state: StepperState
  ) {
    if (props.value !== undefined) {
      const stateValue = Number(state.value) || 0;
      if (props.value !== stateValue) {
        return {
          value: props.value,
        };
      }
    }
    return null;
  }

  constructor(props) {
    super(props);

    let value = props.value;
    if (value === undefined) {
      value = props.defaultValue || this.getResetValue(value);
    }

    this.state = {
      isFocused: false,
      value,
    };
  }

  @autobind
  public getResetValue(value?: string | number) {
    if (!value && this.props.defaultValue === undefined) {
      return null;
    }

    value = Number(value);
    if (isNaN(value)) {
      value = 0;
    }

    return (
      this.props.defaultValue ||
      Math.max(this.props.minNumber, Math.min(this.props.maxNumber, value))
    );
  }

  @autobind
  public handleBlur() {
    const { name, maxNumber, minNumber } = this.props;
    const { value } = this.state;

    this.setState({
      isFocused: false,
    });

    let newValue;

    if (value > maxNumber || value < minNumber || !value || value === "-") {
      newValue = this.getResetValue(value);
    } else {
      newValue = Number(value) || 0;
    }

    this.setState({
      value: newValue,
    });

    safeInvoke(this.props.onChange, {
      target: {
        name,
        value: newValue === 0 ? String(newValue) : newValue,
      },
    });

    safeInvoke(this.props.onBlur, {
      target: {
        name,
        value: newValue,
      },
    });
  }

  @autobind
  public handleChange({ target: { value } }: React.ChangeEvent<any>) {
    const { name, allowDecimal = false } = this.props;
    const reg = new RegExp(`^-?[0-9]*${allowDecimal ? ".?" : ""}[0-9]*$`);
    if (reg.test(value)) {
      const newValue: number = Number(value) || 0;
      this.setState({
        value,
      });
      safeInvoke(this.props.onChange, {
        target: {
          name,
          value: newValue,
        },
      });
    } else {
      if (value === "") {
        this.setState({
          value: null,
        });
        safeInvoke(this.props.onChange, {
          target: {
            name,
            value: null,
          },
        });
      }
    }
  }

  @autobind
  public handleFocus(evt: React.FocusEvent<any>) {
    this.setState({
      isFocused: true,
    });

    safeInvoke(this.props.onFocus, evt);
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

    return borderColor || "delicate";
  }

  @autobind
  public updateStep(value: any) {
    const { name, onChange, value: propsValue } = this.props;

    if (propsValue === undefined) {
      this.setState({
        value,
      });
    }

    safeInvoke(onChange, {
      target: {
        name,
        value,
      },
    });
  }

  @autobind
  public getCurrentValue() {
    const nextValue = this.props.value;

    if (nextValue === undefined) {
      return Number(this.state.value) || 0;
    }

    return Number(nextValue);
  }

  @autobind
  public increment() {
    const { stepIncrement, maxNumber, allowDecimal } = this.props;

    const currentValue = this.getCurrentValue();
    let newValue = currentValue + Math.abs(stepIncrement);
    if (allowDecimal) {
      newValue = Number(newValue.toPrecision(7));
    }
    this.updateStep(Math.min(newValue, maxNumber));
  }

  @autobind
  public decrement() {
    const { stepIncrement, minNumber, allowDecimal } = this.props;

    const currentValue = this.getCurrentValue();
    let newValue = currentValue - Math.abs(stepIncrement);
    if (allowDecimal) {
      newValue = Number(newValue.toPrecision(7));
    }
    this.updateStep(Math.max(newValue, minNumber));
  }

  public render() {
    const {
      id,
      borderRadius,
      disabled,
      stepIncrement,
      onBlur,
      onChange,
      value: propValue,
      onFocus,
      maxNumber,
      minNumber,
      unitLabel,
      boxShadow = "inner",
      hideButtons,
      disableResetOnBlur,
      ...props
    } = this.props;

    let value: string | number = propValue;

    if (value === undefined) {
      value = this.state.value;
    }

    return (
      <Theme.Consumer>
        {({ radius }) => (
          <View
            flexDirection="row"
            border={1}
            borderColor={this.getBorderColor()}
            borderRadius={borderRadius}
            backgroundColor="background"
            alignItems="center"
            htmlFor={id}
            opacity={disabled ? "disabled" : null}
          >
            {!hideButtons && (
              <View backgroundColor="transparent">
                <ButtonMinimal
                  size="md"
                  icon={IconMinus}
                  color="default"
                  onClick={this.decrement}
                  disabled={
                    disabled ||
                    (minNumber !== undefined &&
                      typeof value === "number" &&
                      value - Math.abs(stepIncrement) < minNumber)
                  }
                />
              </View>
            )}
            <View flexBasis="100%" flexShrink={1}>
              <Text
                id={id}
                value={this.state.value === null ? "" : this.state.value}
                element="input"
                type="text"
                lineHeight="ui"
                paddingX={3}
                paddingY={3}
                color="inherit"
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                disabled={disabled}
                onBlur={disableResetOnBlur ? undefined : this.handleBlur}
                data-testid="inputElement"
                textAlign="center"
                {...props}
              />
            </View>
            {!hideButtons && (
              <View backgroundColor="transparent">
                <ButtonMinimal
                  size="md"
                  icon={IconPlus}
                  color="default"
                  onClick={this.increment}
                  data-testid="increment"
                  disabled={
                    disabled ||
                    (maxNumber !== undefined &&
                      typeof value === "number" &&
                      value + Math.abs(stepIncrement) > maxNumber)
                  }
                />
              </View>
            )}
            {unitLabel && (
              <View
                backgroundColor="soft"
                justifyContent="center"
                paddingX={4}
                borderLeft={1}
                borderColor={this.getBorderColor()}
                css={{
                  borderRadius: `0 ${radius[3]}px ${radius[3]}px 0`,
                  alignSelf: "stretch",
                }}
              >
                {unitLabel}
              </View>
            )}
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default TextInput;
