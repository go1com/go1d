import React from "react";
import { Link, Text, Provider } from "../src";

export default {
  title: "Original Go1d/Link",
  component: Link,
};

export const DefaultLink = () => <Link href="#testing">Link text</Link>;

DefaultLink.storyName = "Default link";

export const LinkWithTextInside = () => (
  <Link href="#testing">
    <Text>Hello world</Text>
  </Link>
);

LinkWithTextInside.storyName = "Link with Text inside";

export const LinkWithTextWithDifferentPseudoElementFocusColorActiveColor = () => (
  <Link href="#testing" hoverFocusColor="success" activeColor="warning">
    <Text>Hello world</Text>
  </Link>
);

LinkWithTextWithDifferentPseudoElementFocusColorActiveColor.storyName = "Link with Text with different pseudo element focus color & active color";

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

OverridenLink.storyName = "Overriden link";
