import React from "react";
import { View, Text } from "../src/";
import { options, isDark } from "../src/foundations/";
import { generateTheme } from "../src/foundations";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

export default {
  title: "Athletic/Foundations/Colors",
  component: View,
  parameters: {
    docs: {
      description: {
        component: 'This shows all the colors produced from the applied theme using the Athletic theme generator, which results in Athletic status colors.'
      }
    },
  },
  argTypes: {
    table: { disable: true }
  }
};

const colorSwatch = (themeColorName, cssColor, mode) => (
  <View
    backgroundColor="background"
    borderRadius={3}
    boxShadow="crisp"
    key={themeColorName}
    mode="light"
    overflow="hidden"
    css={{
      margin: "12px 6px",
      maxWidth: "140px",
    }}
  >
    <View
      css={{
        backgroundColor: cssColor,
        height: 150,
        maxWidth: "100%",
        width: 150,
      }}>
    </View>
    <View
      padding={3}
    >
      <View>
        <Text color={"accent"} fontSize={1} fontWeight="semibold" fontFamily="mono">{themeColorName} </Text>
        <Text color={"accent"} fontSize={1} fontFamily="mono">{cssColor}</Text>
      </View>
    </View>
  </View>
);

const themeSwatches = (accent, mode) => {
  const theme = generateTheme({accent: accent, mode: mode});

  let swatches = [];
  for (const [themeColorName, cssColor] of Object.entries(theme.colors).filter(([key, value]) => (typeof value === 'string' && key !== "gradients"))) {
    swatches.push(colorSwatch(themeColorName, cssColor, mode));
  };

  return swatches;
}


export const Main = (args, { globals: { accent, mode }}) => (
  <React.Fragment>
    <View
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
    >
      {themeSwatches(accent, mode)}
    </View>
  </React.Fragment>
);

