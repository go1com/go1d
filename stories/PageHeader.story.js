import React from "react";
import { PageHeader, Text, ButtonFilled } from "../src";
import { IconEdit } from "../src/components/Icons";

export default {
  title: "Original Go1d/PageHeader",
  component: PageHeader,
  subcomponents: { ButtonFilled, Text },
};

export const LightmodePageHeaderWithMenuButton = () => (
  <PageHeader showMenuButton={false} title="Overview" />
);

LightmodePageHeaderWithMenuButton.story = {
  name: "Lightmode page header with menu button",
};

export const LightmodePageHeaderWithoutMenuButton = () => (
  <PageHeader showMenuButton={true} title="Overview" />
);

LightmodePageHeaderWithoutMenuButton.story = {
  name: "Lightmode page header without menu button",
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

PageHeaderWithBreadcrumbAndSubtitle.story = {
  name: "Page header with breadcrumb and subtitle",
};
