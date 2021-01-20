import React from "react";
import { Provider, PageBody, View, Text, Link } from "../src";

export default {
  title: "Original Go1d/Provider",
};

export const DefaultPropsWithLightMode = () => (
  <Provider>
    <PageBody>
      <View marginBottom={5}>
        <Text element="h2" fontSize={4} fontWeight="semibold">
          Reports
        </Text>
      </View>
      <View backgroundColor="background" padding={5} borderRadius={2}>
        Market place dashboard
        <Link href="/components/provider">Link to open reports</Link>
      </View>
    </PageBody>
  </Provider>
);

DefaultPropsWithLightMode.story = {
  name: "Default props with light mode",
};

export const CustomLinkAndDarkModeSpecified = () => (
  <Provider mode="dark" linkComponent={() => <div>custom link</div>}>
    <PageBody>
      <View marginBottom={5}>
        <Text element="h2" fontSize={4} fontWeight="semibold">
          Reports
        </Text>
      </View>
      <View backgroundColor="background" padding={5} borderRadius={2}>
        Market place dashboard
        <Link href="/components/provider">Open reports</Link>
      </View>
    </PageBody>
  </Provider>
);

CustomLinkAndDarkModeSpecified.story = {
  name: "Custom link and dark mode specified",
};
