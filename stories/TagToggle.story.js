import React from "react";
import { TagToggle, View } from "../src";

export default {
  title: "Athletic/TagToggle",
  component: TagToggle,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=4474%3A135',
        label: 'See Tag Toggle designs in Figma',
      },
    ],
  }
};

export const _TagToggle = args => (
  <React.Fragment>
    <View flexDirection="row">
      <TagToggle {...args} label="Mad Skillz" />
      <TagToggle {...args} label="Mad Skillz" />
      <TagToggle {...args} label="Mad Skillz" />
      <TagToggle {...args} label="Mad Skillz" />
    </View>
    <View flexDirection="row" alignItems="center" marginTop={5}>
      <TagToggle {...args} label="OK Skillz" size="sm" />
      <TagToggle {...args} label="Sick Skillz" size="md" />
      <TagToggle {...args} label="Mad Skillz" size="lg" />
    </View>
  </React.Fragment>
);
