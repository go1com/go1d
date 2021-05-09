import React from "react";
import { TextArea } from "../src";

export default {
  title: "Athletic/TextArea",
  component: TextArea,
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