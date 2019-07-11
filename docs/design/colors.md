---
title: Colors
status: ready
lead: GO1D uses colors purposefully to communicate how things function in the interface. This helps us create visual patterns that can make interacting with our product easier and more predictable for users.
---

## Accent Blue

Our accent blue is used extensively throughout GO1 to guide the user by highlighting the most important functionality. The accent colour is also the colour that is replaced through theming.

```!jsx
<Banner type="warning">
Note: Our current accent colour has accessibility issues. We are working to amend this but in the meantime, add text shadows when necessary to ameliorate the problem.
</Banner>
```

```!jsx
<Colors colors={["accent"]} />
```

## Light mode accent greys

These are the complementary colors to our accent blue. Every grey contains a percentage of our accent color. Light mode is to be used on all light surfaces and will be the more frequently used palette.

```!jsx
<Colors colors={["contrast", "default", "subtle", "muted", "faded", "soft", "faint", "background"]} />
```

## Dark mode accent greys

These are the complementary colors to our accent blue. Every grey contains a percentage of our accent color. Light mode is to be used on all light surfaces and will be the more frequently used palette.

```!jsx
<Colors
  mode='dark'
  paddingTop={6}
  borderRadius={2}
  backgroundColor="background"
  colors={["contrast", "default", "subtle", "muted", "faded", "soft", "faint", "background"]}
/>
```

## Status colors

Colors used to alert users to certain aspects of the UI.

```!jsx
<Colors colors={["highlight", "success", "note", "warning", "danger"]} />
```
