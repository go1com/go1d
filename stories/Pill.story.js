import React from 'react';
import { Pill, View, Text } from '../src';
import filterInheritedProps from '../.storybook/filterInheritedProps.js'

let argTypes = {};
Object.assign(argTypes, filterInheritedProps(Pill))

export default {
  title: 'Original Go1d/Pill',
  component: Pill,
  subcomponents: { View, Text },
  parameters: {},
  argTypes: argTypes
};

export const Default = args => <Pill {...args}>Default</Pill>;
export const Accent = args => <Pill {...args} color='accent'>Accent</Pill>;
export const Success = args => <Pill {...args} color='success'>Success</Pill>;
export const Note = args => <Pill {...args} color='note'>Note</Pill>;
export const Warning = args => <Pill {...args} color='warning'>Warning</Pill>;
export const Danger = args => <Pill {...args} color='danger'>Danger</Pill>;

