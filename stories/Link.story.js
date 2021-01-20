import React from "react";
import { Link, Text, Provider } from "../src";

export default {
  title: "Original Go1d/Link",
  component: Link,
};

export const DefaultLink = () => <Link href="#testing">Link text</Link>;

DefaultLink.story = {
  name: "Default link",
};

export const LinkWithTextInside = () => (
  <Link href="#testing">
    <Text>Hello world</Text>
  </Link>
);

LinkWithTextInside.story = {
  name: "Link with Text inside",
};

export const LinkWithTextWithDifferentPseudoElementFocusColorActiveColor = () => (
  <Link href="#testing" hoverFocusColor="success" activeColor="warning">
    <Text>Hello world</Text>
  </Link>
);

LinkWithTextWithDifferentPseudoElementFocusColorActiveColor.story = {
  name:
    "Link with Text with different pseudo element focus color & active color",
};

export const OverridenLink = () => (
  <Provider
    linkComponent={({ href, children }) => (
      <a href={href + "-custom"}>
        {children} + {href}
      </a>
    )}
  >
    <Link href="#testing">Link text</Link>
  </Provider>
);

OverridenLink.story = {
  name: "Overriden link",
};
