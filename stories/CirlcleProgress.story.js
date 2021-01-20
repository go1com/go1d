import React from "react";
import { CircleProgress } from "../src";

export default {
  title: "Original Go1d/CircleProgress",
  component: CircleProgress,
};

export const WithPercentage = () => (
  <CircleProgress progress={50} size={100} lineWidth={50} showProgress={true} />
);

WithPercentage.story = {
  name: "with percentage",
};

export const WithNoPercentage = () => (
  <CircleProgress progress={75} size={20} lineWidth={50} showProgress={false} />
);

WithNoPercentage.story = {
  name: "with no percentage",
};
