import React from "react";
import { MultiSelect } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, MultiSelect);

export default {
  title: "Original Go1d/MultiSelect",
  argTypes: argTypes,
  component: MultiSelect,
};

export const ACustomMultiSelectComponent = args => (
  <MultiSelect
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
  />
);

ACustomMultiSelectComponent.storyName = "A custom Multi Select component";

export const DisabledMultiSelectField = args => (
  <MultiSelect
    label="Disabled"
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
    disabled={true}
  />
);

export const SearchableMultiSelectField = args => (
  <MultiSelect
    label="Favourite"
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
    searchable={true}
  />
);

export const InitialIsOpenWhenInitialized = args => (
  <MultiSelect
    label="Favourite"
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
    initialIsOpen={true}
  />
);

InitialIsOpenWhenInitialized.storyName = "Initial is open when initialized";

export const MultiSelectWithExtraStyleProps = args => (
  <MultiSelect
    label="Favourite"
    searchable={true}
    defaultValue={["chocolate"]}
    labelPaddingBottom={5}
    clearCSS={{
      height: "50%",
    }}
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
  />
);

MultiSelectWithExtraStyleProps.storyName = "Multi Select with extra style props";
