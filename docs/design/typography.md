---
title: Typography
status: ready
lead: Typography plays a crucial role in our UI and we have created a compact and streamlined system to create the ever important and necessary hierarchy for our users to navigate both our UI and our marketing site.
---

## Typeface

```!jsx
<View marginTop={4}>
  <Text color="subtle" fontSize={3} lineHeight="paragraph">
    We are using Muli for our primary typeface for both our platform and our marketing site. It is a clean and legible font that will facilitate our user’s ability to process content. It is a google font and thus, accessible to everyone, renders well across platforms, and is lightweight for faster loading times.
  </Text>
</View>
```

```!jsx
<View marginY={6}>
  <Text element="p" fontSize={4} fontWeight="semibold">
    Muli Semibold<br/>
    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
    abcdefghijklmnopqrstuvwxyz<br/>
    0123456789
  </Text>
</View>
```

```!jsx
<View marginTop={6} marginBottom={8}>
  <Text element="p" fontSize={4}>
    Muli Regular<br/>
    ABCDEFGHIJKLMNOPQRSTUVWXYZ<br/>
    abcdefghijklmnopqrstuvwxyz<br/>
    0123456789<br/>
  </Text>
</View>
```

## Typescale

```!jsx
<View marginTop={4}>
  <Text color="subtle" fontSize={3} lineHeight="paragraph">
    Our typescale is designed to work for both our product UI and marketing sites. It is a modular scale based on a 16px base size and a 1.25 ratio. Our scale covers a range of sizes from display headers and course descriptions to tiny meta text.
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
  From our typescale we built three primary typestyles. They are called title, UI and a paragraph. They should be used as follows:
</Text>
```

```!jsx
<View marginTop={5}>
  <Text element="h3" fontSize={3} color="contrast">Title</Text>
  <Text color="subtle" fontSize={3} lineHeight="paragraph">
 This is typestyle with the largest range of sizes. It is meant to create hierarchy for the user. It is the “call out” for most pieces of content. We use it on page titles, headers, sub headers and all other pieces of components that require an introduction.
  </Text>
</View>
```

```!jsx
<View marginTop={5}>
  <Text element="h3" fontSize={3} color="contrast">UI</Text>
  <Text color="subtle" fontSize={3} lineHeight="paragraph">
    This is the typestyle with the largest range of uses. We use it for all pieces of text that are not titles and are not large pieces of readable content (i.e. a blog post). It can be used for everything from course meta data to times and locations of events.
  </Text>
</View>
```

```!jsx
<View marginTop={5}>
  <Text element="h3" fontSize={3} color="contrast">Paragraph</Text>
  <Text color="subtle" fontSize={3} lineHeight="paragraph">
    This is the typestyle used for all long pieces of text such as a blog post entry or a course description. This style has been specifically created to allow easy absorbtion of large blocks of text by the user.
  </Text>
</View>
```

<small>Please note that there are a few exceptions to these styles including text for buttons which are unique to themselves. </small>

```!jsx
<Table
  marginY={6}
  rows={[
    <TR key={0}>
        <TD><Text fontSize={4} fontWeight="semibold">Title</Text></TD>
        <TD><Text>1 - 8</Text></TD>
        <TD><Text>Semibold</Text></TD>
        <TD><Text>Size x 1.35</Text></TD>
        <TD><Text>0</Text></TD>
    </TR>,
    <TR key={1}>
        <TD><Text fontSize={4}>UI</Text></TD>
        <TD><Text>1 - 4</Text></TD>
        <TD><Text>Regular</Text></TD>
        <TD><Text>Size x 1.35</Text></TD>
        <TD><Text>0</Text></TD>
    </TR>,
    <TR key={2}>
        <TD><Text fontSize={4}>Paragraph</Text></TD>
        <TD><Text>1 - 4</Text></TD>
        <TD><Text>Regular</Text></TD>
        <TD><Text>Size x 1.5</Text></TD>
        <TD><Text>Line height x .75</Text></TD>
    </TR>,
  ]}
  header={[
    <TH key="0" text="Type style" />,
    <TH key="0" text="Scale sizes" />,
    <TH key="0" text="Weight" />,
    <TH key="0" text="Line height" />,
    <TH key="0" text="Paragraph height" />,
  ]}
/>
```
