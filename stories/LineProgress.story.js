import React from "react";
import { LineProgress } from "../src";

export default {
  title: "Original Go1d/Line Progress Bar",
  component: LineProgress,
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

export const WithPercent = args => (
  <div style={{ width: "50%" }}>
    <LineProgress {...args} percent={50} />
  </div>
);

WithPercent.storyName = "with percent";
