import React from 'react';
import { storiesOf } from '@storybook/react';
import { LeftMenu, MenuItem } from '../src';
import {
  IconHome,
  IconBriefcase,
} from "../src/components/Icons";

storiesOf("LeftMenu", module)
  .add('Collapsible Expanded', () => <LeftMenu title="Content" showMenuButton={true}>
    <MenuItem icon={IconHome} href="#testing" collapsed={true}>Overview</MenuItem>
    <MenuItem icon={IconBriefcase} href="#testing" collapsed={true}>Partners</MenuItem>
  </LeftMenu>)
  .add('Collapsible Collapsed', () => (
    <LeftMenu title="Content">
      <MenuItem icon={IconHome} href="#testing">Overview</MenuItem>
      <MenuItem icon={IconBriefcase} href="#testing">Partners</MenuItem>
    </LeftMenu>
  )) 
