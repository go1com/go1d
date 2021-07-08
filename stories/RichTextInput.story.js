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
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=6122%3A43990',
        label: 'See Rich Text Editor designs in Figma',
      },
    ],
  }
};

export const Main = args => (
  <Form initialValues={{}} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
      component={RichTextInput}
      {...args}
    />
    <ButtonFilled type="submit" color="accent">Save course</ButtonFilled>
  </Form>
);
Main.storyName = "Rich Text Input";
Main.args = {
  name: "description",
  label: "Course description",
  placeholder: "e.g. How to lead…",
  minHeight: 200,
  italicFormatOption: false,
  underlineFormatOption: false,
  strikethroughFormatOption: false,
}


export const RichTextInputInField = () => (
  <Form initialValues={{}} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
      component={RichTextInput}
      name="name"
    />
  </Form>
);
RichTextInputInField.storyName = "Rich Text Input in Field";
RichTextInputInField.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    description: {
      story: 'This is the default set of fields you get when including a RichTextInput field.',
    },
  },
}

export const RichTextInputInFieldWithFormatOptions = args => (
  <Form initialValues={{}} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
      component={RichTextInput}
      {...args}
    />
    <ButtonFilled type="submit" color="accent">Save course</ButtonFilled>
</Form>
);
RichTextInputInFieldWithFormatOptions.storyName = "Rich Text Input in Field with control over FormatOptions";
RichTextInputInFieldWithFormatOptions.args = {
  name: "description",
  label: "Course description",
  placeholder: "e.g. How to manage…",
  minHeight: 200,
  boldFormatOption: false,
  italicFormatOption: true,
  underlineFormatOption: false,
  strikethroughFormatOption: false,
  h2FormatOption: true,
  h3FormatOption: false,
  blockquoteFormatOption: false,
  linkFormatOption: true,
  numberedListFormatOption: false,
  bulletListFormatOption: true,
}

export const RichTextInputWithDynamicValues = args => (
  <Form initialValues={{}} onSubmit={(values, actions) => console.log(values, actions)}>
    <Field
      component={RichTextInput}
      {...args}
    />
    <ButtonFilled type="submit" color="accent">Save course</ButtonFilled>
</Form>
);
RichTextInputWithDynamicValues.storyName = "Rich Text Input with dynamic values";
RichTextInputWithDynamicValues.args = {
  name: "description",
  label: "Course description",
  placeholder: "e.g. How to manage…",
  minHeight: 200,
  boldFormatOption: false,
  italicFormatOption: false,
  underlineFormatOption: false,
  strikethroughFormatOption: false,
  h2FormatOption: true,
  h3FormatOption: true,
  blockquoteFormatOption: false,
  linkFormatOption: false,
  numberedListFormatOption: false,
  bulletListFormatOption: false,
  dynamicValues: [
    {
      label: 'First name',
      value: '!first_name'
    },
    {
      label: 'Portal name',
      value: '!portal_name'
    },
  ]
}
