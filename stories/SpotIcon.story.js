import React from "react";
import { SpotIcon, View } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, SpotIcon);

export default {
  title: "Original Go1d/SpotIcon",
  argTypes: argTypes,
  component: SpotIcon,
};

export const Business = args => <SpotIcon {...args} name="BusinessSkills" />;
export const PersonalDevelopment = args => (
  <SpotIcon name="PersonalDevelopment" />
);

PersonalDevelopment.storyName = "PersonalDevelopment";

export const SectorSpecific = args => <SpotIcon name="SectorSpecific" />;

SectorSpecific.storyName = "SectorSpecific";

export const Technology = args => <SpotIcon name="TechnologySkills" />;

export const SpotIcons = args => (
  <View flexDirection="row">
    <SpotIcon
      name="SafetyAndCompliance"
      background="red"
      size={5}
      backgroundSize={10}
    />
    <SpotIcon name="SafetyAndCompliance" background="red" size={10} />
    <SpotIcon
      name="SafetyAndCompliance"
      background="blue"
      backgroundType="square"
      size={8}
    />
    <SpotIcon
      name="SafetyAndCompliance"
      background="contrast"
      backgroundType="square"
    />
    <SpotIcon
      name="SafetyAndCompliance"
      background="warning"
      backgroundType="square"
    />
    <SpotIcon name="SafetyAndCompliance" background="success" />
    <SpotIcon name="SafetyAndCompliance" background="red" />
    <SpotIcon name="TechnologySkills" background="green" />
    <SpotIcon name="BusinessSkills" background="blue" />
    <SpotIcon name="PersonalDevelopment" background="yellow" />
    <SpotIcon name="SectorSpecific" background="lime" />
    <SpotIcon name="PlusCircle" background="red" />
    <SpotIcon name="Recommendation" background="red" />
  </View>
);

SpotIcons.storyName = "SpotIcons";
