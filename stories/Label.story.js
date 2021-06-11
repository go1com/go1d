import React from "react";
import { Label, ButtonMinimal } from "../src";
import IconCross from '../src/components/Icons/Cross';

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

const Template = (args) => <Label {...args}>Portal Name</Label>;
export const LabelStory = Template.bind({});
LabelStory.storyName = "Label";

export const LabelWithStatus = Template.bind({});
LabelWithStatus.storyName = "Label with status";
LabelWithStatus.args = {
  statusColor: "dangerLow",
  statusText: "unavailable",
}

export const LabelWithLabelSuffix = Template.bind({});
LabelWithLabelSuffix.storyName = "Label with labelSuffix";
LabelWithLabelSuffix.args = {
  labelSuffix: (
    <ButtonMinimal icon={IconCross}
      paddingX={0}
      height="20px"
      color="subtle"
    >Remove</ButtonMinimal>)
}

export const LabelWithStatusAndLabelSuffix = Template.bind({});
LabelWithStatusAndLabelSuffix.storyName = "Label with status and labelSuffix";
LabelWithStatusAndLabelSuffix.args = {
  labelSuffix: (
    <ButtonMinimal icon={IconCross}
      paddingX={0}
      height="20px"
      color="subtle"
    >Remove</ButtonMinimal>),
  statusColor: "dangerLow",
  statusText: "unavailable",
}
