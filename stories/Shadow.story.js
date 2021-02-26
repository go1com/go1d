import React from "react";
import { View, Text } from "../src/";
import { options, isDark } from "../src/foundations/";
import { generateTheme } from "../src/foundations";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

export default {
  title: "Athletic/Foundations/Shadows",
};

const shadowSwatch = (themeShadowName, cssShadow) => (
  <View
    alignItems="center"
    backgroundColor="background"
    borderRadius={3}
    boxShadow={themeShadowName}
    display="flex"
    justifyContent="center"
    key={themeShadowName}
    overflow="hidden"
    css={{
      margin: "48px 32px",
      width: "140px",
      maxWidth: "100%",
      height: 150,
      width: 150,
    }}
  >
    <View
      padding={3}
    >
      <View>
        <Text color={"contrast"} fontSize={1} fontWeight="semibold" fontFamily="mono">{themeShadowName}</Text>
      </View>
    </View>
  </View>
);

const themeSwatches = (theme) => {
  const themeSubset = Object.entries(theme.shadows);
  let swatches = [];
  for (const [themeShadowName, cssShadow] of themeSubset) {
    swatches.push(shadowSwatch(themeShadowName, cssShadow));
  };

  return (
  <View
    display="flex"
    flexWrap="wrap"
    flexDirection="row"
    justifyContent="center"
    marginBottom={6}
  >
    {swatches}
  </View>
  );
}

export const Main = (args, { globals: { accent }}) => {
  const theme = generateTheme({accent: accent});

  return (
    <View color="contrast" background="background">
      <Text element="p" marginBottom={1}>Shadows distinguish layers to give users perspective. Use shadows to extend metaphors about the environment so users understand where they are and what actions they can take.</Text>
      {themeSwatches(theme)}
    </View>
  );
};

