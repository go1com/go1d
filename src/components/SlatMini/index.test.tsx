import * as React from "react";
import { cleanup, render } from "react-testing-library";
import IconCross from "../Icons/Cross";
import SlatMini from "./index";

afterEach(cleanup);

const props = {
  id: 123,
  title: "This is test title",
  bottomMeta: [["Provider", "29 mins"]],
  image: "https://fake-image.jpg",
  type: "Event",
  typeBackground: "background",
  imageOverlayRenderer: () => <p>Hello</p>,
  dropdownItems: [
    {
      icon: IconCross,
      title: "fake item #01",
      action: jest.fn(),
    },
    {
      icon: IconCross,
      title: "fake item #02",
      action: jest.fn(),
    },
  ],
};

it("renders without crashing without any optional props", () => {
  render(<SlatMini />);
});

it("renders without crashing with all props", () => {
  render(<SlatMini {...props} />);
});
