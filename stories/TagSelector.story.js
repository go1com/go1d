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
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=4474%3A2692',
        label: 'See Tag Selector designs in Figma',
      },
    ],
  }
};

export const BasicTagSelector = args => <TagSelector {...args} options={["Tag 1"]} />;
