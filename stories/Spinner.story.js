import React from "react";
import { Spinner } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, Spinner);

export default {
  title: "Athletic/Spinner",
  argTypes: argTypes,
  component: Spinner,
};

export const _Spinner = (args) => <Spinner {...args} size={5} />;
