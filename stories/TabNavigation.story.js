import React from "react";
import { TabNavigation, Tab, Pill } from "../src";

export default {
  title: "Original Go1d/TabNavigation",
  component: TabNavigation,
};

export const MultipleTabsWithOneSelected = args => (
  <TabNavigation {...args}>
    <Tab href="/overview" text="Overview">
      Overview
    </Tab>
    <Tab href="/content" isSelected={true}>
      Content
    </Tab>
    <Tab href="/import">Import</Tab>
  </TabNavigation>
);

MultipleTabsWithOneSelected.storyName = "Multiple tabs with one selected";

export const TabWithChildren = args => (
  <TabNavigation>
    <Tab href="/overview" text="Overview">
      Overview
    </Tab>
    <Tab href="/content" isSelected={true}>
      Content
      <Pill color="note" marginLeft={3}>
        26
      </Pill>
    </Tab>
    <Tab href="/import">Import</Tab>
  </TabNavigation>
);

TabWithChildren.storyName = "Tab with children";

export const MultipleTabNavigationComponentsStacked = args => (
  <React.Fragment>
    <TabNavigation>
      <Tab href="/overview" text="Overview">
        Overview
      </Tab>
      <Tab href="/content" isSelected={true}>
        Content
        <Pill color="note" marginLeft={3}>
          26
        </Pill>
      </Tab>
      <Tab href="/import">Import</Tab>
    </TabNavigation>
    <TabNavigation>
      <Tab href="/content">
        Content
        <Pill color="note" marginLeft={3}>
          26
        </Pill>
      </Tab>
      <Tab href="/reject" isSelected={true}>
        Rejected
        <Pill color="danger" marginLeft={3}>
          11
        </Pill>
      </Tab>
      <Tab href="/approved">
        Approved
        <Pill color="success" marginLeft={2}>
          0
        </Pill>
      </Tab>
    </TabNavigation>
  </React.Fragment>
);

MultipleTabNavigationComponentsStacked.storyName = "Multiple TabNavigation components stacked";
