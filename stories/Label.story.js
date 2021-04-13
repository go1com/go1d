import React from "react";
import { Label } from "../src";

export default {
  title: "Athletic/Label",
  component: Label,
};

export const _Label = args => <Label {...args}>Portal Name</Label>;

export const LabelWithStatus = args => (
  <Label {...args} statusText="unavailable" statusColor="danger">
    Portal Name
  </Label>
);

LabelWithStatus.storyName = "Label with status";
