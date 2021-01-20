import React from "react";
import { DataTable, TR, TD, TH, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/DataTable",
  component: DataTable,
};

export const BasicTableUsingARowRenderer = () => (
  <DataTable
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

BasicTableUsingARowRenderer.story = {
  name: "Basic Table using a row renderer",
};

export const ExperimentalAutoRowHeight = () => (
  <DataTable
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

ExperimentalAutoRowHeight.story = {
  name: "Experimental: Auto Row Height",
};

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

ScrollButtonWithFooter.story = {
  name: "Scroll button with footer",
};
