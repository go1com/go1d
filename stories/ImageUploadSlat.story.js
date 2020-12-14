import React from 'react'; 
import { storiesOf } from '@storybook/react'; 
import { ImageUploadSlat, Form, Field } from '../src'; 

storiesOf("ImageUploadSlat", module) 
  .add('Basic usage', () => (
    <Form
      enableReinitialize
      initialValues={{
        uploader: '',
      }}
    >
      <Field
        name="uploader"
        component={ImageUploadSlat}
      />
    </Form>
  )) 
