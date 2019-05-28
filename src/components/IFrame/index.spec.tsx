import * as React from "react";
import { cleanup, render } from "react-testing-library";
import { IFrame } from "./index";

afterEach(cleanup);

it("renders basic mode without crashing", () => {
  render(<IFrame url="https://go1.com"/>);
});
