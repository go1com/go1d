import React from "react";
import { PortalUrlField, Form } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, PortalUrlField);

export default {
  title: "Original Go1d/PortalUrlField",
  argTypes: argTypes,
  component: PortalUrlField,
};

export const PortalUrlFieldAvailable = args => (
  <Form
    initialValues={{ portalName: "A portal" }}
    onSubmit={(values, actions) => actions.submit()}
  >
    <PortalUrlField
      name="portalName"
      label="Portal Url"
      suffixValue=".mygo1.com"
      description="This is the description"
      required
      isAvailable={true}
    />
  </Form>
);

PortalUrlFieldAvailable.storyName = "PortalUrlField Available";

export const PortalUrlFieldNotAvailable = args => (
  <Form
    initialValues={{ portalName: "A portal" }}
    onSubmit={(values, actions) => actions.submit()}
  >
    <PortalUrlField
      name="portalName"
      label="Portal Url"
      suffixValue=".mygo1.com"
      description="This is the description"
      required
      isAvailable={false}
    />
  </Form>
);

PortalUrlFieldNotAvailable.storyName = "PortalUrlField Not Available";
