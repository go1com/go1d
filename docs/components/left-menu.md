---
title: Left Menu
status: ready
releaseVersion: 0.0.13
---

A collapsible menu for navigation

### Collapsible Expanded

```.jsx
<LeftMenu title="Content" showMenuButton={true}>
      <MenuItem icon={IconHome} href="#testing" collapsed={true}>Overview</MenuItem>
      <MenuItem icon={IconBriefcase} href="#testing" collapsed={true}>Partners</MenuItem>
</LeftMenu>
```

### Collapsible Collapsed
```.jsx
<LeftMenu title="Content">
      <MenuItem icon={IconHome} href="#testing">Overview</MenuItem>
      <MenuItem icon={IconBriefcase} href="#testing">Partners</MenuItem>
</LeftMenu>
```

```!jsx
<ComponentDoc component="LeftMenuProps" />
```
