import React from "react";
import { TagSelector } from "../src";

export default {
  title: "Original Go1d/TagSelector",
  component: TagSelector,
};

export const BasicTagSelector = args => <TagSelector {...args} options={["Tag 1"]} />;
