---
title: File Uploader
lead: A component to standardise the uploading of files
status: ready
releaseVersion: 0.5.11
---

This component is used to display the status of uploading files. Actual uploading is left to the discretion of the implementing code. A file object is provided onChange, and this is the object that should be used by the implementing code to upload to whatever file hosting service is required. You can add the upload prop to immediately trigger the upload after selecting a file.

## Example usage

```.jsx
<FileUploader name="uploader" upload={(file) => api.post('aws_url', file)} onChange={console.log} />
```


## with value

```.jsx
<FileUploader 
  name="uploaderWithValue"
  value={new File(['foo'], 'foo.txt', {type: "text/plain"})} 
/>
```


## Inside a form

The component will fire onChange when an image is selected or deleted with the following object:
```
{
    target: {
        value: File // the File object of the selected file, will be null if the file was deleted
        name: props.name,
    }
}
```

This allows it to be used with formik fields like so: 

```.jsx
<Form onSubmit={(values, actions) => console.log(values, actions)}>
  <Field
    component={FileUploader}
    name="attachedFile"
    label="Attached File"
    description="The file attachment"
  />
  <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```

```!jsx
<ComponentDoc component="FileUploaderProps" />
```
