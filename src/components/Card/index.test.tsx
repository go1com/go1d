import * as React from "react";
import { render } from "react-testing-library";
import CourseCard from "./index";

const setup = (props = {}) => {
  return render(
    <CourseCard
      headerText="Title goes here even it’s super super long and took two lines only"
      supportingText="Supporting text include text like an article summary or a restaurant description."
      thumbnail="http://res.cloudinary.com/go1/image/upload/v1565766636/f4e8fqv5zayyjve2ovms.jpg"
      metadata={["Course", "14 min"]}
      {...props}
    />
  );
};

it("renders without crashing with all props", () => {
  setup();
});

it("renders without crashing with skeleton", () => {
  setup({ skeleton: true });
});
