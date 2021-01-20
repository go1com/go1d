import React from "react";
import { SearchInput } from "../src";

export default {
  title: "Original Go1d/SearchInput",
};

export const BasicSearchInput = () => (
  <SearchInput
    id="blank"
    placeholder="Search for courses, videos, interactive lessons, and more..."
    onSubmit={() => {}}
  />
);

BasicSearchInput.story = {
  name: "Basic SearchInput",
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

SearchInputSizes.story = {
  name: "SearchInput Sizes",
};

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

SearchInputNotClearable.story = {
  name: "SearchInput not clearable",
};

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

SearchInputWithBehaviourOnClearAndOnSubmit.story = {
  name: "SearchInput with behaviour on clear and on submit",
};
