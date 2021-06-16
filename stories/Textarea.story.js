import React from "react";
import { TextArea } from "../src";

export default {
  title: "Athletic/TextArea",
  component: TextArea,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3105%3A14386',
        label: 'We need your help! Please add a page in Figma using the template and update this link.',
      },
    ],
  }
};

export const Label = args => <TextArea {...args} id="Testing" />;

export const FloatingLabel = () => (
  <TextArea
    id='TextAreaFloatingLabel'
    label='Label'
    hideLabel
    floating
  />
)

export const FloatingLabelWithInput = args => (
  <TextArea {...args} />
)
FloatingLabelWithInput.argTypes = {
  id: { defaultValue: 'TextAreaFloatingLabelWithInput' },
  label: { defaultValue: 'Label' },
  floating: { defaultValue: true },
  value: {
    defaultValue: `bla bla bla bla bla bla bla bla\nbla bla bla bla\nbla bla bla bla\nbla bla bla bla`
  }
}
