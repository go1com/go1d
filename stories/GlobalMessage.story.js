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

export const Basic = args => (
  <GlobalMessage {...args} close={() => alert("close event")}>
    <Text>
      This is a message{" "}
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
};

export const LongText = () => (
  <GlobalMessage status="success" close={() => alert("close event")}>
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
