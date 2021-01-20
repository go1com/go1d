import React from "react";
import { PortalUrlField, Form } from "../src";

export default {
  title: "Original Go1d/PortalUrlField",
  component: PortalUrlField,
};

export const PortalUrlFieldAvailable = () => (
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

export const PortalUrlFieldNotAvailable = () => (
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
