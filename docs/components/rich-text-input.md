---
title: Rich Text Input
status: ready
releaseVersion: 0.0.1
lead:  Rich text input field.
---


## Rich Text Input in Field

This is the default set of fields you get when including a RichTextInput field.
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


## Rich Text Input in Field with control over formatOptions

Each of these fields can be turned off with a prop:
* Bold = boldFormatOption

```.jsx


<Form initialValues={{}} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={RichTextInput}
    name="description"
    label="Description"
    placeholder="Description"
    minHeight={200}
    boldFormatOption={false}
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

```!jsx
<ComponentDoc component="RichTextInputProps" />
```