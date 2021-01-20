import React from "react";
import { TagSelector } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, TagSelector);

export default {
  title: "Original Go1d/TagSelector",
  argTypes: argTypes,
  component: TagSelector,
};

export const BasicTagSelector = args => <TagSelector {...args} options={["Tag 1"]} />;
