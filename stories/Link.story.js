import React from "react";
import { Link, Text, Provider } from "../src";

export default {
  title: "Athletic/Link",
  component: Link,
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

export const DefaultLink = args => <Link href="#testing">Link text</Link>;

DefaultLink.storyName = "Default link";

export const LinkWithTextInside = args => (
  <Link href="#testing">
    <Text>Hello world</Text>
  </Link>
);

LinkWithTextInside.storyName = "Link with Text inside";

export const LinkWithTextWithDifferentPseudoElementFocusColorActiveColor = args => (
  <Link href="#testing" hoverFocusColor="success" activeColor="warning">
    <Text>Hello world</Text>
  </Link>
);

LinkWithTextWithDifferentPseudoElementFocusColorActiveColor.storyName = "Link with Text with different pseudo element focus color & active color";

export const OverridenLink = args => (
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
