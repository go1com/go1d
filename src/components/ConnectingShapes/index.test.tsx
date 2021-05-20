import * as React from "react";
import { render } from "react-testing-library";
import ConnectingShapes from ".";

it("renders without crashing without any optional props", () => {
  render(<ConnectingShapes content={[]} />);
});
