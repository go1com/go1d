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

### Toggle with default value props
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
    <ToggleSwitch defaultValue={false} size="md" disabled={true} marginRight={2} />
    <ToggleSwitch defaultValue={true} size="md" disabled={true} marginRight={2} />
</View>
```

### Toggle with a label props
```.jsx
<View flexDirection="column" alignItems="baseline" justifyContent="center">
    <ToggleSwitch defaultValue={true} size="sm" label="Toggle switch" marginRight={2} />
    <ToggleSwitch defaultValue={false} size="md" label="Toggle switch" marginRight={2} />
    <ToggleSwitch defaultValue={true} size="lg" label="Toggle switch" marginRight={2} />
</View>
```

### Toggle with a label and description props
```.jsx
<ToggleSwitch defaultValue={true} size="sm" label="Toggle switch" description="This is helper text" marginRight={2} />
<ToggleSwitch defaultValue={false} size="md" label="Toggle switch" description="This is helper text" marginRight={2} />
<ToggleSwitch defaultValue={true} size="lg" label="Toggle switch" description="This is helper text" marginRight={2} />
```

### Toggle with a label, description, reverse props
```.jsx
<View width="300px">
<ToggleSwitch defaultValue={true} size="sm" label="Toggle switch" description="This is helper text" direction="row-reverse" marginRight={2} />
<ToggleSwitch defaultValue={false} size="md" label="Toggle switch" description="This is helper text" direction="row-reverse" marginRight={2} />
<ToggleSwitch defaultValue={true} size="lg" label="Toggle switch" description="This is helper text" direction="row-reverse" marginRight={2} />
</View>
```
### Toggle with a label, inline props
```.jsx
<ToggleSwitch defaultValue={true} size="sm" label="Toggle switch" inline={true} marginRight={2} />
<ToggleSwitch defaultValue={false} size="md" label="Toggle switch" inline={true} marginRight={2} />
<ToggleSwitch defaultValue={true} size="lg" label="Toggle switch" inline={true} marginRight={2} />
```

### Toggle with all props
```.jsx
<ToggleSwitch defaultValue={true} size="sm" label="Toggle switch" description="This is helper text" inline={true} direction="row-reverse" marginRight={2} />
<ToggleSwitch defaultValue={false} size="md" label="Toggle switch" description="This is helper text" inline={true} direction="row-reverse" marginRight={2} />
<ToggleSwitch defaultValue={true} size="lg" label="Toggle switch" description="This is helper text" inline={true} direction="row-reverse" marginRight={2} />
```

```!jsx
<ComponentDoc component="ToggleSwitchProps" />
```
