import React from "react";
import { Spinner } from "../src";

export default {
  title: "Athletic/Loading Spinner",
  argTypes: {
    size: {
      defaultValue: '2',
      control: { type: 'range', min: 1, max: 10 }
    },
  },
  component: Spinner,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=6631%3A52150',
        label: 'See Loading Spinner designs in Figma',
      },
    ],
  }
};

export const Main = (args) => <Spinner {...args} />;
Main.storyName = "Main";
