import React from "react";
import { LeftMenu, MenuItem } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'
import { IconHome, IconBriefcase } from "../src/components/Icons";

let argTypes = hideInheritedProps({}, LeftMenu);

export default {
  title: "Original Go1d/LeftMenu",
  argTypes: argTypes,
  component: LeftMenu,
};

export const CollapsibleExpanded = args => (
  <LeftMenu {...args} title="Content" showMenuButton={true}>
    <MenuItem icon={IconHome} href="#testing" collapsed={true}>
      Overview
    </MenuItem>
    <MenuItem icon={IconBriefcase} href="#testing" collapsed={true}>
      Partners
    </MenuItem>
  </LeftMenu>
);

export const CollapsibleCollapsed = args => (
  <LeftMenu {...args} title="Content">
    <MenuItem icon={IconHome} href="#testing">
      Overview
    </MenuItem>
    <MenuItem icon={IconBriefcase} href="#testing">
      Partners
    </MenuItem>
  </LeftMenu>
);
