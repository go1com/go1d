import React from "react";
import { LineProgress } from "../src";

export default {
  title: "Original Go1d/Line Progress Bar",
};

export const WithPercent = () => (
  <div style={{ width: "50%" }}>
    <LineProgress percent={50} />
  </div>
);

WithPercent.story = {
  name: "with percent",
};
