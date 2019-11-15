---
title: Checkbox Input
lead: 
status: ready
releaseVersion: 0.0.71
---

## Examples

### Label 
```.jsx
<Checkbox name="Test" label="Test" />
```

### Label small
```.jsx
<Checkbox size="sm" name="Test" label="Test" />
```

### Label large
```.jsx
<Checkbox size="lg" name="Test" label="Test" />
```

## Child label
```.jsx
<Checkbox name="Test">
    <Text fontWeight="bold">Test</Text>
</Checkbox>
```

## Disabled
```.jsx
<Checkbox disabled name="Test" value={true} label="Test" />
```

## Checkbox in Field
```.jsx
<Form initialValues={{ portalName: true }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={Checkbox}
    name="portalName"
    label="Portal name"
    description="The name displayed across the site"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

### Usage in a CheckboxGroup 
```.jsx
<CheckboxGroup name="TestInput" options={[
  {
    label: "test",
    value: "testValue"
  },
  {
    label: "test 2",
    value: "testValue 2"
  },
]} />
```

## Initial values
```.jsx
<CheckboxGroup name="TestInput" value={['testValue']} options={[
  {
    label: "test",
    value: "testValue"
  },
  {
    label: "test 2",
    value: "testValue 2"
  },
]} />
```

## Disabled
```.jsx
<CheckboxGroup disabled name="TestInput" options={[
  {
    label: "test",
    value: "testValue"
  },
  {
    label: "test 2",
    value: "testValue 2"
  },
]} />
```

## Checkbox
```!jsx
<ComponentDoc component="CheckboxProps" />
```
## CheckboxGroup
```!jsx
<ComponentDoc component="CheckboxGroupProps" />
```
