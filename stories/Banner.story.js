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
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3142%3A0',
        label: 'See Banner designs in Figma',
      },
    ],
  }
};

export const TypeSuccess = () => (
  <Banner status="success" close={() => alert("close event")}>
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
  <Banner status="warning" close={() => alert("close event")}>
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
  <Banner status="danger" close={() => alert("close event")}>
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
  <Banner status="note" close={() => alert("close event")}>
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
