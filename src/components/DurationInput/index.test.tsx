import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import DurationInput from "./index";

afterEach(cleanup);

it("renders without crashing", () => {
  render(<DurationInput value="0" name="test" onChange={jest.fn()} />);
});

it("handles change events for hours", () => {
  const ref: React.RefObject<any> = React.createRef();
  const fn = jest.fn();
  const inputEvent = { target: { value: "1", name: "hours" } };
  const expectedOutput = { target: { value: 80, name: "test" } };

  render(<DurationInput ref={ref} value="20" name="test" onChange={fn} />);

  if (ref.current) {
    ref.current.onChange(inputEvent);

    expect(fn).toBeCalledWith(expectedOutput);
  } else {
    fail("no ref");
  }
});

it("handles change events for hours in uncontrolled state", () => {
  const ref: React.RefObject<any> = React.createRef();
  const fn = jest.fn();
  const inputEvent = { target: { value: "1", name: "hours" } };
  const expectedOutput = { target: { value: 60, name: "test" } };

  render(<DurationInput ref={ref} name="test" onChange={fn} />);

  if (ref.current) {
    ref.current.onChange(inputEvent);

    expect(fn).toBeCalledWith(expectedOutput);
  } else {
    fail("no ref");
  }
});

it("handles change events for minutes", () => {
  const ref: React.RefObject<any> = React.createRef();
  const fn = jest.fn();
  const inputEvent = { target: { value: "1", name: "minutes" } };
  const expectedOutput = { target: { value: 121, name: "test" } };

  render(<DurationInput ref={ref} value="120" name="test" onChange={fn} />);

  if (ref.current) {
    ref.current.onChange(inputEvent);

    expect(fn).toBeCalledWith(expectedOutput);
  } else {
    fail("no ref");
  }
});

it("handles change events for days", () => {
  const ref: React.RefObject<any> = React.createRef();
  const fn = jest.fn();
  const inputEvent = { target: { value: "1", name: "days" } };
  const expectedOutput = { target: { value: 1560, name: "test" } };

  render(<DurationInput ref={ref} value={120} name="test" onChange={fn} />);

  if (ref.current) {
    ref.current.onChange(inputEvent);

    expect(fn).toBeCalledWith(expectedOutput);
  } else {
    fail("no ref");
  }
});

it("allows removing values", () => {
  const ref: React.RefObject<any> = React.createRef();
  const fn = jest.fn();

  const { container } = render(
    <DurationInput ref={ref} defaultValue={1000} name="test" onChange={fn} />
  );
  const minuteElem: HTMLInputElement = container.querySelector(
    '[name="minutes"]'
  );
  const hourElem: HTMLInputElement = container.querySelector('[name="hours"]');
  const dayElem: HTMLInputElement = container.querySelector('[name="days"]');
  if (!minuteElem || !hourElem || !dayElem) {
    fail("No element found");
  }

  fireEvent.change(minuteElem, { target: { value: "" } });
  expect(fn).toBeCalledWith({
    target: {
      name: "test",
      value: 960,
    },
  });
  expect(minuteElem.value).toEqual("");

  fireEvent.change(hourElem, { target: { value: "" } });
  // when changing another input, empty inputs get populated with 0
  expect(minuteElem.value).toEqual("0");
  expect(hourElem.value).toEqual("");

  fireEvent.change(dayElem, { target: { value: "" } });
  expect(minuteElem.value).toEqual("0");
  expect(hourElem.value).toEqual("0");
  expect(dayElem.value).toEqual("");

  fireEvent.change(minuteElem, { target: { value: "" } });
  expect(minuteElem.value).toEqual("");
  expect(hourElem.value).toEqual("0");
  expect(dayElem.value).toEqual("0");

  fireEvent.blur(minuteElem);
  expect(minuteElem.value).toEqual("0");
  expect(hourElem.value).toEqual("0");
  expect(dayElem.value).toEqual("0");
});

it("prevents non numeric date changes", () => {
  const ref: React.RefObject<any> = React.createRef();
  const fn = jest.fn();
  const inputEvent = { target: { value: "1x", name: "days" } };

  render(<DurationInput ref={ref} value="120" name="test" onChange={fn} />);

  if (ref.current) {
    ref.current.onChange(inputEvent);

    expect(fn).not.toBeCalled();
  } else {
    fail("no ref");
  }
});

it("prevents long date changes", () => {
  const ref: React.RefObject<any> = React.createRef();
  const fn = jest.fn();
  const inputEvent = { target: { value: "10000", name: "days" } };

  render(<DurationInput ref={ref} value="120" name="test" onChange={fn} />);

  if (ref.current) {
    ref.current.onChange(inputEvent);

    expect(fn).not.toBeCalled();
  } else {
    fail("no ref");
  }
});

it("handles blur", () => {
  const ref: React.RefObject<any> = React.createRef();
  const fn = jest.fn();

  const { container } = render(
    <DurationInput ref={ref} value="120" name="test" onBlur={fn} />
  );

  const minuteElem: HTMLInputElement = container.querySelector(
    '[name="minutes"]'
  );

  fireEvent.focus(minuteElem);
  fireEvent.blur(minuteElem);
  expect(fn).toBeCalled();
});
