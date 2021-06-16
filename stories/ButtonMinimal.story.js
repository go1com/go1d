import React from "react";
import { ButtonMinimal, Button } from "../src";
import { IconPlus } from "../src/components/Icons";

export default {
  title: "Athletic/Buttons/ButtonMinimal",
  component: ButtonMinimal,
  subcomponents: { Button },
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3105%3A14386',
        label: 'We need your help! Please add a page in Figma using the template and update this link.',
      },
    ],
  }
};

export const MinimalButtonSubtleColour = args => (
  <ButtonMinimal {...args}>Minimal button</ButtonMinimal>
);
MinimalButtonSubtleColour.storyName = "Minimal button subtle colour";

export const MinimalButtonSubtleColourIconAndLabel = args => (
  <ButtonMinimal icon={IconPlus} {...args}>Minimal button</ButtonMinimal>
);
MinimalButtonSubtleColourIconAndLabel.storyName = "Minimal button subtle colour (Icon and label)";

export const MinimalButtonInAccentColourIconOnly = args => (
  <ButtonMinimal icon={IconPlus} {...args} />
);
MinimalButtonInAccentColourIconOnly.storyName = "Minimal button in accent colour (Icon only)";
MinimalButtonInAccentColourIconOnly.argTypes = {
  color: { defaultValue: 'accent' },
};

export const MinimalButtonInAccentColourIconAndLabel = args => (
  <ButtonMinimal icon={IconPlus} {...args}>
    {" "}
    Call to action
  </ButtonMinimal>
);
MinimalButtonInAccentColourIconAndLabel.storyName = "Minimal button in accent colour (Icon and label)";
MinimalButtonInAccentColourIconAndLabel.argTypes = {
  color: { defaultValue: 'accent' },
};

export const MinimalButtonInDangerColour = args => (
  <ButtonMinimal {...args}>Really</ButtonMinimal>
);
MinimalButtonInDangerColour.storyName = "Minimal button in danger colour";
MinimalButtonInDangerColour.argTypes = {
  color: { defaultValue: 'danger' },
};

