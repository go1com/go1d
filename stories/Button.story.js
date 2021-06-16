import React from "react";
import { Button, SubmitButton } from "../src";

export default {
  title: "Athletic/Buttons/Base",
  component: Button,
  argTypes: {
    backgroundColor: { defaultValue: 'background' }, // only here to reorder before disabled controls
    color: {}, // only here to reorder before disabled controls
    fontWeight: {}, // only here to reorder before disabled controls
    href: { defaultValue: '#root' }, // only here to reorder before disabled controls
    round: {}, // only here to reorder before disabled controls
    size: {}, // only here to reorder before disabled controls
    spinnerIcon: {}, // only here to reorder before disabled controls
    iconColor: { control: { disable: true } },
    sizeStyles: { control: { disable: true } },
    iconName: { control: { disable: true } },
    icon: { control: { disable: true } },
  },
  parameters: {
    docs: {
      description: {
        component: 'This is the base Button component used by ButtonFilled and ButtonMinimal.'
      }
    },
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

export const UnstyledButtons = args => (
  <React.Fragment>
    <Button {...args}>Default</Button>
  </React.Fragment>
);

export const SubmitButtonUsedInAForm = () => (
  <SubmitButton>Create</SubmitButton>
);
SubmitButtonUsedInAForm.storyName = "Submit Button used in a Form";
SubmitButtonUsedInAForm.parameters = { controls: { hideNoControlsWarning: true } }

