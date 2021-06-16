import React from "react";
import {
  Checkbox,
  Text,
  Form,
  Field,
  ButtonFilled,
  CheckboxGroup,
} from "../src";

export default {
  title: "Athletic/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      defaultValue: 'md',
    }
  },
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

export const Label = args => <Checkbox {...args} name="Test" label="Test" />;
export const LabelSizeSm = () => (
  <Checkbox size="sm" name="Test" label="Test" />
);
LabelSizeSm.storyName = "Label size sm";
LabelSizeSm.parameters = { controls: { hideNoControlsWarning: true } };

export const LabelSizeLg = () => (
  <Checkbox size="lg" name="Test" label="Test" />
);
LabelSizeLg.storyName = "Label size lg";
LabelSizeLg.parameters = { controls: { hideNoControlsWarning: true } };

export const ChildLabel = args => (
  <Checkbox name="Test" {...args}>
    <Text fontWeight="bold">Test</Text>
  </Checkbox>
);
ChildLabel.storyName = "Child label";

export const DisabledAndChecked = () => (
  <Checkbox disabled name="Test" value={true} label="Test" />
);
DisabledAndChecked.parameters = { controls: { hideNoControlsWarning: true } };

export const Disabled = () => (
  <CheckboxGroup
    disabled
    name="TestInput"
    options={[
      {
        label: "test",
        value: "testValue",
      },
      {
        label: "test 2",
        value: "testValue 2",
      },
    ]}
  />
);
Disabled.parameters = { controls: { hideNoControlsWarning: true } };

export const IndeterminateState = () => (
  <Checkbox name="IndeterminateCheckbox" label="Indeterminate" indeterminate />
);
IndeterminateState.parameters = { controls: { hideNoControlsWarning: true } };

export const CheckboxInField = () => (
  <Form
    initialValues={{ portalName: true }}
    onSubmit={(values, actions) => console.log(values, actions)}
  >
    <Field
      component={Checkbox}
      name="portalName"
      label="Portal name"
      description="The name displayed across the site"
    />
    <ButtonFilled type="submit" color="accent">
      Submit
    </ButtonFilled>
  </Form>
);
CheckboxInField.storyName = "Checkbox in Field";
CheckboxInField.parameters = { controls: { hideNoControlsWarning: true } };

export const UsageInACheckboxGroup = () => (
  <CheckboxGroup
    name="TestInput"
    options={[
      {
        label: "test",
        value: "testValue",
      },
      {
        label: "test 2",
        value: "testValue 2",
      },
    ]}
  />
);
UsageInACheckboxGroup.storyName = "Usage in a CheckboxGroup";
UsageInACheckboxGroup.parameters = { controls: { hideNoControlsWarning: true } };

export const InitialValues = () => (
  <CheckboxGroup
    name="TestInput"
    value={["testValue"]}
    options={[
      {
        label: "test",
        value: "testValue",
      },
      {
        label: "test 2",
        value: "testValue 2",
      },
    ]}
  />
);
InitialValues.storyName = "Initial values";
InitialValues.parameters = { controls: { hideNoControlsWarning: true } };

