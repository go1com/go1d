import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Text from "../Text";
import Label from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Label />);
});

it("renders without crashing with a labelSuffix", () => {
  render(<Label labelSuffix={<Text>test</Text>} />);
});
