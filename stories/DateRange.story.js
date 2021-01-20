import React from "react";
import moment from "moment";
import { DateRange } from "../src";

export default {
  title: "Original Go1d/DateRange",
  parameters: {
    // Skip DateRange picker for Happo since we are not able to achieve consistent screenshots for it for following reasons:
    // 1. A Focus into the date range, causes a blinking cursor
    // 2. The Picker displays the current month, which can't be influenced in the current implementation
    happo: false, // this will disable all `Original Go1d/DateRange` stories
  },
};

export const BasicDatepicker = () => <DateRange />;

export const DefaultValue = () => (
  <DateRange
    defaultValue={{
      startDate: new moment("2019-12-05"),
      endDate: new moment("2019-12-15"),
    }}
  />
);

export const ControlledValue = () => (
  <DateRange
    value={{
      startDate: new moment("2019-12-05"),
      endDate: new moment("2019-12-15"),
    }}
  />
);
