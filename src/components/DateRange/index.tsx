import * as React from "react";
import { DateRangePicker } from "react-dates";
import "react-dates/initialize";
import ButtonMinimal from "../ButtonMinimal";
import Theme from "../Theme";
import View from "../View";

import IconChevronDown from "../Icons/ChevronDown";
import IconChevronLeft from "../Icons/ChevronLeft";
import IconChevronRight from "../Icons/ChevronRight";
import IconCross from "../Icons/Cross";

import "../DatePicker/css";

class DateRange extends React.Component<any, any> {
  public static defaultProps = {
    borderRadius: 5,
    value: {},
    defaultValue: {},
  };

  public constructor(props) {
    super(props);
    this.state = {
      startDate: props.defaultValue.startDate || null,
      endDate: props.defaultValue.endDate || null,
      focusedInput: "startDate",
    };
  }

  public handleDateChange = ({ startDate, endDate }) => {
    this.setState({
      startDate,
      endDate,
    });

    if (startDate === null && endDate === null) {
      if (this.props.onClear) {
        this.props.onClear();
      }
    }

    if (this.props.onChange) {
      this.props.onChange({
        startDate,
        endDate,
      });
    }
  };

  public handleFocusChange = focusedInput =>
    this.setState({
      focusedInput,
    });

  public render() {
    const {
      borderRadius,
      borderColor, // Do not pass
      onChange, // Do not pass
      onClear, // Do not pass
      disabled,
      value: { startDate, endDate },
      defaultValue, // Do not pass
      ...remainingProps
    } = this.props;

    return (
      <Theme.Consumer>
        {({ colors, radius, spacing, type, shadows }) => (
          <View
            css={[
              {
                ".DateRangePickerInput": {
                  width: "100%",
                  flexDirection: "row",
                  display: "flex",
                  fontSize: type.scale.md[2],
                  color:
                    this.state.startDate || this.state.endDate
                      ? colors.background
                      : colors.default,
                  overflow: "hidden",
                  borderRadius: radius[borderRadius],
                  backgroundColor:
                    this.state.startDate || this.state.endDate
                      ? colors.accent
                      : colors.background,
                  boxShadow:
                    this.state.focusedInput !== null
                      ? shadows.strong
                      : shadows.soft,
                  opacity: disabled ? "disabled" : null,
                },
                ".DateInput": {
                  flexGrow: 1,
                  flexShrink: 1,
                },
                ".DateInput_input": {
                  color:
                    this.state.startDate || this.state.endDate
                      ? colors.background
                      : colors.default,
                  fontSize: type.scale.md[2],
                  padding: spacing[3],
                  paddingLeft: spacing[4],
                  paddingRight: spacing[4],
                  paddingBottom: spacing[3],
                  textAlign: "left",
                },
                "#start_date_ID": {
                  borderRight: `1px solid ${colors.faded}`,
                },
                ".DateRangePickerInput_arrow": {
                  alignSelf: "center",
                },
                ".DateRangePickerInput__showClearDates": {
                  paddingRight:
                    this.state.endDate || this.state.startDate ? 30 : 0,
                },
                ".DateRangePickerInput_clearDates": {
                  padding: 0,
                  margin: 0,
                },
                ".DateRangePicker_picker": {
                  top: "42px !important",
                  borderRadius: radius[5],
                  overflow: "hidden",
                  boxShadow: shadows.strong,
                },
                ".DayPicker_weekHeaders": {
                  paddingBottom: spacing[2],
                },
                ".CalendarDay": {
                  verticalAlign: "middle",
                  border: "none",
                  cursor: "pointer",
                },
                ".DayPickerNavigation_button, .CalendarMonth_caption": {
                  padding: `${spacing[5]}px`,
                  "padding-bottom": `${spacing[7]}px`,
                },
                ".CalendarDay__selected_span, .CalendarDay__hovered_span, .CalendarDay__default:hover": {
                  background: colors.highlight,
                  color: colors.default,
                },
                ".CalendarDay__default:hover": {
                  borderRadius:
                    (this.state.startDate && !this.state.endDate) ||
                    (!this.state.startDate && this.state.endDate) // XOR
                      ? !this.state.startDate
                        ? "50% 0 0 50%"
                        : "0 50% 50% 0"
                      : "50%",
                },
                ".CalendarDay__selected_span:hover": {
                  borderRadius: "0 !important",
                },
                ".CalendarDay__blocked_out_of_range:hover": {
                  background: "none",
                },
                ".CalendarDay__selected_start": {
                  background: `${colors.accent} !important`,
                  color: `${colors.background} !important`,
                  borderRadius: "50% 0 0 50% !important",
                },
                ".CalendarDay__selected_end": {
                  background: colors.accent,
                  color: colors.background,
                  borderRadius: "0 50% 50% 0",
                },
                ".CalendarDay__blocked_out_of_range": {
                  color: "#cacccd !important",
                  background: "none !important",
                },
              },
            ]}
          >
            <DateRangePicker
              numberOfMonths={1}
              hideKeyboardShortcutsPanel={true}
              inputIconPosition="after"
              showClearDates={true}
              noBorder={true}
              navNext={<IconChevronRight size={2} color="subtle" />}
              navPrev={<IconChevronLeft size={2} color="subtle" />}
              weekDayFormat="dd"
              verticalSpacing={5}
              verticalHeight={7}
              horizontalMonthPadding={0}
              customArrowIcon={<React.Fragment />}
              customCloseIcon={
                this.state.endDate || this.state.startDate ? (
                  <ButtonMinimal
                    icon={IconCross}
                    size="sm"
                    data-testid="clearButton"
                    aria-label="Clear Icon"
                    css={{
                      background: "transparent !important",
                      svg: {
                        color:
                          this.state.startDate || this.state.endDate
                            ? `${colors.background} !important`
                            : `${colors.muted} !important`,
                      },
                    }}
                  />
                ) : null
              }
              customInputIcon={
                this.state.endDate || this.state.startDate ? null : (
                  <IconChevronDown size={3} color="muted" />
                )
              }
              startDate={startDate || this.state.startDate}
              startDateId="start_date_ID"
              endDate={endDate || this.state.endDate}
              endDateId="end_date_ID"
              onDatesChange={this.handleDateChange}
              focusedInput={this.state.focusedInput}
              onFocusChange={this.handleFocusChange}
              {...remainingProps}
            />
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default DateRange;
