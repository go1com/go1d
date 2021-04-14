import React from "react";
import { SpotIcon, View } from "../src";

export default {
  title: "Athletic/SpotIcon",
  component: SpotIcon,
};

export const Business = args => <SpotIcon {...args} name="BusinessSkills" />;
Business.storyName = "Business Skills";
Business.parameters = { controls: { hideNoControlsWarning: true } };

export const PersonalDevelopment = args => (
  <SpotIcon name="PersonalDevelopment" />
);
PersonalDevelopment.storyName = "Personal Development";
PersonalDevelopment.parameters = { controls: { hideNoControlsWarning: true } };

export const SectorSpecific = args => <SpotIcon name="SectorSpecific" />;
SectorSpecific.storyName = "Sector Specific";
SectorSpecific.parameters = { controls: { hideNoControlsWarning: true } };

export const Technology = args => <SpotIcon name="TechnologySkills" />;
Technology.storyName = "Technology Skills";
Technology.parameters = { controls: { hideNoControlsWarning: true } };

export const SpotIcons = () => (
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
SpotIcons.parameters = { controls: { hideNoControlsWarning: true } };

