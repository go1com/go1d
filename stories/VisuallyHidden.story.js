import React from "react";
import { VisuallyHidden, View, Text } from "../src";

export default {
  title: "Athletic/VisuallyHidden",
  component: VisuallyHidden,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=2691%3A62',
        label: 'See Accessibility and Inclusive Design in Figma',
      },
    ],
  }
};

export const Main = () => (
  <View>
    <Text>This story contains a visually hidden element so that you may provide screen readers with meaningful text. Use a screen reader or inspect the DOM to find it here: <VisuallyHidden>This text is visually hidden.</VisuallyHidden></Text>
  </View>
);
Main.parameters = { controls: { hideNoControlsWarning: true } };

