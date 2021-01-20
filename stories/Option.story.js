import React from "react";
import { Option } from "../src";

export default {
  title: "Original Go1d/Option",
  component: Option,
};

export const Base = () => <Option title="Title test" />;
export const AddActionIcon = () => (
  <Option title="Title test" actionIcon="ChevronRight" />
);

AddActionIcon.story = {
  name: "Add actionIcon",
};

export const AddSpotIcon = () => (
  <Option title="Sector Specific" spotIcon="SectorSpecific" />
);

AddSpotIcon.story = {
  name: "Add spotIcon",
};

export const WithMeta = () => (
  <Option
    title="Title test"
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5"
  />
);

WithMeta.story = {
  name: "With meta",
};

export const WithMetaSpotIconActionIcon = () => (
  <Option
    title="Title test"
    spotIcon="SafetyAndCompliance"
    actionIcon="ChevronRight"
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5"
  />
);

WithMetaSpotIconActionIcon.story = {
  name: "With meta + spotIcon + actionIcon",
};

export const WithCheckedAndSpotIcon = () => (
  <Option
    title="Title test"
    spotIcon="SafetyAndCompliance"
    checked={true}
    meta="Meta level test 1, Meta level test 2, Meta level test 3, Meta level test 4, Meta level test 5"
  />
);

WithCheckedAndSpotIcon.story = {
  name: "With checked and spotIcon",
};

export const WithCheckedAndDisabled = () => (
  <Option title="Title test" checked={true} disabled={true} />
);

WithCheckedAndDisabled.story = {
  name: "With checked and disabled",
};

export const ForceHeight = () => (
  <Option
    title="Title test"
    spotIcon="SafetyAndCompliance"
    actionIcon="ChevronRight"
    lines={1}
  />
);

ForceHeight.story = {
  name: "Force height ",
};
