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
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=4361%3A22323',
        label: 'See Text Area designs in Figma',
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
