import React from "react";
import { InputSuffix } from "../src";

export default {
  title: "Original Go1d/InputSuffix",
  component: InputSuffix,
};

export const BasicInputSuffix = () => (
  <InputSuffix id="test" suffixValue="test.com" />
);

BasicInputSuffix.storyName = "Basic InputSuffix";
