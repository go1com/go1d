import React from 'react';
import { IFrame } from '../src';

export default {
  title: 'Original Go1d/IFrame',
  component: IFrame,
  parameters: {
    happo: false,
  },
};

const Template = (args) => (
  <div style={{ width: '100%' }}>
    <IFrame url="https://go1.com" {...args} />
  </div>
);

export const Main = Template.bind({});
Main.args = {
  url: "https://go1.com",
};
Main.parameters = {
  docs: {
    description: {
      story: 'IFrame with url is go1.com',
    },
  },
};

