import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ContentType from "./index";

afterEach(cleanup);

const props = {
  type: "Course",
  text: "Course",
};

it("renders without crashing without any optional props", () => {
  render(<ContentType />);
});

it("renders without crashing with all props", () => {
  render(<ContentType {...props} />);
});
