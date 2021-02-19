import React from "react";
import { Heading } from "../src/";
import { Text } from "../src/";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

// let argTypes = hideInheritedProps({}, Heading);
let argTypes = hideInheritedProps({}, Text);

let customArgTypes = {
  // element: {
  //   name: 'element',
  //   defaultValue: 'h1',
  //   control: { type: 'radio', options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] } },
};

argTypes = Object.assign(argTypes, customArgTypes);

export default {
  title: "Athletic/Heading",
  argTypes: argTypes,
  // component: Heading,
  component: Text,
};

export const Heading1Story = args => (
  <React.Fragment>
    <Heading
      semanticElement="h1"
      visualHeadingLevel="Heading 3"
      color="default"
    >
      Heading 1
    </Heading>
  </React.Fragment>
);

