import React from "react";
import { Button, SubmitButton } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Button);

export default {
  title: "Original Go1d/Button",
  argTypes: argTypes,
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'This is the base Button component used by ButtonFilled and ButtonMinimal.'
      }
    },
  }
};

export const SubmitButtonUsedInAForm = args => (
  <SubmitButton>Create</SubmitButton>
);

SubmitButtonUsedInAForm.storyName = "Submit Button used in a Form";

export const UnstyledButtons = args => (
  <React.Fragment>
    <Button>Default</Button>
    <Button color="accent">Accent</Button>
    <Button color="danger">Danger</Button>
  </React.Fragment>
);
