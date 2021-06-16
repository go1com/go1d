import React from "react";
import { Table, TR, TD, Text, TH, Link } from "../src";
import { breakpoints } from '../src/foundations/'

const hideOnSmallScreens = {
  [breakpoints.sm]: {
    display: "none",
  }
};
const matchesSmallScreen = window.matchMedia(breakpoints.sm.replace("@media",""));

export default {
  title: "Original Go1d/Table",
  component: Table,
  argTypes: {
    header: { control: { disable: true } },
    rows: { control: { disable: true } },
  },
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

export const BasicTableWithAHeader = args => (
  <Table
    {...args}
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
      </TR>,
    ]}
    header={[
      <TH key="0" text="Header A" />,
      <TH key="1" text="Header B" />,
      <TH key="2" text="Header C" />,
    ]}
  />
);

BasicTableWithAHeader.storyName = "Basic table with a header";

export const BasicTableWithNoHeader = args => (
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

export const BasicTableWithAHeaderWith1Row = args => (
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

BasicTableWithAHeaderWith1Row.storyName = "Basic table with a header and 1 row";

export const BasicTableWithASortableHeader = args => (
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

export const Example = args => (
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

export const HideColumnsOnSmallScreens = args => (
  <Table
    {...args}
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
        <TD css={hideOnSmallScreens}>
          <Text>Cell 0D</Text>
        </TD>
        <TD css={hideOnSmallScreens}>
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
        <TD css={hideOnSmallScreens}>
          <Text>Cell 1D</Text>
        </TD>
        <TD css={hideOnSmallScreens}>
          <Text>Cell 1E</Text>
        </TD>
      </TR>,
    ]}
    header={[
      <TH key="0" text="Header A" />,
      <TH key="1" text="Header B" />,
      <TH key="2" text="Header C" />,
      <TH key="3" text="Header D" css={hideOnSmallScreens} />,
      <TH key="4" text="Header E" css={hideOnSmallScreens} />,
    ]}
  />
);
HideColumnsOnSmallScreens.storyName = "Hide columns on small screens";

export const BasicResponsiveListAndTable = args => {
  const noteAboutChangeEvents = <Text color="default" element="p" fontSize={2} fontWeight="normal" fontFamily="sansSerif" lineHeight="paragraph">This example reflows content from multiple columns to a single column with repeating headers in cells. It only works on small screens on first load; to respond to changes in viewport size, read <Link color="accent" href="https://css-tricks.com/working-with-javascript-media-queries/" target="_blank" rel="noopener noreferrer">Working with JavaScript Media Queries by Marko Ilic</Link> and <Link color="accent" href="https://stackoverflow.com/questions/56466261/matchmedia-addlistener-marked-as-deprecated-addeventlistener-equivalent" target="_blank" rel="noopener noreferrer">this Stack Overflow post</Link></Text>;

  if (matchesSmallScreen.matches) {
    return (
      <>
        {noteAboutChangeEvents}
        <Table
          {...args}
          rows={[
            <TR key="0">
              <TD>
                <Text>Header A: Cell 0A</Text>
              </TD>
            </TR>,
            <TR key="1">
              <TD>
                <Text>Header B: Cell 0B</Text>
              </TD>
            </TR>,
            <TR key="2">
              <TD>
                <Text>Header C: Cell 0C</Text>
              </TD>
            </TR>,
            <TR key="3">
              <TD>
                <Text>Header D: Cell 0D</Text>
              </TD>
            </TR>,
            <TR key="4">
              <TD>
                <Text>Header E: Cell 0E</Text>
              </TD>
            </TR>,
            <TR key="5">
              <TD>
                <Text>Header A: Cell 1A</Text>
              </TD>
            </TR>,
            <TR key="6">
              <TD>
                <Text>Header B: Cell 1B</Text>
              </TD>
            </TR>,
            <TR key="7">
              <TD>
                <Text>Header C: Cell 1C</Text>
              </TD>
            </TR>,
            <TR key="8">
              <TD>
                <Text>Header D: Cell 1D</Text>
              </TD>
            </TR>,
            <TR key="9">
              <TD>
                <Text>Header E: Cell 1E</Text>
              </TD>
            </TR>,
          ]}
        />
      </>
    )
  }
  else {
    return (
      <>
        {noteAboutChangeEvents}
        <Table
          {...args}
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
      </>
    );
  }
};
BasicResponsiveListAndTable.storyName = "Basic responsive list and table";


export const ExampleWith1Row = args => (
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
