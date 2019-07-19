import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Collapse from "./index";

afterEach(cleanup);

it("renders with minimum props without crashing", () => {
  render(<Collapse isOpen={true} />);
});
