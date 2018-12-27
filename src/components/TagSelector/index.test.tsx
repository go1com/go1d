import * as React from "react";
import { cleanup, render } from "react-testing-library";
import TagSelector from "./";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<TagSelector options={["test"]} />);
});
