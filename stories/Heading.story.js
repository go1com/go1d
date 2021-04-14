import React from "react";
import { Heading } from "../src/";
import { Text } from "../src/";

export default {
  title: "Athletic/Heading",
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: 'Avoid skipping heading levels: always start from `h1`, followed by `h2` and so on. In nearly all cases, the semantic and visual heading level should match. For example, you would use `semanticElement="h1"` and `visualHeadingLevel="Heading 1"` together. There are rare exceptions, such as embedding content in a different context, where you may wish to give a heading a different visual style but maintain its semantic ordering.'
      }
    },
  }
};

export const Main = args => (
  <React.Fragment>
    <Heading
      semanticElement="h1"
      visualHeadingLevel="Heading 1"
      color="default"
      {...args}
    >
      This is a heading
    </Heading>
  </React.Fragment>
);

export const Heading1 = () => (
  <React.Fragment>
    <Heading
      semanticElement="h1"
      visualHeadingLevel="Heading 1"
      color="default"
    >
      Heading 1
    </Heading>
  </React.Fragment>
);
Heading1.parameters = { controls: { hideNoControlsWarning: true } };

export const Heading2 = () => (
  <React.Fragment>
    <Heading
      semanticElement="h2"
      visualHeadingLevel="Heading 2"
      color="default"
    >
      Heading 2
    </Heading>
  </React.Fragment>
);
Heading2.parameters = { controls: { hideNoControlsWarning: true } };

export const Heading3 = () => (
  <React.Fragment>
    <Heading
      semanticElement="h3"
      visualHeadingLevel="Heading 3"
      color="default"
    >
      Heading 3
    </Heading>
  </React.Fragment>
);
Heading3.parameters = { controls: { hideNoControlsWarning: true } };

export const Heading4 = () => (
  <React.Fragment>
    <Heading
      semanticElement="h4"
      visualHeadingLevel="Heading 4"
      color="default"
    >
      Heading 4
    </Heading>
  </React.Fragment>
);
Heading4.parameters = { controls: { hideNoControlsWarning: true } };

export const Heading5 = () => (
  <React.Fragment>
    <Heading
      semanticElement="h5"
      visualHeadingLevel="Heading 5"
      color="default"
    >
      Heading 5
    </Heading>
  </React.Fragment>
);
Heading5.parameters = { controls: { hideNoControlsWarning: true } };

export const Heading6 = () => (
  <React.Fragment>
    <Heading
      semanticElement="h6"
      visualHeadingLevel="Heading 6"
      color="default"
    >
      Heading 6
    </Heading>
  </React.Fragment>
);
Heading6.parameters = { controls: { hideNoControlsWarning: true } };

export const UnmatchedSemanticAndVisualLevels = () => (
  <React.Fragment>
    <Heading
      semanticElement="h1"
      visualHeadingLevel="Heading 6"
      color="default"
    >
      The semantic element level doesn't need to match the visual heading level.
    </Heading>
  </React.Fragment>
);
UnmatchedSemanticAndVisualLevels.parameters = { controls: { hideNoControlsWarning: true } };

