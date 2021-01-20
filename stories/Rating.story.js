import React from "react";
import { Rating } from "../src";

export default {
  title: "Original Go1d/rating",
};

export const BasicRating = () => <Rating name="rating" />;

export const RatingWithDefaultValue = () => (
  <Rating name="rating" defaultValue={3} />
);

RatingWithDefaultValue.story = {
  name: "Rating with default value",
};

export const RatingWithLargeCount = () => (
  <Rating name="rating" defaultValue={3} count={37} />
);

RatingWithLargeCount.story = {
  name: "Rating with large count",
};

export const RatingWithControlledValue = () => (
  <Rating name="rating" value={3} />
);

RatingWithControlledValue.story = {
  name: "Rating with controlled value",
};
