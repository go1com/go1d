import React from "react";
import { Table, TR, TD, Text, TH } from "../src";

export default {
  title: "Original Go1d/Table",
  component: Table,
};

export const BasicTableWithAHeader = () => (
  <Table
    rows={[
      <TR key="0">
        <TD>
          <Text>Cell 0A</Text>
        </TD>
        <TD>
          <Text>Cell 0B</Text>
        </TD>
        <TD>
          <Text>Cell 0C</Text>
        </TD>
        <TD>
          <Text>Cell 0D</Text>
        </TD>
        <TD>
          <Text>Cell 0E</Text>
        </TD>
      </TR>,
      <TR key="1">
        <TD>
          <Text>Cell 1A</Text>
        </TD>
        <TD>
          <Text>Cell 1B</Text>
        </TD>
        <TD>
          <Text>Cell 1C</Text>
        </TD>
        <TD>
          <Text>Cell 1D</Text>
        </TD>
        <TD>
          <Text>Cell 1E</Text>
        </TD>
      </TR>,
    ]}
    header={[
      <TH key="0" text="Header A" />,
      <TH key="1" text="Header B" />,
      <TH key="2" text="Header C" />,
      <TH key="3" text="Header D" />,
      <TH key="4" text="Header E" />,
    ]}
  />
);

BasicTableWithAHeader.storyName = "Basic table with a header";

export const BasicTableWithNoHeader = () => (
  <Table
    rows={[
      <TR key="0">
        <TD>
          <Text>Cell 0A</Text>
        </TD>
        <TD>
          <Text>Cell 0B</Text>
        </TD>
        <TD>
          <Text>Cell 0C</Text>
        </TD>
        <TD>
          <Text>Cell 0D</Text>
        </TD>
        <TD>
          <Text>Cell 0E</Text>
        </TD>
      </TR>,
      <TR key="1">
        <TD>
          <Text>Cell 1A</Text>
        </TD>
        <TD>
          <Text>Cell 1B</Text>
        </TD>
        <TD>
          <Text>Cell 1C</Text>
        </TD>
        <TD>
          <Text>Cell 1D</Text>
        </TD>
        <TD>
          <Text>Cell 1E</Text>
        </TD>
      </TR>,
    ]}
  />
);

BasicTableWithNoHeader.storyName = "Basic table with no header";

export const _BasicTableWithAHeader = () => (
  <Table
    rows={[
      <TR key="0">
        <TD>
          <Text>Cell 0A</Text>
        </TD>
        <TD>
          <Text>Cell 0B</Text>
        </TD>
        <TD>
          <Text>Cell 0C</Text>
        </TD>
        <TD>
          <Text>Cell 0D</Text>
        </TD>
        <TD>
          <Text>Cell 0E</Text>
        </TD>
      </TR>,
    ]}
    header={[
      <TH key="0" text="Header A" />,
      <TH key="1" text="Header B" />,
      <TH key="2" text="Header C" />,
      <TH key="3" text="Header D" />,
      <TH key="4" text="Header E" />,
    ]}
  />
);

_BasicTableWithAHeader.storyName = "Basic table with a header";

export const BasicTableWithASortableHeader = () => (
  <Table
    rows={[
      <TR key="0">
        <TD>
          <Text>Cell 0A</Text>
        </TD>
        <TD>
          <Text>Cell 0B</Text>
        </TD>
        <TD>
          <Text>Cell 0C</Text>
        </TD>
        <TD>
          <Text>Cell 0D</Text>
        </TD>
        <TD>
          <Text>Cell 0E</Text>
        </TD>
      </TR>,
    ]}
    header={[
      <TH key="0" text="Header A" sort="A" currentSort="A" direction="up" />,
      <TH key="1" text="Header B" sort="B" currentSort="A" direction="up" />,
      <TH key="2" text="Header C" />,
      <TH key="3" text="Header D" />,
      <TH key="4" text="Header E" />,
    ]}
  />
);

BasicTableWithASortableHeader.storyName = "Basic table with a sortable header";

export const Examples = () => (
  <Table
    rows={[
      <TR key="0">
        <TD>
          <Text>Cell 0A</Text>
        </TD>
        <TD>
          <Text>Cell 0B</Text>
        </TD>
        <TD>
          <Text>Cell 0C</Text>
        </TD>
        <TD>
          <Text>Cell 0D</Text>
        </TD>
        <TD>
          <Text>Cell 0E</Text>
        </TD>
      </TR>,
      <TR key="1">
        <TD>Cell 1A</TD>
        <TD>Cell 1B</TD>
        <TD>Cell 1C</TD>
        <TD>Cell 1D</TD>
        <TD>Cell 1E</TD>
      </TR>,
    ]}
  />
);

export const _Examples = () => (
  <Table
    rows={[
      <TR key="0">
        <TD>Cell 0A</TD>
        <TD>Cell 0B</TD>
        <TD>Cell 0C</TD>
        <TD>Cell 0D</TD>
        <TD>Cell 0E</TD>
      </TR>,
    ]}
  />
);
