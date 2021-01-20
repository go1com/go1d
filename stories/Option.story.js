import React from "react";
import { Option } from "../src";

export default {
  title: "Original Go1d/Option",
  component: Option,
};

export const Base = args => <Option {...args} title="Title test" />;
export const AddActionIcon = args => (
  <Option {...args} title="Title test" actionIcon="ChevronRight" />
);

AddActionIcon.storyName = "Add actionIcon";

export const AddSpotIcon = args => (
  <Option {...args} title="Sector Specific" spotIcon="SectorSpecific" />
);

AddSpotIcon.storyName = "Add spotIcon";

export const WithMeta = args => (
  <Option
    {...args}
    title="Title test"
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5"
  />
);

WithMeta.storyName = "With meta";

export const WithMetaSpotIconActionIcon = args => (
  <Option
    {...args}
    title="Title test"
    spotIcon="SafetyAndCompliance"
    actionIcon="ChevronRight"
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5"
  />
);

WithMetaSpotIconActionIcon.storyName = "With meta + spotIcon + actionIcon";

export const WithCheckedAndSpotIcon = args => (
  <Option
    {...args}
    title="Title test"
    spotIcon="SafetyAndCompliance"
    checked={true}
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5"
  />
);

WithCheckedAndSpotIcon.storyName = "With checked and spotIcon";

export const WithCheckedAndDisabled = args => (
  <Option {...args} title="Title test" checked={true} disabled={true} />
);

WithCheckedAndDisabled.storyName = "With checked and disabled";

export const ForceHeight = args => (
  <Option
    {...args}
    title="Title test"
    spotIcon="SafetyAndCompliance"
    actionIcon="ChevronRight"
    lines={1}
  />
);

ForceHeight.storyName = "Force height ";
