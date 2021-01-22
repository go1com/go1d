import React from "react";
import { ErrorState } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, ErrorState);

export default {
  title: "Original Go1d/ErrorState",
  argTypes: argTypes,
  component: ErrorState,
};

export const Base = args => (
  <ErrorState {...args} title="No Content">
    This is a description for No Content
  </ErrorState>
);
