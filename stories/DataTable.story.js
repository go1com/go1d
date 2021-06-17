import React from "react";
import { DataTable, TR, TD, TH, ButtonFilled } from "../src";

export default {
  title: "Original Go1d/DataTable",
  component: DataTable,
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=5892%3A37607',
        label: 'See Table designs in Figma',
      },
    ],
  }
};

export const BasicTable = args => (
  <DataTable
    {...args}
    rowRenderer={({ index, isScrolling, isVisible, key, parent, style }) => (
      <TR key={key} style={style}>
        <TD>{index}</TD>
        <TD>{key}</TD>
      </TR>
    )}
    header={[<TH key="0-key" text="Index Number" />, <TH key="1-key" text="Key" />]}
  />
);
BasicTable.storyName = "Basic Table";
BasicTable.args = {
  rowHeight: 55,
  rowCount: 2,
}

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
BasicTableUsingARowRenderer.parameters = {
  docs: {
    description: {
      story: 'Supply a header array and it will be put at the top of the table. Supply a row renderer and it will be used to render out the rows for the table.',
    },
  },
};

export const BasicTableUsingAColumnRenderer = args => (
  <DataTable
    {...args}
    rowHeight={55}
    total="10 Items"
    columns={[
      { 
        headerRenderer: ({key}) => <TH key={key} text="First Column" flexBasis="100%" />,
        cellRenderer: ({key}) => <TD flexBasis="100%">First Cell {key}</TD>,
      },
      {
        headerRenderer: ({key}) => <TH key={key} text="Second Column" width="100px" />,
        cellRenderer: ({key}) => <TD width="100px">Second Cell {key}</TD>,
      },
      {
        headerRenderer: ({key}) =>  <TH key={key} text="Third Column" />,
        cellRenderer: ({key}) => <TD>Third Cell {key}</TD>,
      },
    ]}
    rowCount={2}
  />
);
BasicTableUsingAColumnRenderer.storyName = "Basic Table using a column array";
BasicTableUsingAColumnRenderer.parameters = {
  docs: {
    description: {
      story: 'Supply an array of columns and the header and cell renderer will be used to create the table',
    },
  },
};

export const BasicTableUsingAColumnWithDynamicControl = args => (
  <DataTable
    rowHeight={55}
    total="10 Items"
    dynamicColumns={true}
    initialColumns={["first-column", "second-column"]}
    columns={[
      {
        columnIdentifier: "first-column", 
        columnSelectorLabel: "First Item",
        headerRenderer: ({key}) => <TH key={key} text="First Column"/>,
        cellRenderer: ({key}) => <TD>First Cell {key}</TD>,
      },
      {
        columnIdentifier: "second-column", 
        columnSelectorLabel: "Second Item",
        headerRenderer: ({key}) => <TH key={key} text="Second Column"/>,
        cellRenderer: ({key}) => <TD>Second Cell {key}</TD>,
      },
      {
        columnIdentifier: "third-column", 
        columnSelectorLabel: "Third Item",
        headerRenderer: ({key}) =>  <TH key={key} text="Third Column" />,
        cellRenderer: ({key}) => <TD>Third Cell {key}</TD>,
      },
    ]}
    rowCount={2}
  />
);
BasicTableUsingAColumnWithDynamicControl.storyName = "Basic Table using a column array with dynamic column control";
BasicTableUsingAColumnWithDynamicControl.parameters = {
  docs: {
    description: {
      story: 'Supply an array of columns along with dynamicColumns == true, and the user can control which columns are showing on screen. With this approach, you also need to supply a menuEntryRenderer within each of the columns entries which will be used in the selection menu.',
    },
  },
};

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
ExperimentalAutoRowHeight.parameters = {
  docs: {
    description: {
      story: 'Setting auto row height to true means you dont have to set the row height manually. However, this may produce unexpected results',
    },
  },
};

export const ScrollButtonWithFooter = args => (
  <DataTable
    {...args}
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
