import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Slat from "./index";

afterEach(cleanup);

const props = {
  id: 123,
  type: "playlist",
  title: "This is test title",
  supportingText: "This is the test description",
  meta: {
    image:
      "https://res.cloudinary.com/go1/image/fetch/w_30,h_30,f_auto,c_fill/https://res.cloudinary.com/go1/image/upload/v1616042815/fgvrr5m0cqvt4nnalxus.jpg",
    subtitle: ["Catalyst Education", "abc"],
    data: ["Meta Text", "Learning Type"],
  },
  thumbnail:
    "https://res.cloudinary.com/go1/image/fetch/w_300,h_300,f_auto,c_fill/https://res.cloudinary.com/go1/image/upload/v1616042815/fgvrr5m0cqvt4nnalxus.jpg",
};

it("renders without crashing without any optional props", () => {
  render(<Slat />);
});

it("renders without crashing with all props", () => {
  render(<Slat {...props} />);
});
