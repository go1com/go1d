import React from "react";
import { Banner, Text, Link } from "../src";

export default {
  title: "Athletic/Banner",
  component: Banner,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3105%3A14386',
        label: 'We need your help! Please add a page in Figma using the template and update this link.',
      },
    ],
  }
};

export const TypeSuccess = () => (
  <Banner type="success" close={() => alert("close event")}>
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

export const TypeWarning = () => (
  <Banner type="warning" close={() => alert("close event")}>
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

export const TypeDanger = () => (
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

export const TypeNote = () => (
  <Banner type="note" close={() => alert("close event")}>
    <Text fontWeight="semibold">Note! </Text>
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
TypeNote.storyName = "Type note";

export const CustomThemeColor = args => (
  <Banner type="note" customColor="accent" {...args} close={() => alert("close event")}>
    <Text fontWeight="semibold">Custom theme color</Text>
    <Text>
      This example uses the accent color.
    </Text>
  </Banner>
);
CustomThemeColor.storyName = "Custom theme color";
