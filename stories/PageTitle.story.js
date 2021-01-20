import React from "react";
import { PageTitle, PageBody, Text, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/PageTitle",
};

export const LightmodePageTitle = () => (
  <PageBody>
    <PageTitle title="The Page Title" />
    <Text>This is standard body content text.</Text>
  </PageBody>
);

LightmodePageTitle.story = {
  name: "Lightmode page title",
};

export const LightmodePageTitleWithChildren = () => (
  <PageBody>
    <PageTitle title="The Page Title">
      <ButtonFilled>I'm a button</ButtonFilled>
    </PageTitle>
    <Text>This is standard body content text.</Text>
  </PageBody>
);

LightmodePageTitleWithChildren.story = {
  name: "Lightmode page title with children",
};
