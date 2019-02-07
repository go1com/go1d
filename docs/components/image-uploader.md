---
title: Image Uploader
lead: A component to standardise the uploading of images
status: ready
releaseVersion: 0.5.11
---

This component is used to select images only. Actual uploading is left to the discretion of the implementing code. A file object is provided onChange, and this is the object that should be used by the implementing code to upload to whatever image hosting service is required. 

## Example usage

```.jsx
<ImageUploader name="uploader" onChange={console.log} height="400px"/>
```

## Inside a form

The component will fire onChange when an image is selected or deleted with the following object:
```
{
    target: {
        value: File // the File object of the selected image, will be null if the image was deleted
        name: props.name,
    }
}
```

This allows it to be used with formik fields like so: 

```.jsx
<Form onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    hideLabel
    component={ImageUploader}
    name="portalImage"
    label="Portal Image"
    description="The image for your portal"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

```!jsx
<ComponentDoc component="ImageUploaderProps" />
```