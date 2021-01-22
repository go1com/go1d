import React from "react";
import { TextArea } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, TextArea);

export default {
  title: "Original Go1d/TextArea",
  argTypes: argTypes,
  component: TextArea,
};

export const Label = args => <TextArea {...args} id="Testing" />;
