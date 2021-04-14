import React from "react";
import { Spinner } from "../src";

export default {
  title: "Athletic/Spinner",
  argTypes: {
    size: {
      defaultValue: '2',
      control: { type: 'range', min: 1, max: 10 }
    },
  },
  component: Spinner,
};

export const Main = (args) => <Spinner {...args} />;
Main.storyName = "Main";
