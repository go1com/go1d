import React from "react";
import { ConnectingShapes } from "../src";
import View from "../src/components/View/";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, ConnectingShapes);

export default {
  title: "Athletic/ConnectingShapes",
  argTypes: argTypes,
  component: ConnectingShapes,
};

export const Main = (args, { globals: { accent } }) => (
  <View
    css={{backgroundColor: accent}}
    padding={5}
  >
    <ConnectingShapes
      text="Transformational Learning"
      colorBorderShape="complementary"
      colorShape="complementary"
      colorText="accent"
      {...args}
    />
  </View>
);
Main.storyName = "Main";
