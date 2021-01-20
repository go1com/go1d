import React from "react";
import { SpotIcon, View } from "../src";

export default {
  title: "Original Go1d/SpotIcon",
};

export const Business = () => <SpotIcon name="BusinessSkills" />;
export const PersonalDevelopment = () => (
  <SpotIcon name="PersonalDevelopment" />
);

PersonalDevelopment.story = {
  name: "PersonalDevelopment",
};

export const SectorSpecific = () => <SpotIcon name="SectorSpecific" />;

SectorSpecific.story = {
  name: "SectorSpecific",
};

export const Technology = () => <SpotIcon name="TechnologySkills" />;

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

SpotIcons.story = {
  name: "SpotIcons",
};
