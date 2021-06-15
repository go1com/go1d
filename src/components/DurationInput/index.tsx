import { merge } from "lodash";
import * as React from "react";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import InputSuffix from "../InputSuffix";
import View from "../View";

export interface DurationInputProps {
  disabled?: boolean;
  /**
   * a duration in minutes
   */
  value?: string | number;
  /**
   * a duration in minutes
   */
  defaultValue?: number;
  name: string;
  onBlur?: (evt: any) => void;
  onChange?: (evt: {
    target: {
      name: string;
      value: number;
    };
  }) => void;
  error?: string;
  dayText?: string;
  hourText?: string;
  minuteText?: string;
}

interface State {
  hours: string;
  days: string;
  minutes: string;
  value: number;
}

function getValueFromState(state: State) {
  return (
    ((parseInt(state.days, 10) || 0) * 24 + (parseInt(state.hours, 10) || 0)) *
      60 +
    (parseInt(state.minutes, 10) || 0)
  );
}

/**
 * An element which takes a value in the form of a total time in minutes and renders an input with hours, minutes and days. This component renders three inputs all controlled by the same value prop, which is the total time in minutes. The change event returns the updated value of the total time in minutes.
 */
export class DurationInput extends React.Component<DurationInputProps, State> {
  public static defaultProps = {
    dayText: "Days",
    hourText: "Hours",
    minuteText: "Minutes",
  };

  public static getDerivedStateFromProps(
    props: DurationInputProps,
    state: State
  ) {
    const value = props.value
      ? typeof props.value === "string"
        ? parseInt(props.value, 10)
        : props.value
      : null;

    if (value === null) {
      return null;
    }

    const calcValue = getValueFromState(state);
    if (value !== state.value && value !== calcValue) {
      let hours: number = 0;
      let minutes: number = 0;
      let days: number = 0;

      if (value > 0) {
        minutes = value % 60;
        hours = ((value - minutes) / 60) % 24;
        days = (value - minutes - hours * 60) / 1440;
      }

      return {
        value,
        hours: hours.toString(),
        minutes: minutes.toString(),
        days: days.toString(),
      };
    }

    return { value };
  }

  constructor(props: DurationInputProps) {
    super(props);

    let days = 0;
    let hours = 0;
    let minutes = 0;

    if (props.defaultValue > 0) {
      minutes = props.defaultValue % 60;
      hours = ((props.defaultValue - minutes) / 60) % 24;
      days = (props.defaultValue - minutes - hours * 60) / 1440;
    }

    this.state = {
      days: days.toString(),
      hours: hours.toString(),
      minutes: minutes.toString(),
      value: props.defaultValue || 0,
    };
  }

  @autobind
  public onBlur(evt: any) {
    const name = evt.target.name;
    this.setState({
      [name]: this.state[name] || "0",
    } as any);
    safeInvoke(this.props.onBlur, evt);
  }

  @autobind
  public onChange(evt: { target: { value: string; name: string } }) {
    const { name } = evt.target;
    const value = evt.target.value;

    if (parseInt(value, 10) > 999) {
      return;
    }

    const regex = new RegExp("^[0-9]*$");

    if (!regex.test(value)) {
      return;
    }

    const updatedState: any = merge(
      {},
      {
        minutes: this.state.minutes || "0",
        hours: this.state.hours || "0",
        days: this.state.days || "0",
      },
      { [name]: evt.target.value }
    );

    this.setState(updatedState, () => {
      const v = getValueFromState(this.state);
      this.setState({
        value: v,
      });
      safeInvoke(this.props.onChange, {
        target: {
          name: this.props.name,
          value: v,
        },
      });
    });
  }

  public render() {
    const { disabled } = this.props;
    return (
      <View flexDirection="row" justifyContent="space-between">
        <View marginRight={5} flexGrow={1} flexBasis="30%">
          <InputSuffix
            disabled={disabled}
            id="days"
            name="days"
            size="md"
            suffixValue={this.props.dayText}
            value={this.state.days.toString()}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </View>
        <View marginRight={5} flexGrow={1} flexBasis="30%">
          <InputSuffix
            disabled={disabled}
            id="hours"
            name="hours"
            size="md"
            suffixValue={this.props.hourText}
            value={this.state.hours.toString()}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </View>
        <View flexGrow={1} flexBasis="30%">
          <InputSuffix
            disabled={disabled}
            name="minutes"
            id="minutes"
            suffixValue={this.props.minuteText}
            size="md"
            value={this.state.minutes.toString()}
            onChange={this.onChange}
            onBlur={this.onBlur}
          />
        </View>
      </View>
    );
  }
}

export default DurationInput;
