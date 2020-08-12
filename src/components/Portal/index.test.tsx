import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Provider from "../Provider";
import Portal from "./index";

afterEach(cleanup);

it("renders without crashing ", () => {
  render(<Portal />);
});

it("renders without crashing with custom dood", () => {
  render(
    <Provider rootComponent={document.head}>
      <Portal />
    </Provider>
  );
  expect(document.head.querySelectorAll("[data-portal-id]").length).toBe(1);
});
