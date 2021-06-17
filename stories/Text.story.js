import React from "react";
import { Text } from "../src/";

const defaultElementValue = 'p';
const sharedExampleText = "“Upskill your workforce today to overcome the challenges of tomorrow. Go1 helps millions of people in thousands of organizations engage in learning that is relevant, effective and inspiring.”";

export default {
  title: "Athletic/Text",
  component: Text,
  id: 'Text', // id permalink becomes ?path=/story/text--unstyled-text
  parameters: {
    docs: {
      description: {
        component: 'All text in our apps should be wrapped in a Text component. `Text` uses our responsive type scale under the hood and connects props with all our type foundations. While this component will let you do anything you need with text, for headings you probably want the convenience of using the `Heading` component instead.'
      }
    },
    controls: { hideNoControlsWarning: true },
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/8WVqZs5ZzY8wzf7gmRRaAS/Foundations?node-id=5525%3A9517',
        label: 'See Typography designs in Figma',
      },
    ],
  }
};

// If you change this story's key name (const UnstyledText), update link to it in Typography story
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

export const ParagraphWithEllipsis = () => (
  <React.Fragment>
    <Text
      color="default"
      element="p"
      fontSize={2}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
      ellipsis={true}
    >
      Paragraph Medium with Ellipsis. {sharedExampleText}
    </Text>
  </React.Fragment>
);
ParagraphWithEllipsis.parameters = {
  docs: {
    description: {
      story: 'You need to show the full text *somewhere*.',
    },
  },
};


export const ParagraphWithLineClamp = () => (
  <React.Fragment>
    <Text
      color="default"
      element="p"
      fontSize={2}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
      lineClamp={2}
    >
      Paragraph Medium with LineClamp. {sharedExampleText} {sharedExampleText}
    </Text>
  </React.Fragment>
);
ParagraphWithLineClamp.parameters = {
  docs: {
    description: {
      story: 'You need to show the full text *somewhere*. If you need a show more/less button, consider using the `Prose` component with expandable prop.',
    },
  },
};

