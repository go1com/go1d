import React from "react";
import { EmptyState } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, EmptyState);

export default {
  title: "Original Go1d/EmptyState",
  argTypes: argTypes,
  component: EmptyState,
};

export const Base = args => (
  <EmptyState
    {...args}
    title="No Content"
    actionText="Add Some Content"
    action={() => {}}
  >
    You have no content
  </EmptyState>
);
