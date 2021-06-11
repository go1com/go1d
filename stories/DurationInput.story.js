import React from 'react';
import { DurationInput } from '../src';

export default {
  title: 'Original Go1d/Duration Input',
  component: DurationInput,
};

const Template = (args) => <DurationInput {...args} />;
export const Main = Template.bind({});
Main.args = {
  name: "test",
  value: "1660",
};
