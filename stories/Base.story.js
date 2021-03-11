import React from "react";
import { Base } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Base);

export default {
  title: "Athletic/Base",
  argTypes: argTypes,
  component: Base,
  parameters: {
    docs: {
      description: {
        component: 'The base of every component. It should only be used to build out GO1D components.'
      }
    },
  }
};

export const BaseStory = args => (
  <Base {...args}>I am Base</Base>
);

BaseStory.storyName = "Base";
