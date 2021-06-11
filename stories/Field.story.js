import React from "react";
import { TextInput, Field, Form, ButtonFilled, ButtonMinimal, SubmitButton } from "../src";
import IconPlus from '../src/components/Icons/Plus';
import IconCross from '../src/components/Icons/Cross';

export default {
  title: "Original Go1d/Field",
  component: Field,
  parameters: {
    docs: {
      description: {
        component: "⚠️ This component is required to be wrapped in a Form component otherwise it will fail to render. Field is an extension of Formik’s Field component https://jaredpalmer.com/formik/docs/api/field"
      }
    }
  }
};

const Template = (args) => (
  <Form
    initialValues={{ portalName: "A portal" }}
    onSubmit={(values, actions) => console.log(values, actions)}
  >
    <Field
      component={TextInput}
      name="portalName1"
      label="Portal name"
      description="The name displayed across the site"
      {...args}
    />
    <SubmitButton>SubmitButton</SubmitButton>
  </Form>
)

export const ExampleFieldAndForm = Template.bind({});
ExampleFieldAndForm.args = {
  component: TextInput,
  name: "portalName2",
  label: "Portal name",
  description: "The name displayed across the site",
};
ExampleFieldAndForm.storyName = "Example field and Form";

export const ExampleRequiredField = () => (
  <Form
    initialValues={{ portalName: "A portal" }}
    onSubmit={(values, actions) => actions.submit()}
  >
    <Field
      required={true}
      component={TextInput}
      name="portalName3"
      label="Portal name"
      placeholder="Leslie Knope"
    />
    <ButtonFilled type="submit" color="accent">
      ButtonFilled Submit
    </ButtonFilled>
  </Form>
);

export const ExampleWithADescriptionSuffix = () => (
  <Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
    component={TextInput}
    name="title"
    label="Title"
    description="Give your course a name"
    descriptionSuffix={
      <ButtonMinimal
        icon={IconPlus}
        paddingX={0}
        height="20px"
        color="accent"
      >Summary</ButtonMinimal>}
    maxLength={50}
    required={true}
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
  </Form>
);

export const ExampleWithALabelSuffix = () => (
  <Form initialValues={{ portalName: "A portal" }} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
      component={TextInput}
      name="summary"
      label="Summary"
      required={true}
      labelSuffix={<ButtonMinimal icon={IconCross}
        paddingX={0}
        height="20px"
        color="subtle"
      >Remove</ButtonMinimal>}
      multiline={2}
      css={{ resize: "none" }}
      maxLength={120}
      placeholder="Enter a summary"
      description="A short overview of what this is about and what people can expect to learn. It will display with title in search and when shared socially"
    />
    <ButtonFilled type="submit" color="accent">Submit</ButtonFilled>
  </Form>
);

