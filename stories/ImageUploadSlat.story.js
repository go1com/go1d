import React from "react";
import { ImageUploadSlat, Form, Field } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, ImageUploadSlat);

export default {
  title: "Original Go1d/ImageUploadSlat",
  argTypes: argTypes,
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
