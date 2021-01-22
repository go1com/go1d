import React from "react";
import { ButtonMinimal } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'
import { IconPlus } from "../src/components/Icons";

let argTypes = hideInheritedProps({}, ButtonMinimal);

export default {
  title: "Original Go1d/ButtonMinimal",
  argTypes: argTypes,
  component: ButtonMinimal,
};

export const MinimalButtonSubtleColour = args => (
  <ButtonMinimal {...args}>Minimal button</ButtonMinimal>
);

MinimalButtonSubtleColour.storyName = "Minimal button subtle colour";

export const MinimalButtonSubtleColourIconAndLabel = args => (
  <ButtonMinimal {...args} icon={IconPlus}>Minimal button</ButtonMinimal>
);

MinimalButtonSubtleColourIconAndLabel.storyName = "Minimal button subtle colour (Icon and label)";

export const MinimalButtonInAccentColourIconOnly = args => (
  <ButtonMinimal {...args} color="accent" icon={IconPlus} />
);

MinimalButtonInAccentColourIconOnly.storyName = "Minimal button in accent colour (Icon only)";

export const MinimalButtonInAccentColourIconAndLabel = args => (
  <ButtonMinimal {...args} color="accent" icon={IconPlus}>
    {" "}
    Call to action
  </ButtonMinimal>
);

MinimalButtonInAccentColourIconAndLabel.storyName = "Minimal button in accent colour (Icon and label)";

export const MinimalButtonInDangerColour = args => (
  <ButtonMinimal {...args} color="danger">Really</ButtonMinimal>
);

MinimalButtonInDangerColour.storyName = "Minimal button in danger colour";

