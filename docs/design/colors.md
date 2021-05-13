---
title: Colors
status: ready
lead: Go1d uses colors purposefully to communicate how things function in the interface. This helps us create visual patterns that can make interacting with our product easier and more predictable for users.
---

Our colors give our brand its distinct and consistent visual tone.

For cohesion across all our touch points, our marketing and product colors all stem from our brand colors.

To interact with colors using different themes and light or dark mode, check out the [Colors story](https://go1d.go1.com/storybook/?path=/docs/athletic-foundations-colors--main).

## Primary brand accent

An accent color is used extensively throughout Go1 to guide the user by highlighting the most important functionality. The accent color is a customer's primary brand color and is used to tint other colors in the platform.

```!jsx
<Colors colors={["accent"]} />
```

Go1 also uses a complementary color. For our customers, this is always white.

## Light mode accent greys

These are neutral tints and shades, typically used for background colors and borders. Every grey contains a percentage of the accent color.

```!jsx
<Colors colors={["contrast", "default", "subtle", "thin", "muted", "faded", "delicate", "soft", "faint", "background"]} />
```

## Dark mode accent greys

These are the complementary colors to our accent blue. Every grey contains a percentage of our accent color. Light mode is to be used on all light surfaces and will be the more frequently used palette.

```!jsx
<Colors
  mode='dark'
  paddingTop={6}
  borderRadius={2}
  backgroundColor="background"
  colors={["contrast", "default", "subtle", "thin", "muted", "faded", "delicate", "soft", "faint", "background"]}
/>
```

## Status colors

Colors used to alert users to certain aspects of the UI.

```!jsx
<Colors colors={[
  "success", "successHighest", "successHigh", "successMid", "successLow", "successLowest",
  "note", "noteHighest", "noteHigh", "noteMid", "noteLow", "noteLowest",
  "warning", "warningHighest", "warningHigh", "warningMid", "warningLow", "warningLowest",
  "danger", "dangerHighest", "dangerHigh", "dangerMid", "dangerLow", "dangerLowest",
  "vivid", "vividHighest", "vividHigh", "vividMid", "vividLow", "vividLowest",
  "highlight"
]} />
```

