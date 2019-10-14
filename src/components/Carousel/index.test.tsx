import * as React from "react";
import {
  cleanup,
  fireEvent,
  render,
  waitForElement,
} from "react-testing-library";
import View from "../View";
import Carousel from "./index";

afterEach(cleanup);

jest.useFakeTimers();

const SquareStyling = {
  height: 200,
  minWidth: 200,
  maxWidth: "100%",
  width: 400,
  color: "#fff",
  textAlign: "center",
  alignItems: "center",
  padding: 20,
};

const DummyChild = props => (
  <View
    css={{
      ...(SquareStyling as object),
      backgroundColor: "#7732bb",
    }}
  >
    Hello World 1
  </View>
);

it("does not crash", () => {
  const { getByTestId } = render(
    <Carousel>
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
    </Carousel>
  );

  const Element = getByTestId("ScrollableCarousel");
  fireEvent.scroll(Element, {
    value: 20,
  });
  jest.runOnlyPendingTimers();
});

it("does not crash", () => {
  const { getByTestId } = render(
    <Carousel>
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
    </Carousel>
  );

  const Element = getByTestId("ScrollableCarousel");
  fireEvent.scroll(Element, {
    value: 20,
  });
  jest.runOnlyPendingTimers();
});

it("does not crash when updating with empty array as children", () => {
  const { container } = render(<Carousel>{[]}</Carousel>);
  render(<Carousel>{[]}</Carousel>, { container });
});

it("Can click next", async () => {
  const { rerender, getByTestId } = render(
    <Carousel size="md">
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
    </Carousel>
  );

  rerender(
    <Carousel size="sm">
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
      <DummyChild />
    </Carousel>
  );

  await waitForElement(() => getByTestId("rightNavigationButton"));

  const Element = getByTestId("rightNavigationButton");
  fireEvent.click(Element);
});
