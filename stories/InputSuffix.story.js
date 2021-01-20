import React from "react";
import { InputSuffix } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, InputSuffix);

export default {
  title: "Original Go1d/InputSuffix",
  argTypes: argTypes,
  component: InputSuffix,
};

export const BasicInputSuffix = args => (
  <InputSuffix {...args} id="test" suffixValue="test.com" />
);

BasicInputSuffix.storyName = "Basic InputSuffix";
