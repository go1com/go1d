import React from "react";
import { RichTextInput, Form, Field, ButtonFilled } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, RichTextInput);

export default {
  title: "Original Go1d/RichTextInput",
  argTypes: argTypes,
  component: RichTextInput,
};

export const RichTextInputInField = args => (
  <Form
    initialValues={{}}
    onSubmit={(values, actions) => console.log(values, actions)}
  >
    <Field
      component={RichTextInput}
      name="description"
      label="Description"
      placeholder="Description"
    />
    <ButtonFilled type="submit" color="accent">
      Submit
    </ButtonFilled>
  </Form>
);

RichTextInputInField.storyName = "Rich Text Input in Field";
