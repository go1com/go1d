import React from "react";
import { DataTableSelectable, TR, TD, TH } from "../src";

export default {
  title: "Original Go1d/DataTableSelectable",
  component: DataTableSelectable,
};

export const BasicTableUsingARowRenderer = args => (
  <DataTableSelectable
    {...args}
    rowHeight={55}
    mainAction={(resp) =>
      alert(
        `You did things with ${
          resp.invertSelection
            ? 2 - resp.unselectedItems.length
            : resp.selectedItems.length
        } items`
      )
    }
    mainActionText="Alert"
    total="2 Items"
    rowRenderer={({
      index,
      isScrolling,
      isVisible,
      key,
      parent,
      style,
      checkBox,
    }) => (
      <TR key={key} style={style}>
        {checkBox}
        <TD>{index}</TD>
        <TD>{key}</TD>
      </TR>
    )}
    rowCount={2}
    header={[<TH key="0" text="Index Number" />, <TH key="1" text="Key" />]}
  />
);

BasicTableUsingARowRenderer.storyName = "Basic Table using a row renderer";
