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
    border={1}
    borderColor="delicate"
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
      <Text color={"contrast"} fontSize={1} fontWeight="semibold" fontFamily="mono">{themeShadowName}</Text>
    </View>
  </View>
);

const themeSwatches = (theme, group) => {
  const themeSubset = Object.entries(theme.shadows)
    .filter(([themeShadowName, cssShadow]) => group.includes(themeShadowName));
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
      <Text element="p" marginBottom={1}>Shadows distinguish layers to give users perspective. Use shadows to extend metaphors about the environment so users understand where they are and what actions they can take. We use shadows for overlay elements like modals, tooltips, and date picker visual calendars.</Text>
      {themeSwatches(theme, ["soft", "strong", "none"])}
    </View>
  );
};

