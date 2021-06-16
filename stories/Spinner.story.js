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
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3105%3A14386',
        label: 'We need your help! Please add a page in Figma using the template and update this link.',
      },
    ],
  }
};

export const Main = (args) => <Spinner {...args} />;
Main.storyName = "Main";
