import React from "react";
import { PageHeader, Text, ButtonFilled } from "../src";
import { IconEdit } from "../src/components/Icons";

export default {
  title: "Original Go1d/PageHeader",
  component: PageHeader,
  subcomponents: { ButtonFilled, Text },
};

export const LightmodePageHeaderWithMenuButton = args => (
  <PageHeader {...args} showMenuButton={false} title="Overview" />
);

LightmodePageHeaderWithMenuButton.storyName = "Lightmode page header with menu button";

export const LightmodePageHeaderWithoutMenuButton = args => (
  <PageHeader showMenuButton={true} title="Overview" />
);

LightmodePageHeaderWithoutMenuButton.storyName = "Lightmode page header without menu button";

export const PageHeaderWithBreadcrumbAndSubtitle = args => (
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
