---
title: Fonts
status: ready
menuOrder: 3
---

Our brand uses two typefaces – a headline typeface called Victor Serif and a custom designed body typeface called Obelisc. The purpose of our type is to communicate clearly and effectively, while also remaining distinct and sophisticated.

Our headline typeface is Victor Serif. We only use one weight for our headlines – semibold.

Obelisc is a custom designed body copy typeface made for the Go1 brand. It is designed to work harmoniously with Victor serif across all platforms. Obelisc was inspired by mid century geometric typefaces, the notable angles and circular shapes in Obelisc visually reference the connecting shapes.

We use the Obelisc Bold weight for CTAs and Body Copy headings. Obelisc Medium is used for subheads and pull quotes. Obelisc Regular is used exclusively for body copy. Obelisc has included a complete glyph set that can be used across all font weights.

For instances that require email safe fonts or power point documents, we have specified system fonts that can be substituted for our Brand fonts. These should strictly only be used if it is not possible to use the Brand fonts.

## Font files

If you need our font files, contact the Marketing team. Please send us an email at marketing@go1.com and we will get back to you as soon as possible.

That said, you won't need separate font files if you’re using our components.

## Importing typefaces

Most Go1d components require you to call the `globalCSS` function to add the required CSS rules and fonts to the project.

The easiest way to do this is to include the following code in the root JavaScript file of the project:

```
import { globalCSS } from "@go1d/go1d";
globalCSS();
```

## Fallback system fonts

For instances that require email safe fonts or power point documents, we have specified system fonts that can be substituted for our brand fonts. These should strictly only be used if it is not possible to use the brand fonts:

- Georgia Regular for headlines
- Arial Bold and Arial Regular for body copy

