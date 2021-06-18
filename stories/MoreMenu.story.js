import React from "react";
import { MoreMenu, Table, TR, TD } from "../src";
import { IconPlus, IconTrash } from "../src/components/Icons";

export default {
  title: "Athletic/Buttons/More Menu (overflow menu)",
  component: MoreMenu,
  argTypes: {
    loader: { defaultValue: <div>Loading...</div>}
  },
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=2691%3A62',
        label: 'See Button designs in Figma',
      },
    ],
  }
};

const itemList = [
  {
    title: "Add",
    href: "#testing",
    icon: IconPlus,
    iconColor: "muted"
  },
  {
    title: "Delete",
    href: "#testing",
    color: "danger",
    icon: IconTrash,
    iconColor: "danger",
    target:"_blank",
    rel:"noopener noreferrer",
  },
];

export const Main = args => (
  <MoreMenu
    itemList={itemList}
    {...args}
  />
);

export const MoreMenuWithoutButtonFilled = args => (
  <MoreMenu
    itemList={itemList}
    {...args}
  />
);
MoreMenuWithoutButtonFilled.storyName = 'More Menu without ButtonFilled';
MoreMenuWithoutButtonFilled.argTypes = {
  isButtonFilled: { defaultValue: false },
};

export const MoreMenuInATableRow = args => (
  <Table
    rows={[
      <TR key={0}>
        <TD flexBasis="30%">Cell 00</TD>
        <TD flexBasis="30%">Cell 01</TD>
        <TD flexBasis="30%">Cell 02</TD>
        <TD flexBasis="10%">
          <MoreMenu
            isButtonFilled={false}
            itemList={itemList}
            {...args}
          />
        </TD>
      </TR>
    ]}>
  </Table>
);

