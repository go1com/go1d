import React from "react";
import { Spinner } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Spinner);

let customArgTypes = {
  size: {
    name: 'size',
    defaultValue: '2',
    control: { type: 'range', min: 1, max: 10 } },
};

argTypes = Object.assign(argTypes, customArgTypes);

export default {
  title: "Athletic/Spinner",
  argTypes: argTypes,
  component: Spinner,
};

export const Main = (args) => <Spinner {...args} />;
Main.storyName = "Main";
