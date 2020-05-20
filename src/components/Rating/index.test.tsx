import * as React from "react";
import { render } from "react-testing-library";
import IconGo1Logo from "../Icons/Go1Logo";
import IconStar from "../Icons/Star";
import Rating from "./index";

it("test render count", () => {
  const value = 4;
  const { container } = render(<Rating count={value} />);
  expect(container.querySelectorAll("button").length).toBe(value);
});

it("renders without crashing without any optional props", () => {
  render(<Rating />);
});

it("renders with default value", () => {
  const value = 4;
  const ref: React.RefObject<any> = React.createRef();
  render(
    <Rating name="Rating" icon={IconGo1Logo} defaultValue={value} ref={ref} />
  );
  if (ref.current) {
    expect(ref.current.state.value).toBe(value);
  } else {
    fail("ref could not be set");
  }
});

it("renders controlled", () => {
  render(
    <Rating
      name="Rating"
      icon={IconStar}
      value={3}
      count={3}
      selectedColor="contrast"
      unselectedColor="muted"
      onChange={jest.fn()}
    />
  );
});
