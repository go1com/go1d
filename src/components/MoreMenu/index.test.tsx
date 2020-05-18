import * as React from "react";
import { cleanup, render } from "react-testing-library";
import MoreMenu from "./index";

import IconPlus from "../Icons/Plus";
import IconTrash from "../Icons/Trash";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <MoreMenu
      itemList={[
        {
          title: "Add",
          href: "#testing",
          color: "accent",
          icon: IconPlus,
        },
        {
          title: "Delete",
          onClick: jest.fn(),
          color: "danger",
          icon: IconTrash,
        },
      ]}
    />
  );
});

it("should show loader", () => {
  const { getByText, getByTestId } = render(
    <MoreMenu
      loading={true}
      loader={<div>Loading...</div>}
      isButtonFilled={false}
      itemList={[
        {
          title: "Add",
          href: "#testing",
          color: "accent",
          icon: IconPlus,
        },
        {
          title: "Delete",
          onClick: jest.fn(),
          color: "danger",
          icon: IconTrash,
        },
      ]}
    />
  );

  const toggle = getByTestId("toggle");

  const clickEvent = document.createEvent("MouseEvents");
  clickEvent.initEvent("click", true, true);
  toggle.dispatchEvent(clickEvent);

  expect(getByText("Loading...")).toBeDefined();
});
