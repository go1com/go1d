import React from "react";
import { Text } from "../src/";

const defaultElementValue = 'p';
const sharedExampleText = "“Upskill your workforce today to overcome the challenges of tomorrow. Go1 helps millions of people in thousands of organizations engage in learning that is relevant, effective and inspiring.”";

export default {
  title: "Athletic/Text",
  component: Text,
  parameters: {
    docs: {
      description: {
        component: 'While this component will let you do anything you need with text, for headings you probably want the convenience of using the Heading component instead.'
      }
    },
    controls: { hideNoControlsWarning: true },
  },
};

export const UnstyledText = ({ exampleText, ...args }) => (
  <React.Fragment>
    <Text
      element={defaultElementValue}
      {...args}
    >
      {exampleText}
    </Text>
  </React.Fragment>
);
UnstyledText.args = {
  exampleText: "Unstyled text. You can change all the arguments. " + sharedExampleText
};
UnstyledText.argTypes = {
  element: {
    name: 'element',
    type: { name: 'string', required: false },
    defaultValue: 'p',
    description: 'semantic HTML element',
    table: {
      type: { summary: 'string' },
      defaultValue: { summary: 'span' },
    },
    control: {
      type: 'text'
    }
  }
};

export const ParagraphLarge = () => (
  <React.Fragment>
    <Text
      element="p"
      color="default"
      fontSize={3}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
    >
      Paragraph large. {sharedExampleText}
    </Text>
  </React.Fragment>
);

export const ParagraphMedium = () => (
  <React.Fragment>
    <Text
      color="default"
      element="p"
      fontSize={2}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
    >
      Paragraph Medium. {sharedExampleText}
    </Text>
  </React.Fragment>
);

export const ParagraphSmall = () => (
  <React.Fragment>
    <Text
      color="default"
      element="p"
      fontSize={1}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
    >
      Paragraph Small. {sharedExampleText}
    </Text>
  </React.Fragment>
);

export const UILarge = () => (
  <React.Fragment>
    <Text
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

export const UIMedium = () => (
  <React.Fragment>
    <Text
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

export const UISmall = () => (
  <React.Fragment>
    <Text
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

