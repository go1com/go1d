import get = require("lodash/get");
import * as Moment from "moment";
import * as React from "react";
import { SingleDatePicker } from "react-dates";
import "react-dates/initialize";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import ButtonMinimal from "../ButtonMinimal";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

import IconCalendar from "../Icons/Calendar";
import IconChevronLeft from "../Icons/ChevronLeft";
import IconChevronRight from "../Icons/ChevronRight";

import "./css";

export interface DatePickerProps extends ViewProps {
  onChange?: ({ startDate, endDate }) => void;
  children?: any;
  id: string;
  size?: "lg" | "md" | "sm";
  defaultValue?: Date | number;
  value?: Date | number;
  time?: boolean;
  allowBlank?: boolean;
  displayFormat?: string;
}

export interface DatePickerState {
  date: Moment.Moment;
  selectedDate?: Moment.Moment;
  focused: boolean;
  timeFocused: boolean;
  minute: string;
  hour: string;
}
safeInvoke(Moment.updateLocale, "en", {
  weekdaysMin: "S_M_T_W_T_F_S".split("_"),
});
class DatePicker extends React.Component<DatePickerProps, DatePickerState> {
  public static defaultProps = {
    size: "md",
    defaultValue: new Date(),
    disabled: false,
    allowBlank: false,
  };

  public static getDerivedStateFromProps(
    nextProps: DatePickerProps,
    prevState: DatePickerState
  ) {
    const date = nextProps.value ? Moment(nextProps.value) : prevState.date;

    return {
      date,
    };
  }

  constructor(props) {
    super(props);

    const date = props.value
      ? Moment(props.defaultValue)
      : Moment(props.value || props.defaultValue);

    this.state = {
      date,
      selectedDate: props.value,
      focused: false,
      timeFocused: false,
      minute: date.format("mm"),
      hour: date.format("hh"),
    };
  }

  @autobind
  public onChange(date: Moment.Moment) {
    safeInvoke(this.props.onChange, {
      target: {
        value: date ? date.valueOf() : null,
        name: this.props.name,
        id: this.props.id,
      },
    });
  }

  @autobind
  public handleFocus(evt: React.FocusEvent<any>) {
    this.setState({
      timeFocused: true,
    });

    safeInvoke(this.props.onFocus, evt);
  }

  @autobind
  public handleBlur(evt: React.FocusEvent<any>) {
    this.setState({
      timeFocused: false,
      hour: this.state.date.format("hh"),
      minute: this.state.date.format("mm"),
    });

    safeInvoke(this.props.onBlur, evt);
  }

  @autobind
  public changeHour(evt: React.SyntheticEvent<HTMLInputElement>) {
    const value = evt.currentTarget.value.substring(0, 2).replace(/\D/g, "");
    let hour = parseInt(value, 10);

    if (value !== "") {
      if (hour < 0 || hour > 12) {
        hour = 12;
      } else {
        hour = hour % 13;
      }

      const date = this.state.date;
      date.hour(
        this.state.date.get("hour") >= 12 ? (hour % 12) + 12 : hour % 12
      );
      this.setState({
        date,
        hour:
          parseInt(value, 10) < 13 && parseInt(value, 10) > 0
            ? value
            : hour.toString(),
      });
      this.onChange(date);
    } else {
      // allows clearing the field
      this.setState({ hour: value });
    }
  }

  @autobind
  public changeMinute(evt: React.SyntheticEvent<HTMLInputElement>) {
    const value = evt.currentTarget.value.substring(0, 2).replace(/\D/g, "");
    // We add 60 so the mod will work as js implements mod like -1 % 60 = -1 instead of 59
    let minute = (parseInt(evt.currentTarget.value, 10) + 60) % 60 || 0;
    if (value !== "") {
      if (minute > 60 || minute < 0) {
        minute = Math.min(Math.max(minute, 0), 60) % 60;
      } else {
        minute = minute % 60;
      }
      const date = this.state.date;

      date.minute(minute);
      this.setState({
        date,
        minute:
          parseInt(value, 10) < 60 && parseInt(value, 10) >= 0
            ? value
            : minute.toString(),
      });
      this.onChange(date);
    } else {
      this.setState({ minute: value });
    }
  }

  @autobind
  public changeMerridian() {
    const date = this.state.date;
    date.hour((date.get("hour") + 12) % 24);
    this.setState({ date });
    this.onChange(date);
  }

  @autobind
  public handleKeys(evt: any) {
    let value = null;
    switch (evt.keyCode) {
      // Up Arrow
      case 38:
        evt.preventDefault();
        value = parseInt(evt.currentTarget.value, 10) + 1;
        break;
      // Down Arrow
      case 40:
        evt.preventDefault();
        value = parseInt(evt.currentTarget.value, 10) - 1;
        break;
    }

    if (value !== null) {
      if (evt.target.name === "hour") {
        value = value % 13 || (evt.keyCode === 38 ? 1 : 12);
        this.changeHour({
          currentTarget: {
            value: value < 10 ? `0${value}` : value.toString(),
          },
        } as any);
      } else {
        value = (value + 60) % 60;
        this.changeMinute({
          currentTarget: { value: value < 10 ? `0${value}` : value.toString() },
        } as any);
      }
    }
  }

  @autobind
  public onDateChange(date: Moment.Moment) {
    const { allowBlank } = this.props;
    if (!date) {
      if (allowBlank) {
        this.setState({ selectedDate: null });
        this.onChange(null);
      }
      return;
    }
    const dateWithTime = this.props.time
      ? date
          .hour(this.state.date.get("hour"))
          .minute(this.state.date.get("minute"))
      : date;
    this.setState({ date: dateWithTime, selectedDate: date });
    this.onChange(date);
  }

  @autobind
  public getBorderColor() {
    const { timeFocused } = this.state;

    if (timeFocused) {
      return "accent";
    }

    return "faded";
  }

  @autobind
  public onFocusChange(focus: { focused: boolean }) {
    const { focused } = focus;
    this.setState({ focused });
  }

  @autobind
  public render() {
    const {
      id,
      size,
      date,
      onChange,
      disabled,
      time,
      defaultValue,
      value,
      allowBlank,
      displayFormat = "DD/MM/YYYY",
      ...remainingProps
    } = this.props;

    return (
      <Theme.Consumer>
        {({
          colors,
          radius,
          spacing,
          shadows,
          transitions,
          type,
          inputSizes,
        }) => (
          <View
            flexDirection="row"
            display="flex"
            css={[
              {
                ".SingleDatePicker": {
                  opacity: disabled ? 0.5 : 1,
                },
                ".DateInput": {
                  margin: 0,
                  padding: 0,
                  background: "transparent",
                  position: "relative",
                  display: "inline-block",
                  width: get({ lg: "120px", md: "100px", sm: "90px" }, size),
                  verticalAlign: "middle",
                },
                "td.CalendarDay, td.CalendarDay__selected": {
                  border: 0,
                  "border-radius": "100%",
                  "vertical-align": "middle",
                  ":hover, :focus, :active": {
                    "background-color": colors.accent,
                    color: colors.background,
                  },
                },
                "td.CalendarDay__selected": {
                  "background-color": colors.accent,
                },
                ".CalendarMonth_caption": {
                  "padding-bottom": `${spacing[7]}px`,
                },
                ".DayPicker__withBorder": {
                  "box-shadow":
                    "0 2px 6px rgba(0,0,0,.05),0 0 0 1px rgba(0,0,0,.07)",
                  "border-radius": `${radius[5]}px`,
                },
                ".SingleDatePickerInput": {
                  "border-radius": `${radius[3]}px`,
                  border: `1px solid ${colors.faded}`,
                  transition: transitions.subtle,
                  padding: `0 ${spacing[4]}px`,
                  "&:hover, &:focus": {
                    "border-color": colors.accent,
                  },
                },
                ".SingleDatePicker_picker": {
                  "box-shadow": shadows.strong,
                },
                ".DateInput_input, .DateInput_input__focused": {
                  "padding-top": `${
                    spacing[get({ lg: 4, md: 3, sm: 1 }, size)]
                  }px`,
                  "padding-bottom": `${
                    spacing[get({ lg: 4, md: 3, sm: 1 }, size)]
                  }px`,
                  "padding-right": 0,
                  height: `${inputSizes[size] - 2}px`,
                },
                ".CalendarDay, .DateInput_input, .DayPicker_weekHeader_li": {
                  "font-size": `${
                    type.scale[size][get({ lg: 3, md: 2, sm: 1 }, size)]
                  }px`,
                },
                ".DayPickerNavigation_button, .CalendarMonth_caption": {
                  padding: `${spacing[5]}px`,
                  "padding-bottom": `${spacing[7]}px`,
                },
              },
            ]}
          >
            <SingleDatePicker
              date={
                !this.state.selectedDate && this.props.allowBlank
                  ? null
                  : this.state.date
              }
              onDateChange={this.onDateChange}
              focused={this.state.focused}
              onFocusChange={this.onFocusChange}
              id={id}
              numberOfMonths={1}
              hideKeyboardShortcutsPanel={true}
              weekDayFormat="dd"
              inputIconPosition="after"
              displayFormat={displayFormat}
              navNext={<IconChevronRight size={2} color="subtle" />}
              navPrev={<IconChevronLeft size={2} color="subtle" />}
              verticalSpacing={5}
              verticalHeight={7}
              horizontalMonthPadding={0}
              customInputIcon={
                <IconCalendar
                  size={get({ lg: 3, md: 2, sm: 1 }, size)}
                  color="subtle"
                />
              }
              disabled={disabled}
              {...remainingProps}
            />
            {this.props.time && (
              <View
                element="label"
                marginLeft={3}
                backgroundColor="background"
                paddingX={get({ lg: 5, md: 4, sm: 1 }, size)}
                border={1}
                borderColor={this.getBorderColor()}
                flexDirection="row"
                alignItems="center"
                htmlFor={id}
                css={[{ "border-radius": `${radius[3]}px` }]}
                opacity={disabled ? "disabled" : null}
              >
                <Text
                  id={id}
                  element="input"
                  type="text"
                  name="hour"
                  lineHeight="ui"
                  fontSize={get({ lg: 3, md: 2, sm: 1 }, size)}
                  paddingY={get({ lg: 3, md: 2, sm: 1 }, size)}
                  paddingLeft={get({ lg: 0, md: 0, sm: 2 }, size)}
                  onKeyDown={this.handleKeys}
                  color="inherit"
                  value={this.state.hour}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  disabled={disabled}
                  onChange={this.changeHour}
                  data-testid="inputElement"
                  css={{
                    // get rid of default styles
                    width: "1.5em",
                    background: 0,
                    border: 0,
                    flexGrow: 1,
                  }}
                />
                <Text
                  lineHeight="ui"
                  marginRight={1}
                  fontSize={get({ lg: 3, md: 2, sm: 1 }, size)}
                  paddingY={get({ lg: 3, md: 2, sm: 1 }, size)}
                >
                  :
                </Text>
                <Text
                  id={id}
                  element="input"
                  type="text"
                  name="minute"
                  lineHeight="ui"
                  fontSize={get({ lg: 3, md: 2, sm: 1 }, size)}
                  paddingY={get({ lg: 3, md: 2, sm: 1 }, size)}
                  onKeyDown={this.handleKeys}
                  color="inherit"
                  value={this.state.minute}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  disabled={disabled}
                  onChange={this.changeMinute}
                  data-testid="inputElement"
                  css={{
                    // get rid of default styles
                    width: "1.5em",
                    background: 0,
                    border: 0,
                    flexGrow: 1,
                  }}
                />
                <ButtonMinimal
                  size={size}
                  fontSize={get({ lg: 3, md: 2, sm: 1 }, size)}
                  paddingY={get({ lg: 3, md: 2, sm: 1 }, size)}
                  width="2em"
                  color="default"
                  disabled={disabled}
                  onFocus={this.handleFocus}
                  onBlur={this.handleBlur}
                  onClick={this.changeMerridian}
                  backgroundColor="transparent"
                >
                  {this.state.date.format("A")}
                </ButtonMinimal>
              </View>
            )}
          </View>
        )}
      </Theme.Consumer>
    );
  }
}
export default DatePicker;
