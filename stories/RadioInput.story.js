import React from "react";
import { RadioInput, RadioGroup } from "../src";

export default {
  title: "Original Go1d/RadioInput",
};

export const Label = () => (
  <RadioGroup
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
