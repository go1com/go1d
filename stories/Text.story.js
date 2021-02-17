import React from "react";
import { Text } from "../src/";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Text);

let customArgTypes = {
  element: {
    name: 'element',
    defaultValue: 'p',
    control: { type: 'text' } },
};

argTypes = Object.assign(argTypes, customArgTypes);

export default {
  title: "Athletic/Text",
  argTypes: argTypes,
  component: Text,
};

export const Heading1Serif = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="h1"
      fontSize={7}
      fontWeight="semibold"
      fontFamily="serif"
      lineHeight="display"
    >
      Heading 1
    </Text>
  </React.Fragment>
);

export const Heading2Serif = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="h2"
      fontSize={5}
      fontWeight="semibold"
      fontFamily="serif"
      lineHeight="display"
    >
      Heading 2
    </Text>
  </React.Fragment>
);

export const Heading3SansSerif = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="h3"
      fontSize={4}
      fontWeight="bold"
      fontFamily="sansSerif"
      lineHeight="display"
    >
      Heading 3
    </Text>
  </React.Fragment>
);

export const Heading4SansSerif = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="h4"
      fontSize={3}
      fontWeight="medium"
      fontFamily="sansSerif"
      lineHeight="display"
    >
      Heading 4
    </Text>
  </React.Fragment>
);

export const Heading5SansSerif = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="h5"
      fontSize={2}
      fontWeight="medium"
      fontFamily="sansSerif"
      lineHeight="display"
    >
      Heading 5
    </Text>
  </React.Fragment>
);

export const Heading6SansSerif = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="h5"
      fontSize={1}
      fontWeight="medium"
      fontFamily="sansSerif"
      lineHeight="display"
    >
      Heading 6
    </Text>
  </React.Fragment>
);

export const ParagraphLarge = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="p"
      fontSize={3}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
    >
      Paragraph Large
    </Text>
  </React.Fragment>
);

export const ParagraphMedium = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="p"
      fontSize={2}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
    >
      Paragraph Medium
    </Text>
  </React.Fragment>
);

export const ParagraphSmall = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="p"
      fontSize={1}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
    >
      Paragraph Small
    </Text>
  </React.Fragment>
);

export const UILarge = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="span"
      fontSize={3}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="ui"
    >
      UI Large
    </Text>
  </React.Fragment>
);

export const UIMedium = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="span"
      fontSize={2}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="ui"
    >
      UI Medium
    </Text>
  </React.Fragment>
);

export const UISmall = args => (
  <React.Fragment>
    <Text
      {...args}
      color="default"
      element="span"
      fontSize={1}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="ui"
    >
      UI Small
    </Text>
  </React.Fragment>
);

export const UnstyledText = args => (
  <React.Fragment>
    <Text
      {...args}
    >
      Unstyled text. You can change all the arguments.
    </Text>
  </React.Fragment>
);

