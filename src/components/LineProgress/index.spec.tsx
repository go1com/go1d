import * as React from "react";
import { cleanup, render } from "react-testing-library";
import { LineProgress } from "./index";

afterEach(cleanup);

it("renders with minimum props without crashing", () => {
  render(<LineProgress percent={50} />);
});
