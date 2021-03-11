import React from "react";
import { VisuallyHidden, View, Text } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, VisuallyHidden);

export default {
  title: "Athletic/VisuallyHidden",
  argTypes: argTypes,
  component: VisuallyHidden,
};

export const Main = args => (
  <View {...args}>
    <Text>This story contains a visually hidden element so that you may provide screen readers with meaningful text. Use a screen reader or inspect the DOM to find it here: <VisuallyHidden>This text is visually hidden.</VisuallyHidden></Text>
  </View>
);

