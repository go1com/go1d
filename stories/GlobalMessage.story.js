import React from "react";
import { GlobalMessage, Text, Link } from "../src";

export default {
  title: "Athletic/GlobalMessage",
  component: GlobalMessage,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=2546%3A30',
        label: 'See GlobalMessage designs in Figma',
      },
    ],
  }
};

const richContentExample = (
  <Text>
    This is a global message{" "}
    <Text color="accent">
      <Link
        css={{
          display: "inline",
          textDecoration: "underline",
        }}
        href="https://foo.com"
      >
        read more
      </Link>
    </Text>
    .
  </Text>
);

export const Basic = ({ storyExampleText, ...args }) => (
  <GlobalMessage color="default" {...args} close={() => alert("close event")}>
    {storyExampleText}
  </GlobalMessage>
);
Basic.storyName = "Base";
Basic.argTypes = {
  status: {
    defaultValue: "success",
    name: "status",
    control: {
      type: "radio"
    },
    options: ["success", "warning", "danger", "note"],
  },
  storyExampleText: {
    defaultValue: richContentExample,
    name: "example message in story",
    control: { type: "text" }
  }
};

export const WarningExample = () => (
  <GlobalMessage color="default" status="warning" close={() => alert("close event")}>
    <Text>
      We no longer support Internet Explorer. For the best experience, please use a modern internet browser, such as Google Chrome.
    </Text>
  </GlobalMessage>
);
WarningExample.parameters = { controls: { hideNoControlsWarning: true } };

export const LongText = () => (
  <GlobalMessage color="default" status="success" close={() => alert("close event")}>
    <Text>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been Lorem Ipsum is simply dummy text {" "}
      <Text color="accent">
        <Link
          css={{
            display: "inline",
            textDecoration: "underline",
          }}
          href="https://foo.com"
        >
          read more
        </Link>
      </Text>
      .
    </Text>
  </GlobalMessage>
);
LongText.storyName = "Long Text";
