import React from 'react'; 
import {storiesOf} from '@storybook/react'; 
import {DataTable,TR,TD,TH, ButtonFilled} from '../src'; 
storiesOf("DataTable", module) 
.add('Basic Table using a row renderer', () => <DataTable
  rowHeight={55}
  total="10 Items"
  rowRenderer={({ index, isScrolling, isVisible, key, parent, style }) => <TR key={key} style={style}>
    <TD>{index}</TD>
    <TD>{key}</TD>
  </TR>}
  rowCount={2}
  header={[
    <TH key="0" text="Index Number" />,
    <TH key="1" text="Key" />,
  ]}
/>) 
.add('Experimental: Auto Row Height', () => <DataTable
  autoRowHeight
  total="10 Items"
  rowRenderer={({ index, isScrolling, isVisible, key, parent, style }) => <TR key={key} style={style}>
    <TD>{index}</TD>
    <TD>{key}</TD>
  </TR>}
  rowCount={3}
  header={[
    <TH key="0" text="Index Number" />,
    <TH key="1" text="Key" />,
  ]}
/>)
.add('Scroll button with footer', () => (
  <DataTable 
    rowHeight={55}
    rowRenderer={({ index, isScrolling, isVisible, key, parent, style }) => (
      <TR key={key} style={style}>
        <TD>{index}</TD>
        <TD>{key}</TD>
      </TR>
    )}
    rowCount={50}
    header={[
      <TH key="0" text="Index Number" />,
      <TH key="1" text="Key" />,
    ]}
    footer={<ButtonFilled margin="auto">Load more</ButtonFilled>}
  />
))