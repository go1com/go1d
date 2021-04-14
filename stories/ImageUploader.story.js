import React from "react";
import { ImageUploader, Form, Field, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/ImageUploader",
  component: ImageUploader,
};

export const ExampleUsageWithoutCrop = args => (
  <ImageUploader {...args} />
);
ExampleUsageWithoutCrop.storyName = "Example usage without crop";
ExampleUsageWithoutCrop.argTypes = {
  name: { defaultValue: 'uploader' },
  onChange: { defaultValue: console.log },
  height: { defaultValue: "300px" },
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
ExampleUsageWithCropAndCustomConfig.storyName = "Example usage with crop and custom config";
ExampleUsageWithCropAndCustomConfig.parameters = { controls: { hideNoControlsWarning: true } };

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
InsideAForm.storyName = "Inside a form";
InsideAForm.parameters = { controls: { hideNoControlsWarning: true } };
