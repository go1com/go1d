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
Accent.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Success = () => <Pill fontWeight="medium" color='success'>Success</Pill>;
Success.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Note = () => <Pill fontWeight="medium" color='note'>Note</Pill>;
Note.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Warning = () => <Pill fontWeight="medium" color='warning'>Warning</Pill>;
Warning.parameters = {
  controls: { hideNoControlsWarning: true },
};

export const Danger = () => <Pill fontWeight="medium" color='danger'>Danger</Pill>;
Danger.parameters = {
  controls: { hideNoControlsWarning: true },
};

