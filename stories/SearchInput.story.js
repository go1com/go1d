import React from "react";
import { SearchInput } from "../src";

export default {
  title: "Original Go1d/SearchInput",
  component: SearchInput,
};

export const BasicSearchInput = args => (
  <SearchInput
    {...args}
    id="blank"
    placeholder="Search for courses, videos, interactive lessons, and more..."
    onSubmit={() => {}}
  />
);

BasicSearchInput.storyName = "Basic SearchInput";

export const SearchInputSizes = args => (
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

export const SearchInputNotClearable = args => (
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

export const SearchInputWithBehaviourOnClearAndOnSubmit = args => (
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
