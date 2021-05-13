import * as React from "react";
import { render } from "react-testing-library";
import Skeleton from "./index";

it("renders without crashing", () => {
  render(<Skeleton />);
});
