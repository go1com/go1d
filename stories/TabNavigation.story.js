import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {TabNavigation,Tab,Pill} from '../src'; 
storiesOf("Original Go1d/TabNavigation", module) 
.add('Multiple tabs with one selected', () => <TabNavigation>
  <Tab href="/overview" text="Overview">
      Overview
  </Tab>
  <Tab href="/content" isSelected={true}>
    Content
  </Tab>
  <Tab href="/import">
    Import
  </Tab>
</TabNavigation>) 
.add('Tab with children', () => <TabNavigation>
  <Tab href="/overview" text="Overview">
      Overview
  </Tab>
  <Tab href="/content" isSelected={true}>
    Content
    <Pill color="note" marginLeft={3}>26</Pill>
  </Tab>
  <Tab href="/import">
    Import
  </Tab>
</TabNavigation>) 
.add('Multiple TabNavigation components stacked', () => <React.Fragment>
    <TabNavigation>
      <Tab href="/overview" text="Overview">
          Overview
      </Tab>
      <Tab href="/content" isSelected={true}>
        Content
        <Pill color="note" marginLeft={3}>26</Pill>
      </Tab>
      <Tab href="/import">
        Import
      </Tab>
    </TabNavigation>
    <TabNavigation>
      <Tab href="/content">
        Content
        <Pill color="note" marginLeft={3}>26</Pill>
      </Tab>
      <Tab href="/reject" isSelected={true}>
        Rejected
        <Pill color="danger" marginLeft={3}>11</Pill>
      </Tab>
      <Tab href="/approved">
        Approved
        <Pill color="success" marginLeft={2}>0</Pill>
      </Tab>
    </TabNavigation>
</React.Fragment>) 
