import React from "react";
import { ButtonFilled } from "../src";
import { IconCheck, IconPlus } from "../src/components/Icons";

export default {
  title: "Original Go1d/ButtonFilled",
  component: ButtonFilled,
};

export const WithText = args => (
  <ButtonFilled {...args}>This is a filled button</ButtonFilled>
);

WithText.storyName = "with text";

export const WithSomeEmoji = args => (
  <ButtonFilled {...args}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </ButtonFilled>
);

WithSomeEmoji.storyName = "with some emoji";

export const FilledButtonInSubtleColour = args => (
  <React.Fragment>
    <ButtonFilled {...args}>I'm a button</ButtonFilled>
    <br />
    <ButtonFilled {...args} size="sm">I'm a button</ButtonFilled>
    <br />
    <ButtonFilled {...args} size="lg">I'm a button</ButtonFilled>
  </React.Fragment>
);

FilledButtonInSubtleColour.storyName = "Filled button in subtle colour";

export const FilledButtonInAccentColour = args => (
  <ButtonFilled {...args} color="accent">Call to action</ButtonFilled>
);

FilledButtonInAccentColour.storyName = "Filled button in accent colour";

export const FilledIconOnlyButtonInSuccessColourAndRound = args => (
  <ButtonFilled {...args} round={true} color="success" icon={IconCheck} />
);

FilledIconOnlyButtonInSuccessColourAndRound.storyName = "Filled Icon only button in success colour and round";

export const FilledButtonInDangerColour = args => (
  <ButtonFilled {...args} color="danger">Danger zone</ButtonFilled>
);

FilledButtonInDangerColour.storyName = "Filled button in danger colour";

