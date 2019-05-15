---
title: SlatMini
status: ready
releaseVersion: 0.7.18
---

A generic mini slat component

## Examples
### With dropdown actions
```.jsx
<SlatMini
  id={123}
  title="This is an online content"
  bottomMeta={["Provider", "29 mins"]}
  image="http://res.cloudinary.com/go1/image/upload/v1557388417/l7jhug2k9n1s4qzw3ai8.png"
  type="Course"
  dropdownItems={[{
    iconName: "Calendar",
    title: "fake item",
    onClick: () => console.log('foo'),
  },
  {
    iconName: "Calendar",
    title: "fake item2",
    onClick: () => console.log('foo2'),
  }]}
/>
```

### With actionRender
```.jsx
<SlatMini
  id={123}
  title="This is a very long semibold text that should be displayed in two lines with an ellipsis at the end of the second line. If there is no ellipsis then try to add more text in below supposed code"
  bottomMeta={["Provider", "29 mins"]}
  image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
  type="Event"
  typeBackground="background"
  actionRenderer={() => (
    <Icon color="muted" name="PlusCircle" marginRight={3} />
  )}
/>
```

### With link
```.jsx
<SlatMini
  id={123}
  title="This is an offline content"
  bottomMeta={["Provider", "29 mins"]}
  image="https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg"
  type="Event"
  href="/"
  typeBackground="accent"
/>
```

### Skeleton
```.jsx
<SlatMini
  skeleton={true}
/>
```

```!jsx
<ComponentDoc component="SlatMiniProps" />
```
