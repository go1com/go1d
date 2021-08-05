import React from "react";
import { View, Text } from "../src/";
import { options, isDark } from "../src/foundations/";
import { generateTheme } from "../src/foundations";

export default {
  title: "Athletic/Foundations/Colors",
  id: 'color', // id permalink becomes ?path=/story/color--main
  parameters: {
    docs: {
      description: {
        component: 'This shows all the colors produced from the applied theme using the Athletic theme generator, which results in Athletic status colors.'
      }
    },
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/8WVqZs5ZzY8wzf7gmRRaAS/Foundations?node-id=5525%3A6896',
        label: 'See Color designs in Figma',
      },
    ],
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
        <Text color={"contrast"} fontSize={1} fontWeight="semibold" fontFamily="mono">{themeColorName} </Text>
        <Text color={"contrast"} fontSize={1} fontFamily="mono">{cssColor}</Text>
      </View>
    </View>
  </View>
);

const themeSwatches = (theme, mode, group) => {
  let themeSubset = Object.entries(theme.colors)
    .filter(([themeColorNameInGroup, cssColor]) => (
      typeof cssColor === 'string'
      && themeColorNameInGroup !== "gradients"
      && group.includes(themeColorNameInGroup)
      ));
  themeSubset.sort((a, b) => (group.indexOf(a[0]) - group.indexOf(b[0])));

  let swatches = [];
  for (const [themeColorName, cssColor] of themeSubset) {
    swatches.push(colorSwatch(themeColorName, cssColor, mode));
  };

  return (
  <View
    display="flex"
    flexWrap="wrap"
    flexDirection="row"
    marginBottom={6}
  >
    {swatches}
  </View>
  );
}

export const Main = (args, { globals: { accent, mode }}) => {
  const theme = generateTheme({accent: accent, mode: mode});

  return (
    <View color="contrast" background="background">
      <Text element="h3" fontSize={4} fontWeight="bold">Brand color</Text>
      <Text element="p" marginBottom={1}>An accent color is used extensively throughout Go1 to guide the user by highlighting the most important functionality. The accent color is a customer's primary brand color and is used to tint other colors in the platform.</Text>
      <Text element="p">Go1 also uses a complementary color. For our customers, this is always white.</Text>
      {themeSwatches(theme, mode, ["accent", "complementary"])}

      <Text element="h3" fontSize={4} fontWeight="bold">Accent greys</Text>
      <Text element="p" marginBottom={1}>These are neutral tints and shades, typically used for background colors and borders. Every grey contains a percentage of the accent color.</Text>
      {themeSwatches(theme, mode, ["contrast", "default", "subtle", "thin", "muted", "faded", "delicate", "soft", "faint", "background"])}

      <Text element="h3" fontSize={4} fontWeight="bold">Status colors</Text>
      <Text element="p" marginBottom={1}>Colors used to alert users to certain aspects of the UI.</Text>
      {themeSwatches(theme, mode, [
        "success", "successHighest", "successHigh", "successMid", "successLow", "successLowest",
        "note", "noteHighest", "noteHigh", "noteMid", "noteLow", "noteLowest",
        "warning", "warningHighest", "warningHigh", "warningMid", "warningLow", "warningLowest",
        "danger", "dangerHighest", "dangerHigh", "dangerMid", "dangerLow", "dangerLowest",
        "vivid", "vividHighest", "vividHigh", "vividMid", "vividLow", "vividLowest",
        "highlight",
      ])}
      <Text element="h3" fontSize={4} fontWeight="bold">Data visualization colors</Text>
      <Text element="p" marginBottom={4}>We have 5 categorical colors, 1 zero data color, and a reference color. Each has a shade available too for “active” or “selected” states and similar.</Text>
      <Text element="p" marginBottom={4} fontWeight="bold">Only use categorical colors on white backgrounds.</Text>
      <Text element="p" fontSize={1} marginBottom={1}>Use categorical colors for qualitative data, such as “assigned” or “self-directed” enrollments. Aim for only 1–4 colors. If you need 5 or more categories, there’s probably a better way to design the chart with fewer categories that will be clearer to interpret effectively. The 5th category should only be used in small doses. Try to avoid needing it!</Text>
      {themeSwatches(theme, mode, [
        "vizCategory1", "vizCategory2", "vizCategory3", "vizCategory4", "vizCategory5", "vizZeroData",
        "vizCategory1Shade", "vizCategory2Shade", "vizCategory3Shade", "vizCategory4Shade", "vizCategory5Shade", "vizZeroDataShade",
        "vizReference", "vizReferenceShade",
      ])}
    </View>
  );
};

