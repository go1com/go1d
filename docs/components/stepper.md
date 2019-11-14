---
title: Stepper
lead:
status: ready
---

## Examples

### Value supplied
```.jsx
<View width={200}>
    <Stepper id="stepper" value={0} unitLabel="Hours" borderColor="muted" boxShadow="none" />
</View>
```

### Value supplied with defaultValue
```.jsx
<View width={150}>
    <Stepper id="stepper" value={0} defaultValue={3} />
</View>
```

### not supplied
```.jsx
<View width={150}>
    <Stepper id="stepper" />
</View>
```

### min number
```.jsx
<View width={150}>
    <Stepper id="stepper" minNumber={0} />
</View>
```

### max number
```.jsx
<View width={150}>
    <Stepper id="stepper" maxNumber={2} />
</View>
```

### step increment and min number
```.jsx
<View width={150}>
    <Stepper id="stepper" stepIncrement={5} minNumber={-1} />
</View>
```

### step increment and max number
```.jsx
<View width={150}>
    <Stepper id="stepper" stepIncrement={5} maxNumber={21} />
</View>
```

## Stepper
```!jsx
<ComponentDoc component="StepperProps" />
```
