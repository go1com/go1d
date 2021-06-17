import React from "react";
import { View, Text, Link } from "../src/";

export default {
  title: "Athletic/Foundations/Illustration",
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/MUCfack705PWBduMBfz2mN/Illustrations?node-id=471%3A52',
        label: 'See Illustration designs in Figma',
      },
    ],
  }
};

export const Main = (args) => {
  return (
    <View color="contrast" background="background">
      <Text element="p" marginBottom={3}>See <Link color="accent" href="https://www.figma.com/file/MUCfack705PWBduMBfz2mN/Illustrations?node-id=471%3A52">Figma file</Link> for guidelines.</Text>
      <Text element="p" marginBottom={3}>Note: we can create stories for Illustrations here.</Text>
    </View>
  );
};

