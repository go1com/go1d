import React from "react";
import { Rating } from "../src";
import { IconGo1Logo, IconSuccess } from '../src/components/Icons';

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
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3894%3A922',
        label: 'See Rating designs in Figma',
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

export const DisableRating = args => (
  <Rating {...args} />
);
DisableRating.storyName = "Rating disabled";
DisableRating.argTypes = {
  name: { defaultValue: "rating", },
  disabled: { defaultValue: true, },
  value: { defaultValue: 3, },
};

export const RatingWithTwoColors = args => (
  <Rating {...args} />
);
RatingWithTwoColors.storyName = "Rating with two colors";
RatingWithTwoColors.argTypes = {
  name: { defaultValue: "rating", },
  selectedColor: { defaultValue: 'contrast', },
  unselectedColor: { defaultValue: 'noteMid', },
  value: { defaultValue: 3, },
};

export const RatingWithAnyIcon = args => (
  <Rating {...args} />
);
RatingWithAnyIcon.storyName = "Any icon can be used";
RatingWithAnyIcon.argTypes = {
  name: { defaultValue: "rating", },
  icon: { defaultValue: IconSuccess, },
  unselectedIcon: { defaultValue: IconGo1Logo, },
  value: { defaultValue: 3, },
};
RatingWithAnyIcon.parameters = {
  docs: {
    description: {
      story: "… but maybe shouldn't be!",
    },
  },
};

