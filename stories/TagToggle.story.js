import React from "react";
import { TagToggle, View } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, TagToggle);

export default {
  title: "Athletic/TagToggle",
  argTypes: argTypes,
  component: TagToggle,
};

export const _TagToggle = args => (
  <React.Fragment>
    <View flexDirection="row">
      <TagToggle {...args} label="Mad Skillz" />
      <TagToggle {...args} label="Mad Skillz" />
      <TagToggle {...args} label="Mad Skillz" />
      <TagToggle {...args} label="Mad Skillz" />
    </View>
    <View flexDirection="row" alignItems="center" marginTop={5}>
      <TagToggle {...args} label="OK Skillz" size="sm" />
      <TagToggle {...args} label="Sick Skillz" size="md" />
      <TagToggle {...args} label="Mad Skillz" size="lg" />
    </View>
  </React.Fragment>
);
