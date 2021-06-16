import React from "react";
import { TagSelector } from "../src";

export default {
  title: "Athletic/TagSelector",
  component: TagSelector,
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

export const BasicTagSelector = args => <TagSelector {...args} options={["Tag 1"]} />;
