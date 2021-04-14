import React from "react";
import { View, ContentType } from "../src";

export default {
  title: "Original Go1d/ContentType",
  component: ContentType,
  subcomponents: { View },
};

export const ContentTypeStory = args => (
  <View flexDirection="row">
    <ContentType {...args} />
  </View>
);
ContentTypeStory.storyName = "ContentType";
ContentTypeStory.argTypes = {
  type: {
    defaultValue: 'Course',
    description: 'Course or Event',
  }
};

export const ContentTypeWithText = args => (
  <View flexDirection="row">
    <ContentType text="Course" {...args} />
  </View>
);
ContentTypeWithText.storyName = "ContentType with text";
ContentTypeWithText.argTypes = {
  type: { defaultValue: 'Course' },
};

export const ContentTypeWithBackground = () => (
  <View flexDirection="row">
    <ContentType type="Event" text="Event" background="default" width={70} />
  </View>
);
ContentTypeWithBackground.storyName = "ContentType with background";
ContentTypeWithBackground.parameters = { controls: { hideNoControlsWarning: true } };

