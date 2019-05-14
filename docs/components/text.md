---
title: Text
status: ready
releaseVersion: 0.0.1
lead: Text uses our responsive type scale under the hood and connects props with all our type foundations.
---

All text in our apps should be wrapped in a Text component.

Try out the props below.


### Base
```.jsx
<Text
  color='subtle'
  fontSize={4}
  fontWeight="semibold"
  lineHeight="paragraph"
>
  My large semibold subtle text
</Text>
```

### With ellipsis
```.jsx
<View flexShrink={0}>
  <Text
    color='subtle'
    fontSize={4}
    fontWeight="semibold"
    lineHeight="paragraph"
    ellipsis={true}
  >
    This is a very long semibold text that should be displayed in one line with an ellipsis at the end of line
  </Text>
</View>
```

### With lineClamp
```.jsx
<View flexShrink={0}>
  <Text
    color='subtle'
    fontSize={4}
    fontWeight="semibold"
    lineHeight="paragraph"
    lineClamp={2}
  >
    This is a very long semibold text that should be displayed in two lines with an ellipsis at the end of the second line. If there is no ellipsis then try to add more text in below supposed code
  </Text>
</View>
```

```!jsx
<ComponentDoc component="TextProps" />
```
