import React from "react";
import { ImageUploader, Form, Field, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/ImageUploader",
};

export const ExampleUsageWithoutCrop = () => (
  <ImageUploader name="uploader" onChange={console.log} height="300px" />
);

ExampleUsageWithoutCrop.story = {
  name: "Example usage without crop",
};

export const ExampleUsageWithCropAndCustomConfig = () => (
  <ImageUploader
    allowCrop
    cropConfig={{ aspect: 20 / 3 }}
    name="uploader"
    onChange={console.log}
    height="300px"
  />
);

ExampleUsageWithCropAndCustomConfig.story = {
  name: "Example usage with crop and custom config",
};

export const InsideAForm = () => (
  <Form onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
      hideLabel
      component={ImageUploader}
      name="portalImage"
      label="Portal Image"
      description="The image for your portal"
    />
    <ButtonFilled type="submit" color="accent">
      Submit
    </ButtonFilled>
  </Form>
);

InsideAForm.story = {
  name: "Inside a form",
};
