import React from "react";
import { EmptyState } from "../src";

export default {
  title: "Original Go1d/EmptyState",
  component: EmptyState,
};

export const Base = ({ exampleBodyContent, ...args }) => (
  <EmptyState
    title="No Content"
    actionText="Add Some Content"
    action={() => {}}
    {...args}
  >
    {exampleBodyContent}
  </EmptyState>
);
Base.args = {
  exampleBodyContent: "You have no content."
};
Base.argTypes = {
  exampleBodyContent: {
    name: 'children',
    description: 'This is not a prop, but a slot for React children. You can use children or the `description` prop.',
  },
  description: { control: { disable: true } }
};

export const UseDescription = args => (
  <EmptyState
    title="No Content"
    actionText="Add Some Content"
    action={() => {}}
    description="You have no content"
    {...args}
  />
);
UseDescription.storyName = "Use description prop";

