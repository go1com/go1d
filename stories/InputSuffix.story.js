import React from "react";
import { InputSuffix } from "../src";

export default {
  title: "Original Go1d/InputSuffix",
  component: InputSuffix,
  parameters: {
    docs: {
      description: {
        component: 'While this component will let you use a suffix, you probably want the InputGroup component instead.'
      }
    },
  },
};

export const BasicInputSuffix = args => (
  <InputSuffix {...args} id="test" suffixValue="test.com" />
);

BasicInputSuffix.storyName = "Basic InputSuffix";
