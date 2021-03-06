import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ButtonFilled from "../ButtonFilled";
import IconCourse from "../Icons/Course";
import View from "../View";
import CourseSlat, { dueDateFormatter } from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<CourseSlat />);
});

it("renders without crashing with all props", () => {
  const testRenderer = () => <p>Hello</p>;
  render(
    <CourseSlat
      courseImage="#"
      title="Master sourdough in a week"
      description="Despite general improvements in workplace health and safety"
      author="Bob Bobberson"
      authorAvatar="#"
      duration={4}
      actionRender={testRenderer}
      contentRender={testRenderer}
      imageOverlayRenderer={testRenderer}
      enrollment={{ status: "completed", dueDate: "" }}
      type="Course"
      typeIcon={IconCourse}
      passive={false}
    />
  );
});

it("renders passive course slats", () => {
  const testRenderer = () => <p>Hello</p>;
  render(
    <CourseSlat
      courseImage="#"
      title="Master sourdough in a week"
      description="Despite general improvements in workplace health and safety"
      author="Bob Bobberson"
      authorAvatar="#"
      enrollment={{ status: "in_progress", dueDate: "" }}
      duration={4}
      actionRender={testRenderer}
      contentRender={testRenderer}
      type="Course"
      typeIcon={IconCourse}
      passive={true}
    />
  );
});

it("should render author as passed component", () => {
  const testRenderer = () => <p>Hello</p>;
  const author = () => <div>Foo</div>;
  render(
    <CourseSlat
      courseImage="#"
      title="Master sourdough in a week"
      description="Despite general improvements in workplace health and safety"
      author={author}
      authorAvatar="#"
      duration={4}
      actionRender={testRenderer}
      contentRender={testRenderer}
      type="Course"
      typeIcon={IconCourse}
      passive={true}
    />
  );
});

it("renders due text correctly", () => {
  let date = new Date();
  date.setHours(0, 0, 0);
  let dueDateFormat = dueDateFormatter(date.toISOString());
  expect(dueDateFormat.overDue).toBe(true);
  expect(dueDateFormat.dueDateText).toBe("Due today");
  date.setDate(date.getDate() - 1);
  dueDateFormat = dueDateFormatter(date.toISOString());
  expect(dueDateFormat.overDue).toBe(true);
  expect(dueDateFormat.dueDateText).toBe("Due yesterday");
  date = new Date();
  date.setHours(0, 0, 0);
  date.setDate(date.getDate() - 2);
  dueDateFormat = dueDateFormatter(date.toISOString());
  expect(dueDateFormat.overDue).toBe(true);
  expect(dueDateFormat.dueDateText).toBe("Due 2 days ago");
  date = new Date();
  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 1);
  dueDateFormat = dueDateFormatter(date.toISOString());
  expect(dueDateFormat.overDue).toBe(false);
  expect(dueDateFormat.dueDateText).toBe("Due tomorrow");
  date = new Date();
  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 2);
  dueDateFormat = dueDateFormatter(date.toISOString());
  expect(dueDateFormat.overDue).toBe(false);
  expect(dueDateFormat.dueDateText).toBe("Due in 2 days");
  date = new Date();
  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 20);
  dueDateFormat = dueDateFormatter(date.toISOString());
  expect(dueDateFormat.overDue).toBe(false);
  const dateString = `${date.toLocaleDateString(
    window
      ? (window.navigator as any).userLanguage || window.navigator.language
      : "en-us",
    {
      day: "numeric",
      month: "short",
    }
  )} ${
    new Date().getFullYear() !== date.getFullYear() ? date.getFullYear() : ""
  }`;
  expect(dueDateFormat.dueDateText).toBe("Due " + dateString);
});

it("renders with premium", () => {
  const testRenderer = () => <p>Hello</p>;
  const author = () => <div>Foo</div>;
  render(
    <CourseSlat
      courseImage="#"
      title="Master sourdough in a week"
      description="Despite general improvements in workplace health and safety"
      author={author}
      authorAvatar="#"
      duration={4}
      actionRender={testRenderer}
      contentRender={testRenderer}
      type="Course"
      typeIcon={IconCourse}
      passive={true}
      premium={true}
    />
  );
});

it("renders with learning outcomes popup", () => {
  const testRenderer = () => <p>Hello</p>;
  const author = () => <div>Foo</div>;
  const contentPopover = (ref, contentProps, closePopover) => (
    <View
      innerRef={ref}
      {...contentProps}
      border={1}
      borderColor="subtle"
      borderRadius={3}
      padding={5}
    >
      Learning outcomes
      <ButtonFilled onClick={closePopover} color="accent" marginTop={4}>
        Close
      </ButtonFilled>
    </View>
  );

  render(
    <CourseSlat
      courseImage="#"
      title="Master sourdough in a week"
      description="Despite general improvements in workplace health and safety"
      author={author}
      authorAvatar="#"
      duration={4}
      actionRender={testRenderer}
      contentRender={testRenderer}
      type="Course"
      typeIcon={IconCourse}
      passive={true}
      premium={true}
      popoverOnInteraction={contentPopover}
    />
  );
});
