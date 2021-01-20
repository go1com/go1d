import React from "react";
import { Container, View, Text } from "../src";

export default {
  title: "Original Go1d/Container",
  component: Container,
  subcomponents: { View, Text },
};

export const LightmodePageBody = () => (
  <Container backgroundColor="soft" contain="full" paddingX={8} paddingY={6}>
    <View marginBottom={5}>
      <Text element="h2" fontSize={4} fontWeight="semibold">
        Reports
      </Text>
    </View>
    <View backgroundColor="background" padding={5} borderRadius={2}>
      Market place dashboard
    </View>
  </Container>
);

LightmodePageBody.story = {
  name: "Lightmode page body",
};
