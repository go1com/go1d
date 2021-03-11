import React from "react";
import moment from "moment";
import { DateRange } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, DateRange);

export default {
  title: "Athletic/DateRange",
  argTypes: argTypes,
  parameters: {
    // Skip DateRange picker for Happo since we are not able to achieve consistent screenshots for it for following reasons:
    // 1. A Focus into the date range, causes a blinking cursor
    // 2. The Picker displays the current month, which can't be influenced in the current implementation
    happo: false, // this will disable all `Original Go1d/DateRange` stories
  },
  decorators: [
    (Story) => <div style={{ minHeight: '380px' }}><Story/></div>
  ],
};

export const BasicDateRange = args => <DateRange />;

export const DefaultValue = args => (
  <DateRange
    defaultValue={{
      startDate: new moment("2019-12-05"),
      endDate: new moment("2019-12-15"),
    }}
  />
);

export const ControlledValue = args => (
  <DateRange
    value={{
      startDate: new moment("2019-12-05"),
      endDate: new moment("2019-12-15"),
    }}
  />
);
