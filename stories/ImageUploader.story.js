import React from "react";
import { ImageUploader, Form, Field, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/ImageUploader",
  component: ImageUploader,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=6326%3A1',
        label: 'See Image Uploader designs in Figma',
      },
    ],
  }
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

export const InsideAFormWithDefaultImageOnDelete = () => (
  <Form onSubmit={(values, actions) => console.log(values, actions)} initialValues={{ portalImage: "https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"}}>
    <Field
      hideLabel
      component={ImageUploader}
      name="portalImage"
      label="Portal Image"
      description="The image for your portal"
      defaultImage="https://images.pexels.com/photos/257361/pexels-photo-25736.jpeg"
    />
    <ButtonFilled type="submit" color="accent">
      Submit
    </ButtonFilled>
  </Form>
);
InsideAFormWithDefaultImageOnDelete.storyName = "Inside a form with default image on delete";
InsideAFormWithDefaultImageOnDelete.parameters = { controls: { hideNoControlsWarning: true } };

export const ErrorState = () => (
  <Form onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
      errorMessage="Error message"
      hideStatus
      component={ImageUploader}
      name="portalImage"
      label="Portal Image"
    />
  </Form>
);
ErrorState.storyName = "Error state";
InsideAForm.parameters = { controls: { hideNoControlsWarning: true } };

export const ControlledZoom = () => {
  const [zoomValue, setZoomValue] = React.useState(1.3)

  return (
    <>
      <ImageUploader
        value="https://img.huffingtonpost.com/asset/5ab4d4ac2000007d06eb2c56.jpeg?cache=sih0jwle4e&ops=1910_1000"
        allowCrop
        cropConfig={{ aspect: 16/9, onCrop: console.log }}
        name="uploader"
        onChange={console.log}
        height="300px"
        zoomValue={zoomValue}
        onZoomChange={value => setZoomValue(value)}
      />
    </>
  )
}
