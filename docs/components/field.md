---
title: Form Field
lead: 
status: ready
releaseVersion: 0.0.41
---
### Base
```!jsx
<Banner type="warning">
    This component is required to be wrapped in a Form component otherwise it will fail to render
</Banner>
```

Field is an extension of Formik's Field component https://jaredpalmer.com/formik/docs/api/field

## Examples

### Example field and Form

```.jsx
<Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={TextInput}
    name="portalName"
    label="Portal name"
    description="The name displayed across the site"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

### Example with a descriptionSuffix

```.jsx
<Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={TextInput}
    name="title"
    label="Title"
    description="Give your course a name"
    descriptionSuffix={<ButtonMinimal icon={IconPlus}
                paddingX={0}
                height="20px"
                color="accent"
              >Summary</ButtonMinimal>}
    maxLength={50}
    required={true}
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

### Example with a labelSuffix

```.jsx
<Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={TextInput}
    name="summary"
    label="Summary"
    required={true}
    labelSuffix={<ButtonMinimal icon={IconCross}
                paddingX={0}
                height="20px"
                color="subtle"
              >Remove</ButtonMinimal>}
    multiline={2}
    css={{ resize: "none" }}
    maxLength={120}
    placeholder="Enter a summary"
    description="A short overview of what this is about and what people can expect to learn. It will display with title in search and when shared socially"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

### Example Required Field

```.jsx
<Form 
    validate={values => {      
      const errs = {};      
      if (!values.portalName) {
        errs.portalName = "Required";
      }
      return errs;
    }} 
    onSubmit={(values, actions) => actions.submit()}
    initialValues={{portalName: ""}}      
>
    <Field
    errorForLabel={true}
    required={true}
    component={TextInput}
    name="portalName"
    label="Portal name"
    placeholder="Leslie Knope"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

```!jsx
<ComponentDoc component="FieldProps" />
```
