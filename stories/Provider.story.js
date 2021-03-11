import React from "react";
import { Provider, PageBody, View, Text, Link } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Provider);

export default {
  title: "Athletic/Provider",
  argTypes: argTypes,
  component: Provider,
};

export const DefaultPropsWithLightMode = () => (
  <Provider>
    <PageBody>
      <View marginBottom={5}>
        <Text element="h2" fontSize={5} fontWeight="semibold" fontFamily="serif" lineHeight="display">
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

DefaultPropsWithLightMode.storyName = "Default props with light mode";

export const CustomLinkAndDarkModeSpecified = args => (
  <Provider mode="dark" linkComponent={() => <div>custom link</div>}>
    <PageBody>
      <View marginBottom={5}>
        <Text element="h2" fontSize={5} fontWeight="semibold" fontFamily="serif" lineHeight="display">
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

CustomLinkAndDarkModeSpecified.storyName = "Custom link and dark mode specified";
