import React from "react";
import { DataTableSelectable, TR, TD, TH } from "../src";

export default {
  title: "Original Go1d/DataTableSelectable",
  component: DataTableSelectable,
};

export const BasicTableUsingARowRenderer = () => (
  <DataTableSelectable
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
BasicTableUsingARowRenderer.storyName = "Basic Selectable Table using a row renderer";
BasicTableUsingARowRenderer.parameters = { controls: { hideNoControlsWarning: true } };

export const BasicTableUsingAColumnArray = () => (
  <DataTableSelectable
    rowHeight={55}
    mainAction={(resp) => alert(`You did things with ${resp.invertSelection ? 2 - resp.unselectedItems.length : resp.selectedItems.length} items`)}
    mainActionText="Alert"
    total="2 Items"
    rowCount={2}
    columns={[
      {
        headerRenderer: ({key, style}) => <TH style={style} key={key} text="First Column" flexBasis="100%" />,
        cellRenderer: ({key, style}) => <TD flexBasis="100%" style={style} >First Cell {key}</TD>,
      },
      {
        headerRenderer: ({key, style}) => <TH style={style} key={key} text="Second Column" width="100px" />,
        cellRenderer: ({key, style}) => <TD width="100px"style={style}  >Second Cell {key}</TD>,
      },
      {
        headerRenderer: ({key, style}) =>  <TH style={style} key={key} text="Third Column" />,
        cellRenderer: ({key, style}) => <TD style={style}>Third Cell {key}</TD>,
      },
    ]}
  />
);
BasicTableUsingAColumnArray.storyName = "Basic Selectable Table using a columns array";
BasicTableUsingAColumnArray.parameters = { controls: { hideNoControlsWarning: true } };

