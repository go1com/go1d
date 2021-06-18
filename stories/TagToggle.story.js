import React from "react";
import { TagToggle, TagToggleGroup, View, Field, Form, ButtonFilled } from "../src";

export default {
  title: "Athletic/TagToggle",
  component: TagToggle,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=4474%3A135',
        label: 'See Tag Toggle designs in Figma',
      },
    ],
  }
};

export const Main = (args) => <TagToggle {...args} />
Main.args = {
  label: "Mad Skillz",
}

export const TagToggleRow = () => (
  <React.Fragment>
    <View flexDirection="row">
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
    </View>
    <View flexDirection="row" alignItems="center" marginTop={5}>
      <TagToggle label="OK Skillz" size="sm" />
      <TagToggle label="Sick Skillz" size="md" />
      <TagToggle label="Mad Skillz" size="lg" />
    </View>
  </React.Fragment>
);
TagToggleRow.storyName = "Tag Toggle row";
TagToggleRow.parameters = { controls: { hideNoControlsWarning: true } };

export const TagToggleGroupStory = () => (
  <TagToggleGroup options={[{name:"skills", label: "skills"}, {name:"bills", label: "bills"}]}/>
);
TagToggleGroupStory.storyName = "Tag Toggle Group";
TagToggleGroupStory.parameters = {
  controls: { hideNoControlsWarning: true },
  docs: {
    description: {
      story: "When using multiple tag toggles as a single input, use the `TagToggleGroup` component. This is especially useful when working with Formik. Please note, the name prop is required on each option in order for it to function correctly."
    }
  }
};

export const TagToggleGroupWithForm = () => (
  <Form
    onSubmit={(value, formActions) => {
      formActions.setSubmitting(false);
      alert("tags = [" + value.tags.join(", ") + "]");
    }}
    initialValues={{ tags: ["skills"]}}
  >
    <Field
      component={TagToggleGroup}
      name="tags"
      marginBottom={1}
      options={[{name:"skills", label: "skills"}, {name:"bills", label: "bills"}]}
    />
    <View flexDirection="row">
      <ButtonFilled color="accent" type="submit">Submit</ButtonFilled>
    </View>
  </Form>
);
TagToggleGroupWithForm.storyName = "Tag Toggle Group with form";
TagToggleGroupWithForm.parameters = {
  controls: { hideNoControlsWarning: true },
};

