import React from "react";
import { RichTextInput, Form, Field, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/RichTextInput",
  component: RichTextInput,
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
