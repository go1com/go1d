import React from "react";
import { CircleProgress } from "../src";

export default {
  title: "Original Go1d/CircleProgress",
  component: CircleProgress,
};

export const WithPercentage = args => (
  <CircleProgress {...args} progress={50} size={100} lineWidth={50} showProgress={true} />
);

WithPercentage.storyName = "with percentage";

export const WithNoPercentage = args => (
  <CircleProgress {...args} progress={75} size={20} lineWidth={50} showProgress={false} />
);

WithNoPercentage.storyName = "with no percentage";
