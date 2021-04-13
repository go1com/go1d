import React from "react";
import { Button, SubmitButton } from "../src";

export default {
  title: "Athletic/Buttons/Base",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'This is the base Button component used by ButtonFilled and ButtonMinimal.'
      }
    },
  }
};

export const UnstyledButtons = args => (
  <React.Fragment>
    <Button {...args}>Default</Button>
  </React.Fragment>
);

export const SubmitButtonUsedInAForm = args => (
  <SubmitButton>Create</SubmitButton>
);

SubmitButtonUsedInAForm.storyName = "Submit Button used in a Form";
