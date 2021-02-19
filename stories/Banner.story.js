import React from "react";
import { Banner, Text, Link } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Banner);

export default {
  title: "Athletic/Banner",
  argTypes: argTypes,
  component: Banner,
};

export const TypeSuccess = args => (
  <Banner {...args} type="success" close={() => alert("close event")}>
    <Text fontWeight="semibold">Success! </Text>
    <Text>
      This is a message{" "}
      <Link
        css={{
          display: "inline",
          fontWeight: "600",
          textDecoration: "underline",
        }}
        href="https://foo.com"
      >
        read more
      </Link>
      .
    </Text>
  </Banner>
);

TypeSuccess.storyName = "Type success";

export const TypeWarning = args => (
  <Banner {...args} type="warning" close={() => alert("close event")}>
    <Text fontWeight="semibold">Warning! </Text>
    <Text>
      This is a message{" "}
      <Link
        css={{
          display: "inline",
          fontWeight: "600",
          textDecoration: "underline",
        }}
        href="https://foo.com"
      >
        read more
      </Link>
      .
    </Text>
  </Banner>
);

TypeWarning.storyName = "Type warning";

export const TypeDanger = args => (
  <Banner type="danger" close={() => alert("close event")}>
    <Text fontWeight="semibold">Danger! </Text>
    <Text>
      This is a message{" "}
      <Link
        css={{
          display: "inline",
          fontWeight: "600",
          textDecoration: "underline",
        }}
        href="https://foo.com"
      >
        read more
      </Link>
      .
    </Text>
  </Banner>
);

TypeDanger.storyName = "Type danger";
