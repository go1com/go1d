import React from "react";
import { Label } from "../src";

export default {
  title: "Athletic/Label",
  component: Label,
  argTypes: {
    htmlFor: { control: { disable: true } },
    statusIcon: { control: { disable: true } },
    spinnerIcon: { description: 'Only shows when used with `statusText` or `labelSuffix`' },
    labelSuffix: { control: { disable: true } },
  }
};

export const LabelStory = args => <Label {...args}>Portal Name</Label>;
LabelStory.storyName = "Label";

export const LabelWithStatus = args => (
  <Label statusText="unavailable" statusColor="danger" {...args}>
    Portal Name
  </Label>
);
LabelWithStatus.storyName = "Label with status";
