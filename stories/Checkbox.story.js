import React from "react";
import {
  Checkbox,
  Text,
  Form,
  Field,
  ButtonFilled,
  CheckboxGroup,
} from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Checkbox);

export default {
  title: "Athletic/Checkbox",
  argTypes: argTypes,
  component: Checkbox,
};

export const Label = args => <Checkbox {...args} name="Test" label="Test" />;
export const LabelSizeSm = args => (
  <Checkbox {...args} size="sm" name="Test" label="Test" />
);

LabelSizeSm.storyName = "Label size sm";

export const LabelSizeLg = args => (
  <Checkbox {...args} size="lg" name="Test" label="Test" />
);

LabelSizeLg.storyName = "Label size lg";

export const ChildLabel = args => (
  <Checkbox {...args} name="Test">
    <Text fontWeight="bold">Test</Text>
  </Checkbox>
);

ChildLabel.storyName = "Child label";

export const DisabledAndChecked = args => (
  <Checkbox {...args} disabled name="Test" value={true} label="Test" />
);

export const Disabled = args => (
  <CheckboxGroup
    {...args}
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

export const CheckboxInField = args => (
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

export const UsageInACheckboxGroup = args => (
  <CheckboxGroup
    {...args}
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

export const InitialValues = args => (
  <CheckboxGroup
    {...args}
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
