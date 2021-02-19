import React from "react";
import { Rating } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Rating);

export default {
  title: "Athletic/Rating",
  argTypes: argTypes,
  component: Rating,
};

export const BasicRating = args => <Rating {...args} name="rating" />;

export const RatingWithDefaultValue = args => (
  <Rating {...args} name="rating" defaultValue={3} />
);

RatingWithDefaultValue.storyName = "Rating with default value";

export const RatingWithLargeCount = args => (
  <Rating {...args} name="rating" defaultValue={3} count={37} />
);

RatingWithLargeCount.storyName = "Rating with large count";

export const RatingWithControlledValue = args => (
  <Rating {...args} name="rating" value={3} />
);

RatingWithControlledValue.storyName = "Rating with controlled value";
