import * as React from "react";
import { cleanup, render } from "react-testing-library";
import IconStar from "../Icons/Star";
import CourseCard from "./index";

it("renders without crashing without any optional props", () => {
  render(<CourseCard />);

  cleanup();
});

it("renders without crashing with all props", () => {
  render(
    <CourseCard
      typeIcon="Course"
      type="Course"
      duration={74}
      author="Cian O'Leary"
      title="Test Title"
      courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      itemList={[{ title: "Test" }]}
      metaList={[{ icon: IconStar, text: "Hello, world" }]}
      passive={false}
      premium={true}
      status={{
        type: "inProgress",
        text: "In progress",
      }}
    >
      Hello World!
    </CourseCard>
  );

  cleanup();
});

it("renders without crashing when status is enrolled", () => {
  render(
    <CourseCard
      typeIcon="Course"
      type="Course"
      duration={74}
      author="Cian O'Leary"
      title="Test Title"
      courseImage="https://res.cloudinary.com/go1/image/fetch/w_1024,h_300,c_thumb,g_auto/https://udemy-images.udemy.com/course/750x422/435262_c617.jpg"
      metaList={[{ icon: IconStar, text: "Hello, world" }]}
      passive={false}
      premium={true}
      status={{
        type: "enrolled",
        text: "Enrolled",
      }}
      price={123}
      currency="AUD"
    >
      Hello World!
    </CourseCard>
  );

  cleanup();
});
