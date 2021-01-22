import React from "react";
import { BaseUploader, View, Text, ButtonFilled } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, BaseUploader);

export default {
  title: "Original Go1d/BaseUploader",
  argTypes: argTypes,
  component: "BaseUploader",
};

export const Base = args => (
  <BaseUploader {...args} fileType="image/*">
    {({ open, getRootProps, isDragActive }) => (
      <View
        {...getRootProps()}
        justifyContent="center"
        onChange={(files) => window.alert(`{files[0].name} Uploaded`)}
      >
        <View
          alignItems="center"
          justifyContent="center"
          backgroundColor={isDragActive ? "faded" : "soft"}
          height="100px"
        >
          <Text>{isDragActive ? "Drop it here" : "Drop Zone"}</Text>
        </View>
        <ButtonFilled onClick={open}>Upload File</ButtonFilled>
      </View>
    )}
  </BaseUploader>
);
