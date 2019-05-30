import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Option from "./index";

afterEach(cleanup);

it("renders without crashing with title as mandatory", () => {
  render(<Option title="course 1" />);
});

it("renders without crashing with full options", () => {
  render(
    <Option
      title="Title Test"
      spotIcon="PlusCircle"
      actionIcon="ChevronRight"
      lines={2}
      checked={true}
      disabled={true}
      meta="Child level test 1, Child level test 2, Child level test 3, Child level test 4, Child level test 5"
    />
  );
});
