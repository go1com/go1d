import React from "react";
import { DataTable, TR, TD, TH, ButtonFilled } from "../src";
import hideInheritedProps from '../.storybook/hideInheritedProps.js'

let argTypes = hideInheritedProps({}, DataTable);

export default {
  title: "Original Go1d/DataTable",
  argTypes: argTypes,
  component: DataTable,
};

export const BasicTableUsingARowRenderer = args => (
  <DataTable
    {...args}
    rowHeight={55}
    total="10 Items"
    rowRenderer={({ index, isScrolling, isVisible, key, parent, style }) => (
      <TR key={key} style={style}>
        <TD>{index}</TD>
        <TD>{key}</TD>
      </TR>
    )}
    rowCount={2}
    header={[<TH key="0" text="Index Number" />, <TH key="1" text="Key" />]}
  />
);

BasicTableUsingARowRenderer.storyName = "Basic Table using a row renderer";

export const ExperimentalAutoRowHeight = args => (
  <DataTable
    {...args}
    autoRowHeight
    total="10 Items"
    rowRenderer={({ index, isScrolling, isVisible, key, parent, style }) => (
      <TR key={key} style={style}>
        <TD>{index}</TD>
        <TD>{key}</TD>
      </TR>
    )}
    rowCount={3}
    header={[<TH key="0" text="Index Number" />, <TH key="1" text="Key" />]}
  />
);

ExperimentalAutoRowHeight.storyName = "Experimental: Auto Row Height";

export const ScrollButtonWithFooter = () => (
  <DataTable
    rowHeight={55}
    rowRenderer={({ index, isScrolling, isVisible, key, parent, style }) => (
      <TR key={key} style={style}>
        <TD>{index}</TD>
        <TD>{key}</TD>
      </TR>
    )}
    rowCount={50}
    header={[<TH key="0" text="Index Number" />, <TH key="1" text="Key" />]}
    footer={<ButtonFilled margin="auto">Load more</ButtonFilled>}
  />
);

ScrollButtonWithFooter.storyName = "Scroll button with footer";
