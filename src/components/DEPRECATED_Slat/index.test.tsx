import * as React from "react";
import { cleanup, render } from "react-testing-library";
import DEPRECATED_Slat from "./index";

import IconCalendar from "../Icons/Calendar";
import IconCross from "../Icons/Cross";
import IconMapPin from "../Icons/MapPin";

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
      icon: IconCalendar,
      text: "1.30pm - 2.30pm",
    },
    {
      icon: IconMapPin,
      text: "Underwood, QLD, Australia",
    },
  ],
  image:
    "https://res.cloudinary.com/go1vn/image/upload/v1537851944/ckvawokvc4k70fd9t1oj.jpg",
  type: "Event",
  typeBackground: "background",
  dropdownItems: [
    {
      icon: IconCross,
      title: "fake item",
      action: jest.fn(),
    },
    {
      icon: IconCross,
      title: "fake item2",
      action: jest.fn(),
    },
  ],
};

it("renders without crashing without any optional props", () => {
  render(<DEPRECATED_Slat />);
});

it("renders without crashing with all props", () => {
  render(<DEPRECATED_Slat {...props} />);
});
