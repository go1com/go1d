---
title: Rich Text Input
status: ready
releaseVersion: 0.0.1
lead:  Rich text input field.
---


## Rich Text Input in Field
```.jsx


<Form initialValues={{}} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={RichTextInput}
    name="description"
    label="Description"
    placeholder="Description"
    minHeight={200}
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

```!jsx
<ComponentDoc component="RichTextInputProps" />
```
