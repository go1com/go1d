import React from "react";
import { ImageUploadSlat, Form, Field } from "../src";

export default {
  title: "Original Go1d/ImageUploadSlat",
  component: ImageUploadSlat,
};

export const BasicUsage = args => (
  <Form
    enableReinitialize
    initialValues={{
      uploader: "",
    }}
  >
    <Field name="uploader" component={ImageUploadSlat} />
  </Form>
);
BasicUsage.storyName = "Basic usage";

export const UploadedState = args => (
  <ImageUploadSlat name="uploader" height="auto" onChange={console.log} uploaded={true} value="https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?h=400" />
);
UploadedState.storyName = "Uploaded state";

