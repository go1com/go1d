import React from "react";
import { View, Text, Link } from "../src/";
import { UL, LI } from "../src";

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

export const Main = () => {
  return (
    <View color="contrast" background="background">
      <Text element="p" marginBottom={3}>See <Link color="accent" href="https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=6631%3A50783">Figma file</Link> for guidelines.</Text>
      <Text element="p" marginBottom={3}>We use <Link color="accent" href="https://formidable.com/open-source/victory/">Formidable's Victory library</Link> for our data visualizations.</Text>
      <Text element="p" marginBottom={3}>Note: we can create stories for chart parts here.</Text>
      <UL>
        <LI><Link color="accent" href="https://go1d.go1.com/storybook/?path=/docs/linechart--main">Line Chart</Link></LI>
      </UL>
    </View>
  );
};

