import React from "react";
import { TextInput, Field, Banner, Form, ButtonFilled } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Field);

export default {
  title: "Original Go1d/Field",
  argTypes: argTypes,
};

export const Base = () => (
  <Banner type="warning">
    This component is required to be wrapped in a Form component otherwise it
    will fail to render
  </Banner>
);

export const ExampleFieldAndForm = args => (
  <Form
    initialValues={{ portalName: "A portal" }}
    onSubmit={(values, actions) => console.log(values, actions)}
  >
    <Field
      component={TextInput}
      name="portalName"
      label="Portal name"
      description="The name displayed across the site"
    />
    <ButtonFilled type="submit" color="accent">
      Submit
    </ButtonFilled>
  </Form>
);

ExampleFieldAndForm.storyName = "Example field and Form";

export const ExampleRequiredField = args => (
  <Form
    initialValues={{ portalName: "A portal" }}
    onSubmit={(values, actions) => actions.submit()}
  >
    <Field
      required={true}
      component={TextInput}
      name="portalName"
      label="Portal name"
      placeholder="Leslie Knope"
    />
    <ButtonFilled type="submit" color="accent">
      Submit
    </ButtonFilled>
  </Form>
);
