import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import Text from "../Text";
import GlobalMessage from "./index";

afterEach(cleanup);

const closeMock = jest.fn();

it("renders without crashing without any optional props (success type)", () => {
  render(
    <GlobalMessage status="success">
      <Text>This is a message</Text>
    </GlobalMessage>
  );
});

it("renders without crashing without any optional props (warning)", () => {
  render(
    <GlobalMessage status="warning">
      <Text>This is a message</Text>
    </GlobalMessage>
  );
});

it("renders without crashing without any optional props (danger)", () => {
  render(
    <GlobalMessage status="danger">
      <Text>This is a message</Text>
    </GlobalMessage>
  );
});

it("accepts and passes close event", () => {
  const { getByTestId } = render(
    <GlobalMessage status="success" close={closeMock}>
      <Text>This is a message</Text>
    </GlobalMessage>
  );

  fireEvent.click(getByTestId("close"));
  expect(closeMock.mock.calls.length).toBe(1);
});
