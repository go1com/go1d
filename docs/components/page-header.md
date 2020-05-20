---
title: Page Header
status: ready
releaseVersion: 0.0.12
---

A container for the header of a page, it contains the menu open button and then displays the children passed in

## Examples

### Lightmode page header with menu button
```.jsx
<PageHeader showMenuButton={false} title="Overview" />
```


### Lightmode page header without menu button
```.jsx
<PageHeader showMenuButton={true} title="Overview" />
```

### Page header with breadcrumb and subtitle
```.jsx
<PageHeader
  showMenuButton={false}
  title="Portal"
  subtitle={
    <Text element="h4" fontSize={2} color="accent">
      portal.mygo1.com
    </Text>}
  breadcrumbHref="#testing"
  breadcrumbTitle="Portals"
>
  <ButtonFilled icon={IconEdit}>
    Edit
  </ButtonFilled>
</PageHeader>
```

```!jsx
<ComponentDoc component="PageHeaderProps" />
```
