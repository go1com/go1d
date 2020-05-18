import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Avatar from "./index";

afterEach(cleanup);

it("renders without crashing", () => {
  const wrapper = render(<Avatar src="someurl" fullName="first last" />);
  expect(wrapper.container.children.length).toBe(1);
  expect(wrapper.container.children[0].tagName).toBe("DIV");
});

it("renders initials when no url is given", () => {
  const wrapper = render(<Avatar fullName="first last" />);
  expect(wrapper.container.children.length).toBe(1);
  expect(wrapper.container.children[0].children.length).toBe(1);
  expect(wrapper.container.children[0].children[0].tagName).toBe("SPAN");
  expect(wrapper.container.children[0].children[0].textContent).toBe("fl");
});

it("renders different size", () => {
  const wrapper = render(<Avatar size={6} fullName="first last" />);

  expect(wrapper.container.children.length).toBe(1);
  expect(wrapper.container.children[0].children.length).toBe(1);
  expect(wrapper.container.children[0].children[0].tagName).toBe("SPAN");
  expect(wrapper.container.children[0].children[0].textContent).toBe("fl");
});

it("renders higher than 6 as default", () => {
  const wrapper = render(<Avatar size={8} fullName="first last" />);

  expect(wrapper.container.children.length).toBe(1);
  expect(wrapper.container.children[0].children.length).toBe(1);
  expect(wrapper.container.children[0].children[0].tagName).toBe("SPAN");
  expect(wrapper.container.children[0].children[0].textContent).toBe("fl");
});

it("renders skeleton when skeleton true", () => {
  const wrapper = render(<Avatar skeleton={true} fullName="first last" />);
  expect(wrapper.container.children.length).toBe(1);
  expect(wrapper.container.children[0].children.length).toBe(0);
});

it("renders square", () => {
  const wrapper = render(<Avatar avatarType="square" fullName="first last" />);
  expect(wrapper.container.children.length).toBe(1);
  expect(wrapper.container.children[0].children.length).toBe(1);
  expect(wrapper.container.children[0].children[0].tagName).toBe("SPAN");
  expect(wrapper.container.children[0].children[0].textContent).toBe("fl");
});
