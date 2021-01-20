import React from "react";
import { PortalUrlField, Form } from "../src";

export default {
  title: "Original Go1d/PortalUrlField",
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

PortalUrlFieldAvailable.story = {
  name: "PortalUrlField Available",
};

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

PortalUrlFieldNotAvailable.story = {
  name: "PortalUrlField Not Available",
};
