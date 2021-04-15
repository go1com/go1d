import React from "react";
import { CourseSlat, View, Text, ButtonFilled } from "../src";
import IconImport from "../src/components/Icons/Import";

export default {
  title: "Original Go1d/CourseSlat",
  component: CourseSlat,
  subcomponents: { View, Text, ButtonFilled },
  argTypes: {
    skeleton: {
      defaultValue: false,
      control: { type: 'boolean' }
    },
  },
};

export const WithAvatar = args => (
  <CourseSlat
    {...args}
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
WithAvatar.storyName = "With avatar";
WithAvatar.argTypes = {
  courseImage: { control: { disable: true } },
  title: { control: { disable: true } },
  description: { control: { disable: true } },
  author: { control: { disable: true } },
  authorAvatar: { control: { disable: true } },
  duration: { control: { disable: true } },
  type: { control: { disable: true } },
  typeIcon: { control: { disable: true } },
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
WithImportAction.storyName = "With Import action";
WithImportAction.parameters = { controls: { hideNoControlsWarning: true } };

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
WithEnrollmentStatus.storyName = "With enrollment status";
WithEnrollmentStatus.parameters = { controls: { hideNoControlsWarning: true } };

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
WithPriceAndDuration.storyName = "With price and duration";
WithPriceAndDuration.parameters = { controls: { hideNoControlsWarning: true } };

export const WithPopoverOnInteraction = args => (
  <CourseSlat
    {...args}
    courseImage="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?h=400"
    title="Master sourdough in a week"
    description="Despite general improvements in workplace health and safety over the past the risk of sourdough related injuries are still insurmountable for most"
    author="Hon. Bob Bobberson Jr."
    duration="75"
    price="12345"
    currency="INR"
    type="Course"
    typeIcon="Course"
    popoverOnInteraction={(ref, contentProps, closePopover) => (
      <View
        innerRef={ref}
        {...contentProps}
        border={1}
        borderColor="subtle"
        borderRadius={3}
        padding={5}
      >
        I'm a popoverOnInteraction
        <ButtonFilled onClick={closePopover} color="accent" marginTop={4}>Close</ButtonFilled>
      </View>
    )}
  />
);
WithPopoverOnInteraction.storyName = "With popover on interaction";
WithPopoverOnInteraction.argTypes = {
  courseImage: { control: { disable: true } },
  title: { control: { disable: true } },
  description: { control: { disable: true } },
  author: { control: { disable: true } },
  duration: { control: { disable: true } },
  type: { control: { disable: true } },
  typeIcon: { control: { disable: true } },
};

export const Skeleton = args => <CourseSlat {...args} />;
Skeleton.argTypes = {
  skeleton: {
    defaultValue: 'true',
  },
};
