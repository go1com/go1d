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
    key={themeColorName}
    padding={2}
    css={{
      height: 100,
      minWidth: 150,
      maxWidth: "100%",
      width: 100,
      backgroundColor: cssColor,
    }}>
    <Text color={(isDark(cssColor) && mode === "light") || (!isDark(cssColor) && mode === "dark") ? "background" : "default"}>{themeColorName}: {cssColor}</Text>
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

