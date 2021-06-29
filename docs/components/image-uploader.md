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


## with value

```.jsx
<ImageUploader name="uploader" onChange={console.log} uploaded={true} value="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=400" height="400px"/>
```

## With crop function enabled

```.jsx
<ImageUploader name="uploader" allowCrop cropConfig={{
    aspect: 4/3,
}} onChange={console.log} uploaded={true} value="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=400" height="400px"/>
```


## Inside a form

The component will fire onChange when an image is selected or deleted with the following object:
```
{
    target: {
        value: File,
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

## Inside a form with default image on delete

The File object of the selected image, will be null if the image was deleted. Unless the prop defaultImage is set which will allow a selected image to be the empty state of the field without any rendering delays.


```.jsx
<Form onSubmit={(values, actions) => console.log(values, actions)} initialValues={{portalImage: "https://images.pexels.com/photos/257361/pexels-photo-257361.jpeg?h=400"}}>
    <Field
    hideLabel
    component={ImageUploader}
    name="portalImage"
    label="Portal Image"
    description="The image for your portal"
    defaultImage="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=400"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>
```
 
```!jsx
<ComponentDoc component="ImageUploaderProps" />
```
