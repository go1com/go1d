import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Prose from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Prose />);
});

it("renders without crashing with array based fontSize", () => {
  render(<Prose fontSize={[1, 2, 3, 4]} />);
});

it("renders without crashing without any optional props", () => {
  render(<Prose HTML="<b>Hello World!</b>" />);
});

it("Tags are parsed correctly", () => {
  const { getByText } = render(<Prose HTML="<b>Hello World!</b>" />);
  const Element = getByText("Hello World!");

  expect(Element.tagName).toBe("B");
});

it("No XSS", () => {
  const Element = render(<Prose HTML="<script>Hello World!</script>" />);

  expect(() => {
    Element.getByText("Hello World!");
  }).toThrow();
});
