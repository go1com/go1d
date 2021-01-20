import React from "react";
import { Rating } from "../src";

export default {
  title: "Original Go1d/Rating",
  component: Rating,
};

export const BasicRating = () => <Rating name="rating" />;

export const RatingWithDefaultValue = () => (
  <Rating name="rating" defaultValue={3} />
);

RatingWithDefaultValue.storyName = "Rating with default value";

export const RatingWithLargeCount = () => (
  <Rating name="rating" defaultValue={3} count={37} />
);

RatingWithLargeCount.storyName = "Rating with large count";

export const RatingWithControlledValue = () => (
  <Rating name="rating" value={3} />
);

RatingWithControlledValue.storyName = "Rating with controlled value";
