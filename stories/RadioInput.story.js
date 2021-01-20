import React from "react";
import { RadioInput, RadioGroup } from "../src";

export default {
  title: "Original Go1d/RadioGroup",
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
