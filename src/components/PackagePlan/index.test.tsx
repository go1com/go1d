import * as React from "react";
import { render } from "react-testing-library";
import PackagePlan from "./index";

it("renders generic plan", () => {
  render(<PackagePlan id="1" interval="month" currency="AUD" price={100} />);
});

it("renders with yearly plan", () => {
  render(<PackagePlan id="1" interval="year" currency="AUD" price={1000} />);
});
