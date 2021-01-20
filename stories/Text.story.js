import React from "react";
import { Text } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Text);

export default {
  title: "Original Go1d/Text",
  argTypes: argTypes,
  component: Text,
};

export const Base = args => (
  <Text
    {...args}
    color="subtle"
    fontSize={4}
    fontWeight="semibold"
    lineHeight="paragraph"
  >
    My large semibold subtle text
  </Text>
);
