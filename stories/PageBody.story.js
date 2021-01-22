import React from "react";
import { PageBody, View, Text } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, PageBody);

export default {
  title: "Original Go1d/PageBody",
  argTypes: argTypes,
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
