import React from "react";
import { ImageUploader, Form, Field, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/ImageUploader",
  component: ImageUploader,
};

export const ExampleUsageWithoutCrop = args => (
  <ImageUploader {...args} name="uploader" onChange={console.log} height="300px" />
);

ExampleUsageWithoutCrop.storyName = "Example usage without crop";

export const ExampleUsageWithCropAndCustomConfig = args => (
  <ImageUploader
    {...args}
    allowCrop
    cropConfig={{ aspect: 20 / 3 }}
    name="uploader"
    onChange={console.log}
    height="300px"
  />
);

ExampleUsageWithCropAndCustomConfig.storyName = "Example usage with crop and custom config";

export const InsideAForm = args => (
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

InsideAForm.storyName = "Inside a form";
