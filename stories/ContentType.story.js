import React from "react";
import { View, ContentType } from "../src";

export default {
  title: "Original Go1d/ContentType",
  component: ContentType,
  subcomponents: { View },
};

export const _ContentType = () => (
  <View flexDirection="row">
    <ContentType type="Course" />
  </View>
);

_ContentType.storyName = "ContentType";

export const ContentTypeWithText = () => (
  <View flexDirection="row">
    <ContentType type="Course" text="Course" />
  </View>
);

ContentTypeWithText.storyName = "ContentType with text";

export const ContentTypeWithBackground = () => (
  <View flexDirection="row">
    <ContentType type="Event" text="Event" background="default" width={70} />
  </View>
);

ContentTypeWithBackground.storyName = "ContentType with background";
