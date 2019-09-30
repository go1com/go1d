import * as React from "react";
import { cleanup, render } from "react-testing-library";
import PatternIcon from "./index";

describe("Pattern Icon", () => {
  afterEach(cleanup);

  it("renders without crashing without any optional props", () => {
    render(<PatternIcon name="Forest" />);
  });

  it("renders without crashing with optional props", () => {
    render(<PatternIcon name="Gold" size={100} />);
  });
});
