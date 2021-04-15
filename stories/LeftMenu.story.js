import React from "react";
import { LeftMenu, MenuItem } from "../src";
import { IconHome, IconBriefcase } from "../src/components/Icons";

export default {
  title: "Original Go1d/LeftMenu",
  component: LeftMenu,
};

export const CollapsibleExpanded = args => (
  <LeftMenu {...args}>
    <MenuItem icon={IconHome} href="#testing" collapsed={true}>
      Overview
    </MenuItem>
    <MenuItem icon={IconBriefcase} href="#testing" collapsed={true}>
      Partners
    </MenuItem>
  </LeftMenu>
);
CollapsibleExpanded.argTypes = {
  title: { defaultValue: 'Content', },
  showMenuButton: { defaultValue: true, },
};

export const CollapsibleCollapsed = args => (
  <LeftMenu {...args}>
    <MenuItem icon={IconHome} href="#testing">
      Overview
    </MenuItem>
    <MenuItem icon={IconBriefcase} href="#testing">
      Partners
    </MenuItem>
  </LeftMenu>
);
CollapsibleCollapsed.argTypes = {
  title: { defaultValue: 'Content', },
};
