import React from "react";
import { OptionList, Option } from "../src";

export default {
  title: "Original Go1d/OptionList",
};

export const Base = () => (
  <OptionList>
    <Option title="This is a test title" />
    <Option title="This is a test title" />
    <Option title="This is a test title" />
  </OptionList>
);

export const WithOptions = () => (
  <OptionList>
    <Option
      title="This is a test title"
      meta="Test meta"
      spotIcon="SafetyAndCompliance"
      actionIcon="ChevronRight"
      checked={true}
    />
    <Option
      title="This is a test title"
      spotIcon="SafetyAndCompliance"
      actionIcon="ChevronRight"
      checked={true}
      disabled={true}
    />
    <Option title="This is a test title" actionIcon="ChevronRight" />
    <Option title="This is a test title" lines={1} />
  </OptionList>
);

WithOptions.story = {
  name: "With options",
};

export const TopLevelTopics = () => (
  <OptionList>
    <Option
      title="Safety and Compliance"
      meta="Test meta"
      spotIcon="SafetyAndCompliance"
      actionIcon="ChevronRight"
      checked={true}
    />
    <Option
      title="Technology Skills"
      meta="Test meta"
      spotIcon="TechnologySkills"
      actionIcon="ChevronRight"
      checked={true}
    />
    <Option
      title="Persona lDevelopment"
      meta="Test meta"
      spotIcon="PersonalDevelopment"
      actionIcon="ChevronRight"
      checked={true}
    />
    <Option
      title="Business Skills"
      meta="Test meta"
      spotIcon="BusinessSkills"
      actionIcon="ChevronRight"
      checked={true}
    />
    <Option
      title="Sector Specific"
      meta="Test meta"
      spotIcon="SectorSpecific"
      actionIcon="ChevronRight"
      checked={true}
    />
  </OptionList>
);

TopLevelTopics.story = {
  name: "Top level topics",
};
