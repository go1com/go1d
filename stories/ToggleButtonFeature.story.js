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
};

export const _ToggleButtonFeature = () => (
  <View flexDirection="row">
    <ToggleButtonFeature color="danger" icon={IconDanger} marginRight={3}>
      Oh
    </ToggleButtonFeature>
    <ToggleButtonFeature icon={IconEye} marginRight={3}>
      Hi
    </ToggleButtonFeature>
    <ToggleButtonFeature color="accent" icon={IconUser}>
      Mark
    </ToggleButtonFeature>
  </View>
);

export const ToggleButtonFeatureInSizes = () => (
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
