import React from "react";
import { DatePicker, View } from "../src";

export default {
  title: "Athletic/DatePicker",
  component: DatePicker,
  decorators: [
    (Story) => <div style={{ minHeight: '380px' }}><Story/></div>
  ],
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3494%3A0',
        label: 'See Date Picker designs in Figma',
      },
    ],
  }
};

export const BasicDatepicker = args => (
  <DatePicker {...args} />
);
BasicDatepicker.argTypes = {
  id: { defaultValue: "id1" },
  allowBlank: { defaultValue: true },
  defaultValue: { defaultValue: new Date("2019-06-07T00:00:00.000Z") },
};

export const DateSupplied = () => (
  <DatePicker id="id2" defaultValue={new Date("2019-06-07T00:00:00.000Z")} />
);
DateSupplied.parameters = { controls: { hideNoControlsWarning: true } };

export const DisabledDatepicker = () => (
  <DatePicker id="id3" disabled defaultValue={new Date("2019-06-07T00:00:00.000Z")} />
);
DisabledDatepicker.parameters = { controls: { hideNoControlsWarning: true } };

export const Sizes = () => (
  <React.Fragment>
    <DatePicker id="id4" size="sm" defaultValue={new Date("2019-06-07T00:00:00.000Z")} />
    <br />
    <DatePicker id="id5" size="md" defaultValue={new Date("2019-06-07T00:00:00.000Z")} />
    <br />
    <DatePicker id="id6" size="lg" defaultValue={new Date("2019-06-07T00:00:00.000Z")} />
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

export const BasicDatepickerWithLabel = () => (
  <>
    <DatePicker
      floating
      label='Start date'
      size='sm'
    />
    <br />
    <DatePicker
      floating
      label='Start date'
    />
    <br />
    <DatePicker
      floating
      label='Start date'
      size='lg'
    />
  </>
)
BasicDatepickerWithLabel.argTypes = {
  id: { defaultValue: "id8" },
  defaultValue: { defaultValue: new Date("2021-05-14T00:00:00.000Z") },
};

export const BasicDatepickerWithLongLabel = () => (
  <>
    <DatePicker
      floating
      label='This is a very very very very very very very long label'
      size='sm'
    />
    <br />
    <DatePicker
      floating
      label='This is a very very very very very very very long label'
    />
    <br />
    <DatePicker
      floating
      label='This is a very very very very very very very long label'
      size='lg'
    />
    <br />
    <View maxWidth={320} padding={6} backgroundColor="delicate">
      <DatePicker
        floating
        label='This is a very very very very very very very long label within a very small container'
      />
    </View>
  </>
)
BasicDatepickerWithLongLabel.argTypes = {
  id: { defaultValue: "id8" },
  defaultValue: { defaultValue: new Date("2021-05-14T00:00:00.000Z") },
};

export const WithPastDate = () => (
  <DatePicker
    floating
    label='past date'
    enablePastDate
  />
)
BasicDatepickerWithLabel.argTypes = {
  id: { defaultValue: "past_date" },
};