import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ErrorState from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<ErrorState />);
});

it("renders without crashing with all props passed to it", () => {
  render(<ErrorState title="title" description="Description" />);
});

it("renders without child content", () => {
  render(<ErrorState title="title">Description</ErrorState>);
});
