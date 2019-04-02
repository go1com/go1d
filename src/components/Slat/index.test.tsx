import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Slat from "./index";

afterEach(cleanup);

const props = {
  id: 123,
  topMeta: ["one", "two"],
  title: "This is test title",
  description: "This is the test description",
  currency: "AUD",
  price: 100,
  bottomMeta: [
    {
      icon: "Calendar",
      text: "1.30pm - 2.30pm",
    },
    {
      icon: "MapPin",
      text: "Underwood, QLD, Australia",
    },
  ],
  image:
    "https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg",
  type: "Event",
  typeBackground: "background",
  dropdownItems: [
    {
      icon: "Cross",
      text: "fake item",
      action: jest.fn(),
    },
    {
      icon: "Cross",
      text: "fake item2",
      action: jest.fn(),
    },
  ],
};

it("renders without crashing without any optional props", () => {
  render(<Slat />);
});

it("renders without crashing with all props", () => {
  render(<Slat {...props} />);
});
