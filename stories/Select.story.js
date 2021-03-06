import React from "react";
import { Select } from "../src";

export default {
  title: "Original Go1d/Select",
  component: Select,
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

export const ACustomSelectComponent = args => (
  <Select
    {...args}
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
  />
);
ACustomSelectComponent.storyName = "A custom select component";

export const DisabledSelectField = args => (
  <Select
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
    disabled={true}
  />
);

export const ClearableSelectField = args => (
  <Select
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
    clearable={true}
  />
);

export const SearchableSelectField = args => (
  <Select
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
    searchable={true}
  />
);

export const SelectFilledWithOptgroups = args => (
  <Select
    options={[
      {
        label: "Icecream",
        optgroup: true,
        values: [
          { value: "chocolate", label: "Chocolate" },
          { value: "stawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" },
        ],
      },
      {
        label: "Cheese",
        optgroup: true,
        values: [
          { value: "brie", label: "Brie" },
          { value: "cheddar", label: "Cheddar" },
          { value: "gorgonzola", label: "Gorgonzola" },
        ],
      },
    ]}
  />
);
SelectFilledWithOptgroups.storyName = "Select filled with optgroups";

export const SelectFilledWithLabelLessOptgroups = args => (
  <Select
    options={[
      {
        label: "",
        optgroup: true,
        values: [
          { value: "chocolate", label: "Chocolate" },
          { value: "stawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" },
        ],
      },
      {
        label: "",
        optgroup: true,
        values: [
          { value: "brie", label: "Brie" },
          { value: "cheddar", label: "Cheddar" },
          { value: "gorgonzola", label: "Gorgonzola" },
        ],
      },
    ]}
  />
);
SelectFilledWithLabelLessOptgroups.storyName = "Select filled with label-less optgroups";

export const ControlledSelectValue = args => (
  <Select
    value={null}
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
  />
);

export const Label = args => (
  <>
    <Select
      size='lg'
      label='Label'
      options={[
        { value: "chocolate", label: "Chocolate" },
        { value: "stawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ]}
    />
    <br />
    <Select
      size='md'
      label='Label'
      options={[
        { value: "chocolate", label: "Chocolate" },
        { value: "stawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ]}
    />
    <br />
    <Select
      size='sm'
      label='Label'
      options={[
        { value: "chocolate", label: "Chocolate" },
        { value: "stawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
      ]}
    />
  </>
);
