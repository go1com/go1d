import * as React from "react";
import { cleanup, render } from "react-testing-library";
import CircleProgress from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<CircleProgress />);
});
