import React from "react";
import { LineProgress } from "../src";

export default {
  title: "Original Go1d/Line Progress Bar",
  component: LineProgress,
};

export const WithPercent = () => (
  <div style={{ width: "50%" }}>
    <LineProgress percent={50} />
  </div>
);

WithPercent.storyName = "with percent";
