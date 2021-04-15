import React from "react";
import { ConnectingShapes } from "../src";
import { ButtonFilled, Link } from "../src";
import View from "../src/components/View/";

export default {
  title: "Athletic/ConnectingShapes",
  component: ConnectingShapes,
};

export const Main = (args, { globals: { accent } }) => (
  <View
    css={{backgroundColor: accent}}
    padding={5}
  >
    <ConnectingShapes
      content={["Transformational", "Learning"]}
      colorBorderShape="complementary"
      colorShape="complementary"
      colorText="accent"
      {...args}
    />
  </View>
);
Main.storyName = "Main";

export const RichContent = (args, { globals: { accent } }) => (
  <View
    css={{backgroundColor: accent}}
    padding={5}
  >
    <ConnectingShapes
      content={[<Link href="#testing">Link</Link>, "Two words", <ButtonFilled {...args} color="accent">Call to action</ButtonFilled>]}
      colorBorderShape="complementary"
      colorShape="complementary"
      colorText="accent"
      {...args}
    />
  </View>
);
RichContent.storyName = "Rich content";

export const Outline = (args, { globals: { accent } }) => (
  <View
    backgroundColor="dangerHigh"
    padding={5}
  >
    <ConnectingShapes
      content={["Transformational", "Learning"]}
      colorBorderShape="dangerMid"
      colorShape="dangerHigh"
      colorText="accent"
      {...args}
    />
  </View>
);
Outline.storyName = "Outline style";
