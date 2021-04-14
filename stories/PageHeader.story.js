import React from "react";
import { PageHeader, Text, ButtonFilled } from "../src";
import { IconEdit } from "../src/components/Icons";

export default {
  title: "Original Go1d/PageHeader",
  component: PageHeader,
  subcomponents: { ButtonFilled, Text },
};

export const LightmodePageHeaderStory = args => (
  <PageHeader {...args} />
);
LightmodePageHeaderStory.storyName = "Light mode page header";
LightmodePageHeaderStory.argTypes = {
  title: { defaultValue: 'Overview' },
};

export const LightmodePageHeaderWithMenuButton = args => (
  <PageHeader {...args} />
);
LightmodePageHeaderWithMenuButton.storyName = "Light mode page header with menu button";
LightmodePageHeaderWithMenuButton.argTypes = {
  title: { defaultValue: 'Overview' },
  showMenuButton: { defaultValue: true },
};

export const PageHeaderWithBreadcrumbAndSubtitle = () => (
  <PageHeader
    showMenuButton={false}
    title="Portal"
    subtitle={
      <Text element="h4" fontSize={2} color="accent">
        portal.mygo1.com
      </Text>
    }
    breadcrumbHref="#testing"
    breadcrumbTitle="Portals"
  >
    <ButtonFilled icon={IconEdit}>Edit</ButtonFilled>
  </PageHeader>
);
PageHeaderWithBreadcrumbAndSubtitle.storyName = "Page header with breadcrumb and subtitle";
PageHeaderWithBreadcrumbAndSubtitle.parameters = { controls: { hideNoControlsWarning: true } };

