import React from "react";
import { TagToggle, View } from "../src";

export default {
  title: "Original Go1d/TagToggle",
  component: TagToggle,
};

export const _TagToggle = () => (
  <React.Fragment>
    <View flexDirection="row">
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
      <TagToggle label="Mad Skillz" />
    </View>
    <View flexDirection="row" alignItems="center" marginTop={5}>
      <TagToggle label="OK Skillz" size="sm" />
      <TagToggle label="Sick Skillz" size="md" />
      <TagToggle label="Mad Skillz" size="lg" />
    </View>
  </React.Fragment>
);
