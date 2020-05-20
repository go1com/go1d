import * as React from "react";
import { cleanup, render } from "react-testing-library";
import IconChevronRight from "../Icons/ChevronRight";
import Option from "./index";

afterEach(cleanup);

it("renders without crashing with title as mandatory", () => {
  render(<Option title="course 1" onClick={jest.fn()} />);
});

it("renders without crashing with full options", () => {
  render(
    <Option
      title="Title Test"
      spotIcon="PlusCircle"
      actionIcon={IconChevronRight}
      lines={2}
      onClick={jest.fn()}
      checked={true}
      disabled={true}
      meta="Child level test 1, Child level test 2, Child level test 3, Child level test 4, Child level test 5"
    />
  );
});
