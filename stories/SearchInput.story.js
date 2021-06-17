import React from "react";
import { SearchInput } from "../src";

export default {
  title: "Original Go1d/SearchInput",
  component: SearchInput,
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

export const BasicSearchInput = args => (
  <SearchInput
    {...args}
    id="blank"
    onSubmit={() => {}}
  />
);
BasicSearchInput.storyName = "Basic SearchInput";
BasicSearchInput.argTypes = {
  placeholder: {
    defaultValue: "Search for courses, videos, interactive lessons, and more...",
    control: { type: 'text' }
  },
};

export const SearchInputSizes = () => (
  <React.Fragment>
    <SearchInput
      id="blank"
      placeholder="Search for courses, videos, interactive lessons, and more..."
      size="sm"
      value="Small"
      onSubmit={() => {}}
    />
    <br />
    <SearchInput
      id="blank"
      placeholder="Search for courses, videos, interactive lessons, and more..."
      size="md"
      value="Medium"
      onSubmit={() => {}}
    />
    <br />
    <SearchInput
      id="blank"
      placeholder="Search for courses, videos, interactive lessons, and more..."
      size="lg"
      value="Large"
      onSubmit={() => {}}
    />
  </React.Fragment>
);
SearchInputSizes.storyName = "SearchInput Sizes";
SearchInputSizes.parameters = { controls: { hideNoControlsWarning: true } };

export const SearchInputNotClearable = () => (
  <SearchInput
    id="blank"
    placeholder="Search for courses, videos, interactive lessons, and more..."
    size="md"
    value="Medium"
    onSubmit={() => {}}
    clearable={false}
  />
);
SearchInputNotClearable.storyName = "SearchInput not clearable";
SearchInputNotClearable.parameters = { controls: { hideNoControlsWarning: true } };

export const SearchInputWithBehaviourOnClearAndOnSubmit = () => (
  <SearchInput
    id="blank"
    value="Hold me Thrill me Submit me Clear me"
    placeholder="Search for courses, videos, interactive lessons, and more..."
    onClear={() => {
      alert("Back in blank!");
    }}
    onSubmit={(value) => {
      alert(`Value: ${value}`);
    }}
  />
);
SearchInputWithBehaviourOnClearAndOnSubmit.storyName = "SearchInput with behaviour on clear and on submit";
SearchInputWithBehaviourOnClearAndOnSubmit.parameters = { controls: { hideNoControlsWarning: true } };

