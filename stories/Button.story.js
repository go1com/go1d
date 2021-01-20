import React from "react";
import { Button, ButtonFilled, ButtonMinimal, SubmitButton } from "../src";
import { IconCheck, IconPlus } from "../src/components/Icons";

export default {
  title: "Original Go1d/Button",
  component: Button,
};

export const FilledButtonInSubtleColour = () => (
  <React.Fragment>
    <ButtonFilled>I'm a button</ButtonFilled>
    <br />
    <ButtonFilled size="sm">I'm a button</ButtonFilled>
    <br />
    <ButtonFilled size="lg">I'm a button</ButtonFilled>
  </React.Fragment>
);

FilledButtonInSubtleColour.story = {
  name: "Filled button in subtle colour",
};

export const FilledButtonInAccentColour = () => (
  <ButtonFilled color="accent">Call to action</ButtonFilled>
);

FilledButtonInAccentColour.story = {
  name: "Filled button in accent colour",
};

export const FilledIconOnlyButtonInSuccessColourAndRound = () => (
  <ButtonFilled round={true} color="success" icon={IconCheck} />
);

FilledIconOnlyButtonInSuccessColourAndRound.story = {
  name: "Filled Icon only button in success colour and round",
};

export const FilledButtonInDangerColour = () => (
  <ButtonFilled color="danger">Danger zone</ButtonFilled>
);

FilledButtonInDangerColour.story = {
  name: "Filled button in danger colour",
};

export const MinimalButtonSubtleColour = () => (
  <ButtonMinimal>Minimal button</ButtonMinimal>
);

MinimalButtonSubtleColour.story = {
  name: "Minimal button subtle colour",
};

export const MinimalButtonSubtleColourIconAndLabel = () => (
  <ButtonMinimal icon={IconPlus}>Minimal button</ButtonMinimal>
);

MinimalButtonSubtleColourIconAndLabel.story = {
  name: "Minimal button subtle colour (Icon and label)",
};

export const MinimalButtonInAccentColourIconOnly = () => (
  <ButtonMinimal color="accent" icon={IconPlus} />
);

MinimalButtonInAccentColourIconOnly.story = {
  name: "Minimal button in accent colour (Icon only)",
};

export const MinimalButtonInAccentColourIconAndLabel = () => (
  <ButtonMinimal color="accent" icon={IconPlus}>
    {" "}
    Call to action
  </ButtonMinimal>
);

MinimalButtonInAccentColourIconAndLabel.story = {
  name: "Minimal button in accent colour (Icon and label)",
};

export const MinimalButtonInDangerColour = () => (
  <ButtonMinimal color="danger">Really</ButtonMinimal>
);

MinimalButtonInDangerColour.story = {
  name: "Minimal button in danger colour",
};

export const SubmitButtonUsedInAForm = () => (
  <SubmitButton>Create</SubmitButton>
);

SubmitButtonUsedInAForm.story = {
  name: "Submit Button used in a Form",
};

export const UnstyledButtons = () => (
  <React.Fragment>
    <Button>Default</Button>
    <Button color="accent">Accent</Button>
    <Button color="danger">Danger</Button>
  </React.Fragment>
);
