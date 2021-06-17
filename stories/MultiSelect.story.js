import React from "react";
import { MultiSelect } from "../src";

export default {
  title: "Original Go1d/MultiSelect",
  component: MultiSelect,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=4982%3A1',
        label: 'See Select designs in Figma',
      },
    ],
  }
};

export const ACustomMultiSelectComponent = args => (
  <MultiSelect
    {...args}
  />
);
ACustomMultiSelectComponent.storyName = "A custom Multi Select component";
ACustomMultiSelectComponent.argTypes = {
  options: { defaultValue: [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]},
};

export const DisabledMultiSelectField = () => (
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
DisabledMultiSelectField.parameters = { controls: { hideNoControlsWarning: true } };

export const SearchableMultiSelectField = () => (
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
SearchableMultiSelectField.parameters = { controls: { hideNoControlsWarning: true } };

export const InitialIsOpenWhenInitialized = () => (
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
InitialIsOpenWhenInitialized.parameters = { controls: { hideNoControlsWarning: true } };

export const MultiSelectWithExtraStyleProps = () => (
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
MultiSelectWithExtraStyleProps.parameters = { controls: { hideNoControlsWarning: true } };

