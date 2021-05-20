import * as React from "react";
import { render } from "react-testing-library";
import CardListIndex from "./index";

const setup = (props = {}) => {
  return render(
    <CardListIndex
      title="Sed porttitor lectus nibh."
      subTitle="Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
      thumbnail="http://res.cloudinary.com/go1/image/upload/v1565766636/f4e8fqv5zayyjve2ovms.jpg"
      {...props}
    />
  );
};

it("renders without crashing with skeleton", () => {
  render(<CardListIndex skeleton={true} />);
});

it("renders without crashing", () => {
  setup({
    thumbnail: null,
  });
});
