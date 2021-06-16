import React from 'react';
import { DurationInput } from '../src';

export default {
  title: 'Original Go1d/Duration Input',
  component: DurationInput,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3105%3A14386',
        label: 'We need your help! Please add a page in Figma using the template and update this link.',
      },
    ],
  }
};

const Template = (args) => <DurationInput {...args} />;
export const Main = Template.bind({});
Main.args = {
  name: "test",
  value: "1660",
};
