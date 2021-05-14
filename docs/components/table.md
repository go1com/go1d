---
title: Table
status: ready
releaseVersion: 0.0.25
---

The table component takes in two props, rows and headers and then automatically applies styling. There is a number of defined Table components listed that should be used with Go1d.

## Examples

### Basic table with a header

```.jsx
<Table
  rows={[
    <TR key="0">
        <TD><Text>Cell 0A</Text></TD>
        <TD><Text>Cell 0B</Text></TD>
        <TD><Text>Cell 0C</Text></TD>
        <TD><Text>Cell 0D</Text></TD>
        <TD><Text>Cell 0E</Text></TD>
    </TR>,
    <TR key="1">
        <TD><Text>Cell 1A</Text></TD>
        <TD><Text>Cell 1B</Text></TD>
        <TD><Text>Cell 1C</Text></TD>
        <TD><Text>Cell 1D</Text></TD>
        <TD><Text>Cell 1E</Text></TD>
    </TR>
  ]}
  header={[
    <TH key="0" text="Header A" />,
    <TH key="1" text="Header B" />,
    <TH key="2" text="Header C" />,
    <TH key="3" text="Header D" />,
    <TH key="4" text="Header E" />
  ]}
/>
```

### Basic table with no header

```.jsx
<Table
  rows={[
    <TR key="0">
        <TD><Text>Cell 0A</Text></TD>
        <TD><Text>Cell 0B</Text></TD>
        <TD><Text>Cell 0C</Text></TD>
        <TD><Text>Cell 0D</Text></TD>
        <TD><Text>Cell 0E</Text></TD>
    </TR>,
    <TR key="1">
        <TD><Text>Cell 1A</Text></TD>
        <TD><Text>Cell 1B</Text></TD>
        <TD><Text>Cell 1C</Text></TD>
        <TD><Text>Cell 1D</Text></TD>
        <TD><Text>Cell 1E</Text></TD>
    </TR>
  ]}
/>
```

```!jsx
<ComponentDoc component="TableProps" />
```

# Table Header Cell

The Table Header Cell (TH) is a component that provides the styling for the table header in a Table
## Examples

### Basic table with a header

```.jsx
<Table
  rows={[
    <TR key="0">
        <TD><Text>Cell 0A</Text></TD>
        <TD><Text>Cell 0B</Text></TD>
        <TD><Text>Cell 0C</Text></TD>
        <TD><Text>Cell 0D</Text></TD>
        <TD><Text>Cell 0E</Text></TD>
    </TR>
  ]}
  header={[
    <TH key="0" text="Header A" />,
    <TH key="1" text="Header B" />,
    <TH key="2" text="Header C" />,
    <TH key="3" text="Header D" />,
    <TH key="4" text="Header E" />
  ]}
/>
```

### Basic table with a sortable header

```.jsx
<Table
  rows={[
    <TR key="0">
        <TD><Text>Cell 0A</Text></TD>
        <TD><Text>Cell 0B</Text></TD>
        <TD><Text>Cell 0C</Text></TD>
        <TD><Text>Cell 0D</Text></TD>
        <TD><Text>Cell 0E</Text></TD>
    </TR>
  ]}
  header={[
    <TH key="0" text="Header A" sort="A" currentSort="A" direction="up"/>,
    <TH key="1" text="Header B" sort="B" currentSort="A" direction="up"/>,
    <TH key="2" text="Header C" />,
    <TH key="3" text="Header D" />,
    <TH key="4" text="Header E" />
  ]}
/>
```

```!jsx
<ComponentDoc component={TH} />
```

# Table Row

The Table Row (TR) wraps a set of table cells provided by Go1d. At the moment it supports TD.

## Examples

```.jsx
<Table
  rows={[
    <TR key="0">
        <TD><Text>Cell 0A</Text></TD>
        <TD><Text>Cell 0B</Text></TD>
        <TD><Text>Cell 0C</Text></TD>
        <TD><Text>Cell 0D</Text></TD>
        <TD><Text>Cell 0E</Text></TD>
    </TR>,
    <TR key="1">
        <TD>Cell 1A</TD>
        <TD>Cell 1B</TD>
        <TD>Cell 1C</TD>
        <TD>Cell 1D</TD>
        <TD>Cell 1E</TD>
    </TR>
  ]}
/>
```

```!jsx
<ComponentDoc component={TR} />
```

# Table Cell

The Table Cell (TD) applies the padding and general styling to td elements

## Examples

```.jsx
<Table
  rows={[
    <TR key="0">
        <TD>Cell 0A</TD>
        <TD>Cell 0B</TD>
        <TD>Cell 0C</TD>
        <TD>Cell 0D</TD>
        <TD>Cell 0E</TD>
    </TR>
  ]}
/>
```

```!jsx
<ComponentDoc component={TD} />
```
