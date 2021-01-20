import React from "react";
import { TextArea } from "../src";

export default {
  title: "Original Go1d/TextArea",
  component: TextArea,
};

export const Label = args => <TextArea {...args} id="Testing" />;
