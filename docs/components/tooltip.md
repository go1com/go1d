---
title: Tooltip
status: ready
releaseVersion: 0.0.41
---

This is a tooltip component, In the basic usage it will wrap the tooltip's children with a `<span>` and the tooltip will appear off that node.

## Examples

### Basic Usage
```.jsx
<Text
  color='subtle'
  fontSize={4}
  fontWeight='bold'
>
  My large <Tooltip tip="Really Bold">bold</Tooltip> grey text
</Text>
```

### Click Mode
```.jsx
<Text
>
 <Tooltip tip={<Text color=""><EyeIcon display="inline" /> See You</Text>} mode="click" placement="right">Click ME!</Tooltip>
</Text>
```

### Advanced Usage 
Need to add both the ref and getEventProps to the component you want the tooltip to appear on
```.jsx
<Tooltip tip="This is a tooltip">
    {({ref, getEventProps}) => <ButtonFilled 
        color="accent" 
        innerRef={ref} 
        {...getEventProps()}
    >
        Testing
    </ButtonFilled>}
</Tooltip>
```

```!jsx
<ComponentDoc component="TooltipProps" />
```