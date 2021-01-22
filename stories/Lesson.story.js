import React from "react";
import { Lesson } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Lesson);

export default {
  title: "Original Go1d/Lesson",
  argTypes: argTypes,
  component: Lesson,
};

export const BasicLesson = args => (
  <Lesson {...args} title="Design Thinking" type="video" duration={80} />
);
