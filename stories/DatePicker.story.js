import React from "react";
import { DatePicker } from "../src";

export default {
  title: "Athletic/DatePicker",
  component: DatePicker,
  decorators: [
    (Story) => <div style={{ minHeight: '380px' }}><Story/></div>
  ],
};

export const BasicDatepicker = args => (
  <DatePicker {...args} />
);
BasicDatepicker.argTypes = {
  id: { defaultValue: "id1" },
  allowBlank: { defaultValue: true },
  defaultValue: { defaultValue: new Date("2019-06-07T00:00:00.000+08:00") },
};

export const DateSupplied = () => (
  <DatePicker id="id2" defaultValue={new Date("2019-06-07T00:00:00.000+08:00")} />
);
DateSupplied.parameters = { controls: { hideNoControlsWarning: true } };

export const DisabledDatepicker = () => (
  <DatePicker id="id3" disabled defaultValue={new Date("2019-06-07T00:00:00.000+08:00")} />
);
DisabledDatepicker.parameters = { controls: { hideNoControlsWarning: true } };

export const Sizes = () => (
  <React.Fragment>
    <DatePicker id="id4" size="sm" defaultValue={new Date("2019-06-07T00:00:00.000+08:00")} />
    <br />
    <DatePicker id="id5" size="md" defaultValue={new Date("2019-06-07T00:00:00.000+08:00")} />
    <br />
    <DatePicker id="id6" size="lg" defaultValue={new Date("2019-06-07T00:00:00.000+08:00")} />
  </React.Fragment>
);
Sizes.parameters = { controls: { hideNoControlsWarning: true } };

export const BasicDatepickerWithTime = args => (<DatePicker {...args} />);
BasicDatepickerWithTime.storyName = "Basic Datepicker with Time";
BasicDatepickerWithTime.argTypes = {
  id: { defaultValue: "id7" },
  time: { defaultValue: true },
  defaultValue: { defaultValue: new Date("2019-06-07 10:00") },
};

