import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import InputComponent from "./index";
afterEach(cleanup);

it("renders without crashing", () => {
  const onSubmit = jest.fn();
  render(<InputComponent id="test" onSubmit={onSubmit} />);
});

it("test onSubmit", () => {
  const onSubmit = jest.fn();

  const { getByTestId } = render(
    <InputComponent id="crashing" onSubmit={onSubmit} value="testValue" />
  );

  fireEvent.keyDown(getByTestId("inputElement"), {
    key: "Enter",
    keyCode: 13,
    which: 13,
  });
  expect(onSubmit.mock.calls.length).toBe(1);
  expect(onSubmit.mock.calls[0][0]).toBe("testValue");
});

it("test onChange", () => {
  const onSubmit = jest.fn();
  const onChange = jest.fn();

  const { getByTestId } = render(
    <InputComponent id="crashing" onSubmit={onSubmit} onChange={onChange} />
  );

  fireEvent.change(getByTestId("inputElement"), {
    target: { value: "12345678" },
  });
  expect(onChange.mock.calls.length).toBe(1);
});

it("doesn't submit if onClear is defined", () => {
  const onClear = jest.fn();
  const onSubmit = jest.fn();

  const { getByTestId } = render(
    <InputComponent
      id="test"
      onSubmit={onSubmit}
      onClear={onClear}
      clearable={true}
    />
  );

  fireEvent.click(getByTestId("clearButton"));
  expect(onClear.mock.calls.length).toBe(1);
  expect(onSubmit.mock.calls.length).toBe(0);
});
