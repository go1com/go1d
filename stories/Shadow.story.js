import React from "react";
import { View, Text } from "../src/";
import { options, isDark } from "../src/foundations/";
import { generateTheme } from "../src/foundations";

export default {
  title: "Athletic/Foundations/Shadows",
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/8WVqZs5ZzY8wzf7gmRRaAS/Foundations?node-id=3034%3A5',
        label: 'See Shadow designs in Figma',
      },
    ],
  }
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
      <Text element="p" marginBottom={3}>Shadows distinguish layers to give users perspective. Use shadows to extend metaphors about the environment so users understand where they are and what actions they can take. We use shadows for overlay elements like modals, tooltips, and date picker visual calendars.</Text>
      <Text element="p" marginBottom={3}>To reduce variation in our shadows, we will replace “crisp” shadows with “soft” and “distant” with “strong”.</Text>
      {themeSwatches(theme, ["soft", "strong", "none"])}
    </View>
  );
};

