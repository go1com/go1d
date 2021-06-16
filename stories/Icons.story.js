import React from "react";
import { View, Text } from "../src/";
import { IconGo1Logo, IconSuccess } from '../src/components/Icons';
import AllIcons from '../docs/_src/components/AllIcons.js';

export default {
  title: "Athletic/Icons",
  parameters: {
    docs: {
      description: {
        component: 'Each `<Icon* />` component uses the `<IconBase />` component.'
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
  component: IconSuccess,
  argTypes: {
    size: {
      control: { type: 'range', min: 1, max: 10 },
      defaultValue: "4",
      description: 'Define size with the size prop. This uses font sizing to determine the size, so the value is the index on the font size array that you require.',
    },
    color: {
      description: 'Supply a color by the color prop. The available colors can be found in the Colors section.',
    }
  },
};

export const Main = args => (
  <React.Fragment>
    <IconSuccess {...args} />
  </React.Fragment>
);
Main.args = {
  size: 4,
  color: "accent",
}

export const Size = args => (
  <React.Fragment>
    <IconSuccess size={4} {...args} />
  </React.Fragment>
);
Size.storyName = "Icon with size";
Size.args = {
  size: 4,
}

export const Color = args => (
  <React.Fragment>
    <IconGo1Logo color="accent" size={7} />
  </React.Fragment>
);
Color.storyName = "Icon with color";
Color.args = {
  color: "accent",
}

export const AllIconsStory = () => (
  <React.Fragment>
    <Text>This is an exhaustive list of all icons currently in the system:</Text>
    <AllIcons />
  </React.Fragment>
);
AllIconsStory.storyName = "All Icons";
AllIconsStory.parameters = { controls: { hideNoControlsWarning: true } };

