import React from "react";
import { Rating } from "../src";

export default {
  title: "Athletic/Rating",
  component: Rating,
  argTypes: {
    unselectedIconName: {
      control: { disable: true },
    },
  },
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

export const BasicRating = args => <Rating {...args} />;
BasicRating.argTypes = {
  name: { defaultValue: "rating", },
};

export const RatingWithDefaultValue = args => (<Rating {...args} />);
RatingWithDefaultValue.storyName = "Rating with default value";
RatingWithDefaultValue.argTypes = {
  name: { defaultValue: "rating", },
  defaultValue: { defaultValue: 3, },
};

export const RatingWithLargeCount = args => (<Rating {...args} />);
RatingWithLargeCount.storyName = "Rating with large count";
RatingWithLargeCount.argTypes = {
  name: { defaultValue: "rating", },
  defaultValue: { defaultValue: 3, },
  count: { defaultValue: 37, },
};

export const RatingWithControlledValue = args => (
  <Rating {...args} />
);
RatingWithControlledValue.storyName = "Rating with controlled value";
RatingWithControlledValue.argTypes = {
  name: { defaultValue: "rating", },
  value: { defaultValue: 3, },
};
