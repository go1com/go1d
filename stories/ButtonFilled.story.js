import React from "react";
import { ButtonFilled, Button } from "../src";
import { IconCheck } from "../src/components/Icons";
import { withDesign } from 'storybook-addon-designs'

export default {
  title: "Athletic/Buttons/ButtonFilled (Accent and Subtle)",
  component: ButtonFilled,
  subcomponents: { Button },
  decorators: [withDesign],
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=2691%3A62',
        label: 'See Button designs in Figma',
      },
    ],
  }
};

export const FilledButtonInAccentColour = args => (
  <ButtonFilled {...args}>Call to action</ButtonFilled>
);
FilledButtonInAccentColour.storyName = "Filled button in accent colour";
FilledButtonInAccentColour.argTypes = {
  color: { defaultValue: 'accent' },
};

export const FilledButtonInSubtleColour = args => (
  <ButtonFilled {...args}>I'm a button</ButtonFilled>
);
FilledButtonInSubtleColour.storyName = "Filled button in subtle style";

export const FilledIconOnlyButtonInSuccessColourAndRound = args => (
  <ButtonFilled round={true} icon={IconCheck} {...args} />
);
FilledIconOnlyButtonInSuccessColourAndRound.storyName = "Filled Icon only button in success colour and round";
FilledIconOnlyButtonInSuccessColourAndRound.argTypes = {
  color: { defaultValue: 'success' },
};

export const FilledButtonInDangerColour = () => (
  <ButtonFilled color="danger">Danger zone</ButtonFilled>
);
FilledButtonInDangerColour.storyName = "Filled button in danger colour";
FilledButtonInDangerColour.parameters = { controls: { hideNoControlsWarning: true } };

export const WithText = args => (
  <ButtonFilled {...args}>This is a filled button</ButtonFilled>
);
WithText.storyName = "Filled button with text";

export const FilledButtonSizes = () => (
  <React.Fragment>
    <ButtonFilled size="sm">I'm a button</ButtonFilled>
    <br />
    <ButtonFilled size="md">I'm a button</ButtonFilled>
    <br />
    <ButtonFilled size="lg">I'm a button</ButtonFilled>
  </React.Fragment>
);
FilledButtonSizes.storyName = "Filled button sizes";
FilledButtonSizes.parameters = { controls: { hideNoControlsWarning: true } };

export const WithSomeEmoji = args => (
  <ButtonFilled {...args}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ButtonFilled>
);
WithSomeEmoji.storyName = "Filled button with some emoji";

