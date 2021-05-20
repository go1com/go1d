import * as React from "react";
import { render } from "react-testing-library";
import CourseCard from "./index";

const setup = (props = {}) => {
  return render(
    <CourseCard
      title="Sed porttitor lectus nibh."
      subTitle="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
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
