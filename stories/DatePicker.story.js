import React from "react";
import { DatePicker } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, DatePicker);

export default {
  title: "Athletic/DatePicker",
  argTypes: argTypes,
  component: DatePicker,
  decorators: [
    (Story) => <div style={{ minHeight: '380px' }}><Story/></div>
  ],
};

export const BasicDatepicker = args => (
  <DatePicker {...args} id="id1" allowBlank defaultValue={new Date("2019-06-07")} />
);
export const DateSupplied = args => (
  <DatePicker {...args} id="id2" defaultValue={new Date("2019-06-07")} />
);
export const DisabledDatepicker = args => (
  <DatePicker {...args} id="id3" disabled defaultValue={new Date("2019-06-07")} />
);

export const Sizes = args => (
  <React.Fragment>
    <DatePicker {...args} id="id4" size="sm" defaultValue={new Date("2019-06-07")} />
    <br />
    <DatePicker {...args} id="id4" size="md" defaultValue={new Date("2019-06-07")} />
    <br />
    <DatePicker {...args} id="id4" size="lg" defaultValue={new Date("2019-06-07")} />
  </React.Fragment>
);

export const BasicDatepickerWithTime = args => (
  <DatePicker
    {...args}
    id="id5"
    time={true}
    defaultValue={new Date("2019-06-07 10:00")}
  />
);

BasicDatepickerWithTime.storyName = "Basic Datepicker with Time";
