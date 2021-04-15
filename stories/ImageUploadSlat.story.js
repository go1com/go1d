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
