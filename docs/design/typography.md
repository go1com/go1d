---
title: Typography
status: ready
lead: Typography plays a crucial role in our UI and we have created a compact and streamlined system to create the ever important and necessary hierarchy for our users to navigate both our UI and our marketing site.
---

To interact with our typography components, see the [Typography story](https://go1d.go1.com/storybook/?path=/docs/athletic-foundations-typography--page).

## Typeface

Our brand uses two typefaces – a headline typeface called Victor Serif and a custom designed body typeface called Obelisc. The purpose of our type is to communicate clearly and effectively, while also remaining distinct and sophisticated.

### Brand fonts

Our headline typeface is Victor Serif. We only use one weight for our headlines – semibold (600).

```!jsx
<View marginTop={6} marginBottom={8}>
  <Heading semanticElement="p" visualHeadingLevel="Heading 2" color="default">
    Victor Serif<br/>
    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
    abcdefghijklmnopqrstuvwxyz<br/>
    0123456789<br/>
  </Heading>
</View>
```

Obelisc is a body copy typeface designed to work harmoniously with Victor serif across all platforms. Obelisc was inspired by mid century geometric typefaces, the notable angles and circular shapes in Obelisc visually reference the connecting shapes.

```!jsx
<View marginY={6}>
  <Text color="default" element="p" fontSize={2} fontWeight="normal" fontFamily="sansSerif" lineHeight="paragraph">
    Obelisc<br/>
    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
    abcdefghijklmnopqrstuvwxyz<br/>
    0123456789
  </Text>
</View>
```

## Typescale

```!jsx
<View marginTop={4}>
  <Text color="subtle" fontSize={3} lineHeight="paragraph">
    The following type scale is designed for large screens (min-width: 1100px).
  </Text>
</View>
```

```!jsx
<View marginTop={6} marginBottom={8}>
  <TypeScale />
</View>
```

## Type styles

```!jsx
<Text color="subtle" fontSize={3} lineHeight="paragraph">
  We have three primary type styles: title, UI and a paragraph.
</Text>
```

```!jsx
<View marginTop={5}>
  <Text element="h3" fontSize={3} color="contrast">Title</Text>
  <Text color="subtle" fontSize={3} lineHeight="paragraph">
Title is meant to create hierarchy for the user. It is the “call out” for most pieces of content. We use it on page titles, headers, sub headers and all other pieces of components that require an introduction.
  </Text>
</View>
```

```!jsx
<View marginTop={5}>
  <Text element="h3" fontSize={3} color="contrast">UI</Text>
  <Text color="subtle" fontSize={3} lineHeight="paragraph">
We use the UI type style for all pieces of text that are not titles and are not large pieces of readable content (i.e. a blog post). It can be used for everything from course meta data to times and locations of events. We use it for labels in most components including button text, form labels, and slats.
  </Text>
</View>
```

```!jsx
<View marginTop={5}>
  <Text element="h3" fontSize={3} color="contrast">Paragraph</Text>
  <Text color="subtle" fontSize={3} lineHeight="paragraph">
This is the type style used for all long pieces of text such as a blog post entry or a course description. This style has been specifically created to allow easy absorption of large blocks of text by the user. We use it in the prose component.
  </Text>
</View>
```

```!jsx
<Table
  marginY={6}
  rows={[
    <TR key={0}>
        <TD><Text fontSize={4} fontWeight="semibold">Title</Text></TD>
        <TD><Text>1 - 6</Text></TD>
        <TD><Text>Size x 1.2</Text></TD>
        <TD><Text>0</Text></TD>
    </TR>,
    <TR key={1}>
        <TD><Text fontSize={4}>UI</Text></TD>
        <TD><Text>1 - 4</Text></TD>
        <TD><Text>Size x 1.35</Text></TD>
        <TD><Text>0</Text></TD>
    </TR>,
    <TR key={2}>
        <TD><Text fontSize={4}>Paragraph</Text></TD>
        <TD><Text>1 - 4</Text></TD>
        <TD><Text>Size x 1.5</Text></TD>
        <TD><Text>Line height x .75</Text></TD>
    </TR>,
  ]}
  header={[
    <TH key="3" text="Type style" />,
    <TH key="4" text="Scale sizes" />,
    <TH key="5" text="Line height" />,
    <TH key="6" text="Paragraph height" />,
  ]}
/>
```

## Importing typefaces

Most Go1d components require you to call the `globalCSS` function to add the required CSS rules and fonts to the project.

The easiest way to do this is to include the following code in the root JavaScript file of the project:

```
import { globalCSS } from "@go1d/go1d";
globalCSS();
```

