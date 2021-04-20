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
    cropConfig={{ aspect: 16/9, onCrop: console.log }}
    name="uploader"
    onChange={console.log}
    height="300px"
  />
);
ExampleUsageWithCropAndCustomConfig.storyName = "Example usage with crop and custom config";
ExampleUsageWithCropAndCustomConfig.parameters = { controls: { hideNoControlsWarning: true } };


export const ImageUploaderHasValueWithCropFunction = () => (
  <ImageUploader
    allowCrop
    value="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
    cropConfig={{ aspect: 16/9, onCrop: console.log }}
    name="uploader"
    height="400px"
  />
);

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
