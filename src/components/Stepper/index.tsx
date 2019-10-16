import * as React from "react";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import ButtonMinimal from "../ButtonMinimal";
import Text, { TextProps } from "../Text";
import View from "../View";

export interface StepperProps extends TextProps {
  id: string;
  name?: string;
  value?: number;
  label?: string;
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
  };

  constructor(props) {
    super(props);

    let value = props.value;
    if (value === undefined) {
      value = props.defaultValue || 0;
    }

    this.state = {
      isFocused: false,
      value,
    };
  }

  @autobind
  public handleBlur(evt: React.FocusEvent<any>) {
    if (!evt.target.value || evt.target.value === "-") {
      this.setState({
        value: 0,
      });
    }
    this.setState({
      isFocused: false,
    });

    safeInvoke(this.props.onBlur, evt);
  }

  @autobind
  public handleChange(evt: React.ChangeEvent<any>) {
    const { maxNumber, minNumber, name } = this.props;
    if (evt.target.value === "-") {
      this.setState({
        value: evt.target.value,
      });
      safeInvoke(this.props.onChange, {
        target: {
          name,
          value: 0,
        },
      });
      return;
    }

    const reg = new RegExp("^-?[0-9]+$");
    if (reg.test(evt.target.value)) {
      let newValue: number | string = Number(evt.target.value);
      if (!this.props.value) {
        if (newValue > maxNumber || newValue < minNumber) {
          newValue = this.state.value;
        }
        this.setState({
          value: newValue,
        });
      } else {
        if (newValue > maxNumber || newValue < minNumber) {
          newValue = this.props.value;
        }
      }
      safeInvoke(this.props.onChange, {
        target: {
          name,
          value: newValue,
        },
      });
    } else if (!evt.target.value) {
      if (!this.props.value) {
        this.setState({
          value: "",
        });
      }
      safeInvoke(this.props.onChange, {
        target: {
          name,
          value: 0,
        },
      });
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

    return borderColor || "soft";
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
      return typeof this.state.value === "number" ? this.state.value : 0;
    }

    return nextValue;
  }

  @autobind
  public increment() {
    const { stepIncrement, maxNumber } = this.props;

    this.updateStep(
      Math.min(this.getCurrentValue() + Math.abs(stepIncrement), maxNumber)
    );
  }

  @autobind
  public decrement() {
    const { stepIncrement, minNumber } = this.props;

    this.updateStep(
      Math.max(this.getCurrentValue() - Math.abs(stepIncrement), minNumber)
    );
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
      ...props
    } = this.props;

    let value: number | string =
      propValue === undefined ? this.state.value : propValue;

    if (value === 0 && (this.state.value === "" || this.state.value === "-")) {
      value = this.state.value;
    }

    return (
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
      >
        <View backgroundColor="transparent">
          <ButtonMinimal
            size="md"
            iconName="Minus"
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
        <View flexBasis="100%" flexShrink={1}>
          <Text
            id={id}
            value={value}
            element="input"
            type="text"
            lineHeight="ui"
            paddingX={3}
            paddingY={3}
            color="inherit"
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            disabled={disabled}
            onBlur={this.handleBlur}
            data-testid="inputElement"
            textAlign="center"
            {...props}
          />
        </View>
        <View backgroundColor="transparent">
          <ButtonMinimal
            size="md"
            iconName="Plus"
            color="default"
            onClick={this.increment}
            disabled={
              disabled ||
              (maxNumber !== undefined &&
                typeof value === "number" &&
                value + Math.abs(stepIncrement) > maxNumber)
            }
          />
        </View>
      </View>
    );
  }
}

export default TextInput;
