import React from "react";
import { CourseModule, Lesson } from "../src";

export default {
  title: "Original Go1d/CourseModule",
  component: CourseModule,
  subcomponents: { Lesson },
};

export const Base = () => (
  <CourseModule title="Test Title">
    <Lesson title="This is a test lesson" type="resource" />
  </CourseModule>
);

export const DurationIsOptional = () => (
  <CourseModule duration={75} title="Test Title">
    <Lesson title="This is a test lesson" type="resource" />
  </CourseModule>
);

DurationIsOptional.story = {
  name: "Duration is optional",
};

export const DefaultClosed = () => (
  <CourseModule defaultOpen={false} title="Test Title">
    <Lesson title="This is a test lesson" type="resource" />
    <Lesson title="This is a test lesson" type="resource" />
    <Lesson title="This is a test lesson" type="resource" />
  </CourseModule>
);

export const NoToggle = () => (
  <CourseModule collapsible={false} title="Test Title">
    <Lesson title="This is a test lesson" type="resource" />
    <Lesson title="This is a test lesson" type="resource" />
    <Lesson title="This is a test lesson" type="resource" />
  </CourseModule>
);
