import React from "react";
import { ImageUploadSlat, Form, Field } from "../src";

export default {
  title: "Original Go1d/ImageUploadSlat",
};

export const BasicUsage = () => (
  <Form
    enableReinitialize
    initialValues={{
      uploader: "",
    }}
  >
    <Field name="uploader" component={ImageUploadSlat} />
  </Form>
);

BasicUsage.story = {
  name: "Basic usage",
};
