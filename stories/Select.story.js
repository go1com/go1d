import React from "react";
import { Select } from "../src";

export default {
  title: "Original Go1d/Select",
};

export const ACustomSelectComponent = () => (
  <Select
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
  />
);

ACustomSelectComponent.story = {
  name: "A custom select component",
};

export const DisabledSelectField = () => (
  <Select
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
    disabled={true}
  />
);

export const ClearableSelectField = () => (
  <Select
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
    clearable={true}
  />
);

export const SearchableSelectField = () => (
  <Select
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
    searchable={true}
  />
);

export const SelectFilledWithOptgroups = () => (
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

SelectFilledWithOptgroups.story = {
  name: "Select filled with optgroups",
};

export const SelectFilledWithLabelLessOptgroups = () => (
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

SelectFilledWithLabelLessOptgroups.story = {
  name: "Select filled with label-less optgroups",
};

export const ControlledSelectValue = () => (
  <Select
    value={null}
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
  />
);
