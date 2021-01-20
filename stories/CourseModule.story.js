import React from "react";
import { CourseModule, Lesson } from "../src";

export default {
  title: "Original Go1d/CourseModule",
  component: CourseModule,
  subcomponents: { Lesson },
};

export const Base = args => (
  <CourseModule {...args} title="Test Title">
    <Lesson title="This is a test lesson" type="resource" />
  </CourseModule>
);

export const DurationIsOptional = args => (
  <CourseModule {...args} duration={75} title="Test Title">
    <Lesson title="This is a test lesson" type="resource" />
  </CourseModule>
);

DurationIsOptional.storyName = "Duration is optional";

export const DefaultClosed = args => (
  <CourseModule {...args} defaultOpen={false} title="Test Title">
    <Lesson title="This is a test lesson" type="resource" />
    <Lesson title="This is a test lesson" type="resource" />
    <Lesson title="This is a test lesson" type="resource" />
  </CourseModule>
);

export const NoToggle = args => (
  <CourseModule {...args} collapsible={false} title="Test Title">
    <Lesson title="This is a test lesson" type="resource" />
    <Lesson title="This is a test lesson" type="resource" />
    <Lesson title="This is a test lesson" type="resource" />
  </CourseModule>
);
