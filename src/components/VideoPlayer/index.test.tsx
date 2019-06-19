import * as React from "react";
import { cleanup, render } from "react-testing-library";
import { VideoPlayer } from ".";

afterEach(cleanup);

it("renders basic mode without crashing", () => {
  render(<VideoPlayer />);
});
