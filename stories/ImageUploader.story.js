import React from 'react';
import {storiesOf} from '@storybook/react';
import {ImageUploader,Form,Field,ButtonFilled} from '../src';
storiesOf("Original Go1d/ImageUploader", module)
.add('Example usage without crop', () => <ImageUploader name="uploader" onChange={console.log} height="300px"/>)
.add('Example usage with crop and custom config', () => <ImageUploader allowCrop cropConfig={{ aspect: 20/3 }} name="uploader" onChange={console.log} height="300px"/>)
.add('Inside a form', () => <Form onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    hideLabel
    component={ImageUploader}
    name="portalImage"
    label="Portal Image"
    description="The image for your portal"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
</Form>)
