import React from "react";
import { TextArea } from "../src";

export default {
  title: "Athletic/TextArea",
  component: TextArea,
};

export const Label = args => <TextArea {...args} id="Testing" />;

export const FloatingLabel = () => (
  <TextArea
    label='weee'
    hideLabel
    floating
  />
)

export const FloatingLabelWithInput = () => (
  <TextArea
    label='weee'
    hideLabel
    floating
    value={`bla bla bla bla bla bla bla bla
      bla bla bla bla
      bla bla bla bla
      bla bla bla bla
      bla bla bla bla
      bla bla bla bla
      bla bla bla bla`
    }
  />
)