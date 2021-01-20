import React from "react";
import { Label } from "../src";

export default {
  title: "Original Go1d/Label",
};

export const _Label = () => <Label>Portal Name</Label>;

export const LabelWithStatus = () => (
  <Label statusText="unavailable" statusColor="danger">
    Portal Name
  </Label>
);

LabelWithStatus.story = {
  name: "Label with status",
};
