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

* H2 = h2FormatOption -> default true (show)
* H3 = h3FormatOption -> default true (show)
* Bold = boldFormatOption -> default true (shows)
* Italic = italicFormatOption -> default true (shows) 
* Underline = underlineFormatOption -> default true (shows)
* Strikethrough = strikethroughFormatOption -> default true (shows)
* BlockQuote = blockquoteFormatOption -> default true (show)
* Link = linkFormatOption -> default true (show)
* Numbered List = numberedListFormatOption -> default true (show)
* Bullet List = bulletListFormatOption -> default true (show)

```.jsx


<Form initialValues={{}} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={RichTextInput}
    name="description"
    label="Description"
    placeholder="Description"
    minHeight={200}
    boldFormatOption={false}
    italicFormatOption={true}
    underlineFormatOption={false}
    strikethroughFormatOption={false}
    h2FormatOption={true}
    h3FormatOption={false}
    blockquoteFormatOption={false}
    linkFormatOption={true}
    numberedListFormatOption={false}
    bulletListFormatOption={true}
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

```!jsx
<ComponentDoc component="RichTextInputProps" />
```