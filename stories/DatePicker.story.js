import React from "react";
import { DatePicker } from "../src";

export default {
  title: "Original Go1d/DatePicker",
};

export const BasicDatepicker = () => (
  <DatePicker id="id1" allowBlank defaultValue={new Date("2019-06-07")} />
);
export const DateSupplied = () => (
  <DatePicker id="id2" defaultValue={new Date("2019-06-07")} />
);
export const DisabledDatepicker = () => (
  <DatePicker id="id3" disabled defaultValue={new Date("2019-06-07")} />
);

export const Sizes = () => (
  <React.Fragment>
    <DatePicker id="id4" size="sm" defaultValue={new Date("2019-06-07")} />
    <br />
    <DatePicker id="id4" size="md" defaultValue={new Date("2019-06-07")} />
    <br />
    <DatePicker id="id4" size="lg" defaultValue={new Date("2019-06-07")} />
  </React.Fragment>
);

export const BasicDatepickerWithTime = () => (
  <DatePicker
    id="id5"
    time={true}
    defaultValue={new Date("2019-06-07 10:00")}
  />
);

BasicDatepickerWithTime.story = {
  name: "Basic Datepicker with Time",
};
