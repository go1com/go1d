import React from "react";
import moment from "moment";
import { DateRange } from "../src";

export default {
  title: "Athletic/DateRange",
  component: DateRange,
  parameters: {
    // Skip DateRange picker for Happo since we are not able to achieve consistent screenshots for it for following reasons:
    // 1. A Focus into the date range, causes a blinking cursor
    // 2. The Picker displays the current month, which can't be influenced in the current implementation
    happo: false, // this will disable all `Athletic/DateRange` stories
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=4751%3A30075',
        label: 'See Date Range designs in Figma',
      },
    ],
  },
  decorators: [
    (Story) => <div style={{ minHeight: '380px' }}><Story/></div>
  ],
};

export const BasicDateRange = () => <DateRange />;

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
