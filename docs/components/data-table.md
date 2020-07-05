---
title: Data Table
status: ready
releaseVersion: 0.0.40
---

This component renders a table. It can do this in one of two ways. Either by supplying columns (which each include a header and cell renderer), or by supplying a function to render each row out and an array of headers. This uses the TR and TH components from the Table component.

## Examples

### Basic Table using a row renderer and header array

Supply a header array and it will be put at the top of the table. Supply a row renderer and it will be used to render out the rows for the table. 

```.jsx
<DataTable
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
/>
```

### Basic Table using a column array

Supply an array of columns and the header and cell renderer will be used to create the table

```.jsx
<DataTable
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
```

### Basic Table using a column array with dynamic column control

Supply an array of columns along with dynamicColumns == true, and the user can control which columns are showing on screen. With this approach, you also need to supply a menuEntryRenderer within each of the columns entries which will be used in the selection menu. 

```.jsx
<DataTable
  rowHeight={55}
  total="10 Items"
  dynamicColumns={true}
  columns={[
    { 
      displayOnOpening: true,
      columnIdentifier: "first-column", 
      columnSelectorLabel: "First Item",
      headerRenderer: ({key}) => <TH key={key} text="First Column"/>,
      cellRenderer: ({key}) => <TD>First Cell {key}</TD>,
    },
    {
      displayOnOpening: true,
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
```

### Experimental: Auto Row Height

Setting auto row height to true means you dont have to set the row height manually. However, this may produce unexpected results
```.jsx
<DataTable
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
/>
```

```!jsx
<ComponentDoc component="DataTableProps" />
```