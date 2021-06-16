import React from "react";
import { CircleProgress } from "../src";

export default {
  title: "Original Go1d/CircleProgress",
  component: CircleProgress,
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

export const CircleProgressStory = args => (
  <CircleProgress {...args} />
);
CircleProgressStory.storyName = "Circle Progress";

export const WithPercentage = args => (
  <CircleProgress {...args} progress={50} size={100} lineWidth={50} showProgress={true} />
);
WithPercentage.storyName = "with percentage";

export const WithNoPercentage = args => (
  <CircleProgress {...args} progress={75} size={20} lineWidth={50} showProgress={false} />
);
WithNoPercentage.storyName = "with no percentage";

