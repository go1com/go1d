---
title: Toggle Button Feature
lead: Almost always used in a list, such as a list of feedback options.
status: ready
---

## Examples

### Base

```.jsx
<View flexDirection="row">
  <ToggleButtonFeature color="danger" icon={IconDanger} marginRight={3}>Oh</ToggleButtonFeature>
  <ToggleButtonFeature icon={IconEye} marginRight={3}>Hi</ToggleButtonFeature>
  <ToggleButtonFeature color="accent" icon={IconUser}>Mark</ToggleButtonFeature>
</View>
```

### Toggle Button Feature in sizes
```.jsx
<View flexDirection="row" alignItems="center">
  <ToggleButtonFeature size="sm" icon={IconStar} marginRight={3}>Star</ToggleButtonFeature>
  <ToggleButtonFeature size="md" icon={IconUser} marginRight={3}>User</ToggleButtonFeature>
  <ToggleButtonFeature size="lg" icon={IconVideo}>Video</ToggleButtonFeature>
</View>
```

### Toggle Button Feature in custom sizes

```js
const customSizeStyles = {
  sm: {
    iconSize: 5,
    iconMargin: 0,
  },
  md: {
    iconSize: 6,
    iconMargin: 0,
  },
  lg: {
    iconSize: 7,
    iconMargin: 0,
  }
};
```

```.jsx
<View flexDirection="row">
  <ToggleButtonFeature sizeStyles={customSizeStyles} icon={IconTooEasy} marginRight={3}>Too easy</ToggleButtonFeature>
  <ToggleButtonFeature sizeStyles={customSizeStyles} icon={IconSuitable} marginRight={3}>Suitable</ToggleButtonFeature>
  <ToggleButtonFeature sizeStyles={customSizeStyles} icon={IconTooHard}>Too hard</ToggleButtonFeature>
</View>
```
