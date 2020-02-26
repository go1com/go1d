import * as React from "react";
import { cleanup, render } from "react-testing-library";
import * as Icons from "../Icons";
import Icon from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  const wrapper = render(<Icon name="Cross" />);
  expect(wrapper.container.children.length).toBe(1);
  expect(wrapper.container.children[0].tagName).toBe("svg");
});

it("renders without crashing with all props", () => {
  const wrapper = render(<Icon name="Cross" color="accent" size={22} />);
  expect(wrapper.container.children.length).toBe(1);
  expect(wrapper.container.children[0].tagName).toBe("svg");
});

it("renders all icons", () => {
  Object.keys(Icons).forEach(name => {
    const wrapper = render(<Icon name={name.slice(4)} />);
    expect(wrapper.container.children.length).toBe(1);
    expect(wrapper.container.children[0].tagName).toBe("svg");
    cleanup();
  });
});

it("renders without a component", () => {
  const wrapper = render(<Icon name="notanicon" />);
  expect(wrapper.container.children.length).toBe(0);
});
