import React from "react";
import { LineProgress } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, LineProgress);

export default {
  title: "Original Go1d/Line Progress Bar",
  argTypes: argTypes,
  component: LineProgress,
};

export const WithPercent = args => (
  <div style={{ width: "50%" }}>
    <LineProgress {...args} percent={50} />
  </div>
);

WithPercent.storyName = "with percent";
