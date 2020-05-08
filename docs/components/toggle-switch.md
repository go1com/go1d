---
title: Toggle Switch
status: ready
lead: This component used to on/off some attributes.
---

## Examples

### Toggle with no props
```.jsx
<ToggleSwitch />
```

### Toggle with default props
```.jsx
<ToggleSwitch defaultValue={true} />
```

### Toggle with a different size
```.jsx
<View flexDirection="row" alignItems="baseline">
    <ToggleSwitch defaultValue={true} size="sm" marginRight={2}/>
    <ToggleSwitch defaultValue={false} size="md" marginRight={2}/>
    <ToggleSwitch defaultValue={true} size="lg" marginRight={2}/>
</View>
```

### Toggle with disabled props
```.jsx
<View flexDirection="row">
    <ToggleSwitch defaultValue={false} size="md" marginRight={2} disabled={true} />
    <ToggleSwitch defaultValue={true} size="md" marginRight={2} disabled={true} />
</View>
```

### Toggle with a label props
```.jsx
<View flexDirection="column" alignItems="baseline" justifyContent="center">
    <ToggleSwitch defaultValue={true} size="sm" marginRight={2} label="Toggle switch" />
    <ToggleSwitch defaultValue={false} size="md" marginRight={2} label="Toggle switch" />
    <ToggleSwitch defaultValue={true} size="lg" marginRight={2} label="Toggle switch" />
</View>
```

### Toggle with a label and helper text props
```.jsx
<View flexDirection="column" alignItems="baseline" justifyContent="center">
    <ToggleSwitch defaultValue={true} size="sm" marginRight={2} label="Toggle switch" helperText="This is helper text" />
    <ToggleSwitch defaultValue={false} size="md" marginRight={2} label="Toggle switch" helperText="This is helper text" />
    <ToggleSwitch defaultValue={true} size="lg" marginRight={2} label="Toggle switch" helperText="This is helper text" />
</View>
```

### Toggle with a label, helper text, reverse props
```.jsx
<View flexDirection="column" alignItems="baseline" justifyContent="center" width={300}>
    <ToggleSwitch defaultValue={true} size="sm" marginRight={2} label="Toggle switch" reverse={true} />
    <ToggleSwitch defaultValue={false} size="md" marginRight={2} label="Toggle switch" reverse={true} />
    <ToggleSwitch defaultValue={true} size="lg" marginRight={2} label="Toggle switch" reverse={true} />
</View>
```

```!jsx
<ComponentDoc component="ToggleSwitchProps" />
```
