import React from "react";
import { RadioInput, RadioGroup } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, RadioInput);

export default {
  title: "Athletic/RadioGroup",
  argTypes: argTypes,
  component: RadioGroup,
};

export const Label = args => (
  <RadioGroup
    {...args}
    name="TestInput"
    options={[
      {
        label: "test",
        value: "testValue",
      },
      {
        label: "test 2",
        value: "testValue 2",
      },
    ]}
  />
);
