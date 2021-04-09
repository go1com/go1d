import React from 'react';
import { Pill, View, Text } from '../src';

export default {
  title: 'Athletic/Pill',
  component: Pill,
  subcomponents: { View, Text },
  argTypes: {
    fontWeight: {
      defaultValue: 'medium',
      options: ["light", "normal", "medium", "semibold", "bold"],
    }
  },
};

export const Main = args => <Pill {...args}>Default</Pill>;

export const Accent = () => <Pill fontWeight="medium" color='accent'>Accent</Pill>;

export const Success = () => <Pill fontWeight="medium" color='success'>Success</Pill>;

export const Note = () => <Pill fontWeight="medium" color='note'>Note</Pill>;

export const Warning = () => <Pill fontWeight="medium" color='warning'>Warning</Pill>;

export const Danger = () => <Pill fontWeight="medium" color='danger'>Danger</Pill>;

