import React from "react";
import { View, Text, Link } from "../src/";

export default {
  title: "Athletic/Foundations/Data Visualization",
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=6631%3A50783',
        label: 'See Data Visualization designs in Figma',
      },
    ],
  }
};

export const Main = (args) => {
  return (
    <View color="contrast" background="background">
      <Text element="p" marginBottom={3}>See <Link color="accent" href="https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=6631%3A50783">Figma file</Link> for guidelines.</Text>
      <Text element="p" marginBottom={3}>We use <Link color="accent" href="https://uber.github.io/react-vis/">Uber's react-vis library</Link> for our data visualizations.</Text>
      <Text element="p" marginBottom={3}>Note: we can create stories for chart parts here.</Text>
    </View>
  );
};

