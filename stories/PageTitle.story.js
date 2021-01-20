import React from "react";
import { PageTitle, PageBody, Text, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/PageTitle",
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
