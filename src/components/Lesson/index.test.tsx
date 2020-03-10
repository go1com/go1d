import * as React from "react";
import { cleanup, getByText, render } from "react-testing-library";
import Lesson from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Lesson />);
});

it("renders without crashing with full options", () => {
  const { container } = render(
    <Lesson
      title="course 1"
      type="course"
      duration={60}
      author="Einstein"
      typeLabel={<span>course123</span>}
    />
  );

  expect(getByText(container, "course123").parentElement.innerHTML).toBe(
    "<span>course123</span>"
  );
});
