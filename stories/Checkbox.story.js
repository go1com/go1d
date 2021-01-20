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
  title: "Original Go1d/Checkbox",
  component: Checkbox,
};

export const Label = () => <Checkbox name="Test" label="Test" />;
export const LabelSizeSm = () => (
  <Checkbox size="sm" name="Test" label="Test" />
);

LabelSizeSm.story = {
  name: "Label size sm",
};

export const LabelSizeLg = () => (
  <Checkbox size="lg" name="Test" label="Test" />
);

LabelSizeLg.story = {
  name: "Label size lg",
};

export const ChildLabel = () => (
  <Checkbox name="Test">
    <Text fontWeight="bold">Test</Text>
  </Checkbox>
);

ChildLabel.story = {
  name: "Child label",
};

export const Disabled = () => (
  <Checkbox disabled name="Test" value={true} label="Test" />
);

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

CheckboxInField.story = {
  name: "Checkbox in Field",
};

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

UsageInACheckboxGroup.story = {
  name: "Usage in a CheckboxGroup",
};

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

InitialValues.story = {
  name: "Initial values",
};

export const _Disabled = () => (
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
