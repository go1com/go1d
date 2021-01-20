import React from "react";
import { Label } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Label);

export default {
  title: "Original Go1d/Label",
  argTypes: argTypes,
  component: Label,
};

export const _Label = args => <Label {...args}>Portal Name</Label>;

export const LabelWithStatus = args => (
  <Label {...args} statusText="unavailable" statusColor="danger">
    Portal Name
  </Label>
);

LabelWithStatus.storyName = "Label with status";
