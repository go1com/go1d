import React from "react";
import { Option } from "../src";
import { IconChevronRight } from "../src/components/Icons";

export default {
  title: "Original Go1d/Option",
  component: Option,
};

export const Base = args => <Option {...args} />;
Base.argTypes = {
  title: { defaultValue: "Title test" },
};

export const AddActionIcon = args => (
  <Option {...args} />
);
AddActionIcon.storyName = "Add actionIcon";
AddActionIcon.argTypes = {
  title: { defaultValue: "Title test" },
  actionIcon: {
    defaultValue: IconChevronRight,
    control: { disable: true },
  },
};

export const AddSpotIcon = () => (
  <Option title="Sector Specific" spotIcon="SectorSpecific" />
);
AddSpotIcon.storyName = "Add spotIcon";
AddSpotIcon.parameters = { controls: { hideNoControlsWarning: true } };

export const WithMeta = () => (
  <Option
    title="Title test"
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5"
  />
);
WithMeta.storyName = "With meta";
WithMeta.parameters = { controls: { hideNoControlsWarning: true } };

export const WithMetaSpotIconActionIcon = () => (
  <Option
    title="Title test"
    spotIcon="SafetyAndCompliance"
    actionIcon={IconChevronRight}
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5"
  />
);
WithMetaSpotIconActionIcon.storyName = "With meta + spotIcon + actionIcon";
WithMetaSpotIconActionIcon.parameters = { controls: { hideNoControlsWarning: true } };

export const WithCheckedAndSpotIcon = () => (
  <Option
    title="Title test"
    spotIcon="SafetyAndCompliance"
    checked={true}
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5"
  />
);
WithCheckedAndSpotIcon.storyName = "With checked and spotIcon";
WithCheckedAndSpotIcon.parameters = { controls: { hideNoControlsWarning: true } };

export const WithCheckedAndDisabled = () => (
  <Option title="Title test" checked={true} disabled={true} />
);
WithCheckedAndDisabled.storyName = "With checked and disabled";
WithCheckedAndDisabled.parameters = { controls: { hideNoControlsWarning: true } };

export const ForceHeight = () => (
  <Option
    title="Title test"
    spotIcon="SafetyAndCompliance"
    actionIcon="ChevronRight"
    lines={1}
  />
);
ForceHeight.storyName = "Force height ";
ForceHeight.parameters = { controls: { hideNoControlsWarning: true } };

