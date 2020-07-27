---
title: Label
lead: 
status: ready
releaseVersion: 0.0.41
---

## Examples

### Label 
```.jsx
<Label>
Portal Name
</Label>
```

### Label with status
```.jsx
<Label
    statusText="unavailable"
    statusColor="danger"
>
Portal Name
</Label>
```

### Label with labelSuffix
```.jsx
<Label
    labelSuffix={<ButtonMinimal icon={IconCross}
                    paddingX={0}
                    height="20px"
                    color="subtle"
                >Remove</ButtonMinimal>}
>
Portal Name
</Label>
```

### Label with status and labelSuffix
```.jsx
<Label
    statusText="unavailable"
    statusColor="danger"
    labelSuffix={<ButtonMinimal icon={IconCross}
                    paddingX={0}
                    height="20px"
                    color="subtle"
                >Remove</ButtonMinimal>}
>
Portal Name
</Label>
```

```!jsx
<ComponentDoc component="LabelProps" />
```
