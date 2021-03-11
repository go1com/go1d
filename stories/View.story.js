import React from "react";
import { View, Text } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, View);

export default {
  title: "Athletic/View",
  argTypes: argTypes,
  component: View,
};

export const BasicUsage = args => (
  <View {...args}>
    <Text>My View</Text>
  </View>
);

export const ResponsiveExamples = args => (
  <React.Fragment>
    <View flexDirection="row" flexWrap="wrap">
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>A</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>B</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>C</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>D</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>A</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>B</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>C</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>D</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>A</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>B</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>C</Text>
      </View>
      <View width={[1 / 3, 1 / 6, 1 / 12]}>
        <Text>D</Text>
      </View>
    </View>
    <View flexDirection="row" flexWrap="wrap">
      <View width={[1, 1 / 2, 1 / 4]}>
        <Text>A</Text>
      </View>
      <View width={[1, 1 / 2, 1 / 4]}>
        <Text>B</Text>
      </View>
      <View width={[1, 1 / 2, 1 / 4]}>
        <Text>C</Text>
      </View>
      <View width={[1, 1 / 2, 1 / 4]}>
        <Text>D</Text>
      </View>
    </View>
  </React.Fragment>
);
