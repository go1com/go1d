import React from "react";
import { TextInput, Form, Field, SubmitButton } from "../src";

export default {
  title: "Original Go1d/Form",
  component: Form,
};

export const ExampleFormWithField = args => (
  <Form
    {...args}
    initialValues={{ portalName: "A portal" }}
    onSubmit={(values, actions) => console.log(values, actions)}
  >
    <Field
      component={TextInput}
      name="portalName"
      label="Portal name"
      description="The name displayed across the site"
    />
    <SubmitButton>Submit</SubmitButton>
  </Form>
);

ExampleFormWithField.storyName = "Example Form with field";

export const ExampleDisabledFormWithField = args => (
  <Form
    initialValues={{ portalName: "A portal" }}
    disabled={true}
    onSubmit={(values, actions) => console.log(values, actions)}
  >
    <Field
      component={TextInput}
      name="portalName"
      label="Portal name"
      description="The name displayed across the site"
    />
    <SubmitButton>Create</SubmitButton>
  </Form>
);

ExampleDisabledFormWithField.storyName = "Example Disabled Form with field";
