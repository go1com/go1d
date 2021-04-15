import React from "react";
import { Lesson } from "../src";

export default {
  title: "Original Go1d/Lesson",
  component: Lesson,
};

export const BasicLesson = args => (
  <Lesson {...args} />
);
BasicLesson.argTypes = {
  title: { defaultValue: "Design Thinking" },
  type: { defaultValue: "video" },
  duration: { defaultValue: 80 },
}
