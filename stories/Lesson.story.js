import React from "react";
import { Lesson } from "../src";

export default {
  title: "Original Go1d/Lesson",
  component: Lesson,
};

export const BasicLesson = args => (
  <Lesson {...args} title="Design Thinking" type="video" duration={80} />
);
