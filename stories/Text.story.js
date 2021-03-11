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
  parameters: {
    docs: {
      description: {
        component: 'While this component will let you do anything you need with text, for headings you probably want the convenience of using the Heading component instead.'
      }
    },
  }
};

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
      Paragraph Large. Upskill your workforce today to overcome the challenges of tomorrow. Go1 helps millions of people in thousands of organizations engage in learning that is relevant, effective and inspiring.
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
      Paragraph Medium. Upskill your workforce today to overcome the challenges of tomorrow. Go1 helps millions of people in thousands of organizations engage in learning that is relevant, effective and inspiring.
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
      Paragraph Small. Upskill your workforce today to overcome the challenges of tomorrow. Go1 helps millions of people in thousands of organizations engage in learning that is relevant, effective and inspiring.
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

