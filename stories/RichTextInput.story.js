import React from "react";
import { RichTextInput, Form, Field, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/RichTextInput",
  component: RichTextInput,
};

export const RichTextInputInField = () => (
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
RichTextInputInField.parameters = { controls: { hideNoControlsWarning: true } }
