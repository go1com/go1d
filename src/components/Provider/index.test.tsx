import createEmotion from "create-emotion";
import { css } from "emotion";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import View from "../View";
import Provider from "./index";

afterEach(cleanup);

it("renders lightmode without crashing", () => {
  render(
    <Provider>
      <div>content</div>
    </Provider>
  );
});

it("renders darkmode without crashing", () => {
  render(
    <Provider mode="dark">
      <div>content</div>
    </Provider>
  );
});

it("renders with custom emotion", () => {
  const emotion = createEmotion({ key: "test-id" });
  emotion.css = jest.fn((arg1: any, ...args: any[]) => css(arg1, ...args));
  render(
    <Provider emotion={emotion}>
      <View marginRight={2} />
    </Provider>
  );

  expect(emotion.css).toHaveBeenCalled();
});
