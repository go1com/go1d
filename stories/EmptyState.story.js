import React from "react";
import { EmptyState } from "../src";

export default {
  title: "Original Go1d/EmptyState",
};

export const Base = () => (
  <EmptyState
    title="No Content"
    actionText="Add Some Content"
    action={() => {}}
  >
    You have no content
  </EmptyState>
);
