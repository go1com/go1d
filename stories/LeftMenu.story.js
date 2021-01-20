import React from "react";
import { LeftMenu, MenuItem } from "../src";
import { IconHome, IconBriefcase } from "../src/components/Icons";

export default {
  title: "Original Go1d/LeftMenu",
};

export const CollapsibleExpanded = () => (
  <LeftMenu title="Content" showMenuButton={true}>
    <MenuItem icon={IconHome} href="#testing" collapsed={true}>
      Overview
    </MenuItem>
    <MenuItem icon={IconBriefcase} href="#testing" collapsed={true}>
      Partners
    </MenuItem>
  </LeftMenu>
);

export const CollapsibleCollapsed = () => (
  <LeftMenu title="Content">
    <MenuItem icon={IconHome} href="#testing">
      Overview
    </MenuItem>
    <MenuItem icon={IconBriefcase} href="#testing">
      Partners
    </MenuItem>
  </LeftMenu>
);
