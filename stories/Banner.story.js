import React from "react";
import { Banner, Text, Link } from "../src";

export default {
  title: "Original Go1d/Banner",
  component: Banner,
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

TypeSuccess.story = {
  name: "Type success",
};

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

TypeWarning.story = {
  name: "Type warning",
};

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

TypeDanger.story = {
  name: "Type danger",
};
