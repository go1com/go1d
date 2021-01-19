import React from 'react';
import { Pill, View, Text } from '../src';
const pdMap = require('../.storybook/react-docs-for-storybook.json');

const type = Pill;

const propertiesDefinition = pdMap[`${type.name}Props`] ? pdMap[`${type.name}Props`].props : pdMap[type.name] ? pdMap[type.name].props : [];

const propsToHide = propertiesDefinition.filter(property => property.inheritedFrom);

let hiddenArgTypes = {};
propsToHide.forEach(prop => hiddenArgTypes[prop.property] = { table: { disable: true }});

let argTypes = {
  color: {
    description: 'This is a prop on Pill',
  },
};

Object.assign(argTypes, hiddenArgTypes)

export default {
  title: 'Original Go1d/Pill',
  component: Pill,
  subcomponents: { View, Text },
  parameters: {},
  argTypes: argTypes
};

export const Default = (args) => <Pill {...args}>Default</Pill>;
export const Accent = (args) => <Pill {...args} color='accent'>Accent</Pill>;
export const Success = (args) => <Pill {...args} color='success'>Success</Pill>;
export const Note = (args) => <Pill {...args} color='note'>Note</Pill>;
export const Warning = (args) => <Pill {...args} color='warning'>Warning</Pill>;
export const Danger = (args) => <Pill {...args} color='danger'>Danger</Pill>;

