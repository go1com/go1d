import * as React from "react";
import { cleanup, render } from "react-testing-library";
import OptionList from "./index";

afterEach(cleanup);

it("renders without crashing with no option", () => {
  render(<OptionList />);
});
