import React from "react";
import { PageTitle, PageBody, Text, ButtonFilled } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, PageTitle);

export default {
  title: "Original Go1d/PageTitle",
  argTypes: argTypes,
  component: PageTitle,
  subcomponents: { PageBody, ButtonFilled, Text },
};

export const LightmodePageTitle = args => (
  <PageBody>
    <PageTitle {...args} title="The Page Title" />
    <Text>This is standard body content text.</Text>
  </PageBody>
);

LightmodePageTitle.storyName = "Lightmode page title";

export const LightmodePageTitleWithChildren = args => (
  <PageBody>
    <PageTitle {...args} title="The Page Title">
      <ButtonFilled>I'm a button</ButtonFilled>
    </PageTitle>
    <Text>This is standard body content text.</Text>
  </PageBody>
);

LightmodePageTitleWithChildren.storyName = "Lightmode page title with children";
