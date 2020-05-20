import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ButtonFilled from "../ButtonFilled";
import Dropdown from "./index";

import IconPlus from "../Icons/Plus";
import IconTrash from "../Icons/Trash";

afterEach(cleanup);

it("renders without crashing without items", () => {
  const mock = jest.fn();
  render(
    <Dropdown itemList={[]} renderFunction={mock} itemToString={mock}>
      {({ ref }) => (
        <ButtonFilled innerRef={ref} marginLeft="auto">
          Stuff
        </ButtonFilled>
      )}
    </Dropdown>
  );
});

it("renders without crashing with items", () => {
  const mock = jest.fn();
  render(
    <Dropdown
      itemList={[
        {
          title: "Add",
          href: "#testing",
          color: "accent",
          icon: IconPlus,
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          icon: IconTrash,
        },
      ]}
      renderFunction={mock}
      itemToString={mock}
    >
      {({ ref }) => (
        <ButtonFilled innerRef={ref} marginLeft="auto">
          Stuff
        </ButtonFilled>
      )}
    </Dropdown>
  );
});

it("renders with defaul render function", () => {
  const { container } = render(
    <Dropdown
      itemList={[
        {
          title: "Add",
          href: "#testing",
          color: "accent",
          icon: IconPlus,
        },
        {
          title: "Delete",
          href: "#testing",
          color: "danger",
          icon: IconTrash,
        },
      ]}
      itemToString={jest.fn()}
    >
      {({ ref }) => (
        <ButtonFilled innerRef={ref} marginLeft="auto">
          Stuff
        </ButtonFilled>
      )}
    </Dropdown>
  );

  // Can click button
  container.querySelector("button")!.click();
});
