import React from "react";
import { View, ToggleButtonFeature } from "../src";
import {
  IconDanger,
  IconEye,
  IconUser,
  IconStar,
  IconVideo,
} from "../src/components/Icons";


export default {
  title: "Original Go1d/ToggleButtonFeature",
  component: ToggleButtonFeature,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=2691%3A62',
        label: 'See Toggle Button designs in Figma',
      },
    ],
  }
};

export const _ToggleButtonFeature = args => (
  <View flexDirection="row">
    <ToggleButtonFeature {...args} color="danger" icon={IconDanger} marginRight={3}>
      Oh
    </ToggleButtonFeature>
    <ToggleButtonFeature {...args} icon={IconEye} marginRight={3}>
      Hi
    </ToggleButtonFeature>
    <ToggleButtonFeature {...args} color="accent" icon={IconUser}>
      Mark
    </ToggleButtonFeature>
  </View>
);

export const ToggleButtonFeatureInSizes = args => (
  <View flexDirection="row" alignItems="center">
    <ToggleButtonFeature size="sm" icon={IconStar} marginRight={3}>
      Star
    </ToggleButtonFeature>
    <ToggleButtonFeature size="md" icon={IconUser} marginRight={3}>
      User
    </ToggleButtonFeature>
    <ToggleButtonFeature size="lg" icon={IconVideo}>
      Video
    </ToggleButtonFeature>
  </View>
);

ToggleButtonFeatureInSizes.storyName = "Toggle Button Feature in sizes";
