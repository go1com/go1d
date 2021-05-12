import * as React from "react";
import { render } from "react-testing-library";
import CardListIndex from "./index";

const setup = (props = {}) => {
  return render(
    <CardListIndex
      title="Title goes here even it’s super super long and took two lines only"
      subTitle="Supporting text include text like an article summary or a restaurant description."
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
