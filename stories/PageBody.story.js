import React from "react";
import { PageBody, View, Text } from "../src";

export default {
  title: "Original Go1d/PageBody",
  component: PageBody,
};

export const LightmodePageBody = args => (
  <PageBody {...args}>
    <View marginBottom={5}>
      <Text element="h2" fontSize={4} fontWeight="semibold">
        Reports
      </Text>
    </View>
    <View backgroundColor="background" padding={5} borderRadius={2}>
      Market place dashboard
    </View>
  </PageBody>
);

LightmodePageBody.storyName = "Lightmode page body";
