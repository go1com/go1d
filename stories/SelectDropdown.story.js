import React from "react";
import { SelectDropdown, View, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/SelectDropdown",
  component: SelectDropdown,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3105%3A14386',
        label: 'We need your help! Please add a page in Figma using the template and update this link.',
      },
    ],
  }
};

export const Base = args => (
  <SelectDropdown
    {...args}
    options={[
      { value: "chocolate", label: "Chocolate" },
      { value: "stawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
    ]}
    onChange={(selection) => window.alert(`You selected ${selection.label}`)}
    handleSearchChange={(search) => console.log(search)}
    searchPlaceholder="Search for ..."
    closeOnSelection={false}
  >
    {({ ref, getToggleButtonProps }) => (
      <View width="70">
        <ButtonFilled {...getToggleButtonProps()} innerRef={ref} color="accent">
          Button
        </ButtonFilled>
      </View>
    )}
  </SelectDropdown>
);
