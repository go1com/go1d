import React from "react";
import { CourseSlat, View, Text } from "../src";
import IconImport from "../src/components/Icons/Import";

export default {
  title: "Original Go1d/CourseSlat",
  component: CourseSlat,
  subcomponents: { View, Text },
};

export const WithAvatar = () => (
  <CourseSlat
    courseImage="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?h=400"
    title="Master sourdough in a week"
    description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
    author="Bob Bobberson"
    authorAvatar="https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?h=40"
    duration="60"
    type="Course"
    typeIcon="Course"
  />
);

WithAvatar.story = {
  name: "With avatar",
};

export const WithImportAction = () => (
  <CourseSlat
    courseImage="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=400"
    title="Master sourdough in a week"
    description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
    author="Bob Bobberson"
    duration="4"
    actionRenderer={() => (
      <View flexDirection="row">
        <IconImport marginRight={3} color="accent" />
        <Text color="accent">Import</Text>
      </View>
    )}
    type="Course"
    typeIcon="Course"
  />
);

WithImportAction.story = {
  name: "With Import action",
};

export const WithEnrollmentStatus = () => (
  <CourseSlat
    courseImage="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=400"
    title="Master sourdough in a week"
    description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
    author="Bob Bobberson"
    duration="4"
    actionRenderer={() => (
      <View flexDirection="row">
        <IconImport marginRight={3} color="accent" />
        <Text color="accent">Import</Text>
      </View>
    )}
    type="Course"
    typeIcon="Course"
    enrollment={{
      status: "completed",
    }}
  />
);

WithEnrollmentStatus.story = {
  name: "With enrollment status",
};

export const WithPriceAndDuration = () => (
  <CourseSlat
    courseImage="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?h=400"
    title="Master sourdough in a week"
    description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
    author="Hon. Bob Bobberson Jr."
    duration="75"
    price="12345"
    currency="INR"
    type="Course"
    typeIcon="Course"
  />
);

WithPriceAndDuration.story = {
  name: "With price and duration",
};

export const Skeleton = () => <CourseSlat skeleton={true} />;
