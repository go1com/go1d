import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import ColorPicker, { Props } from ".";

afterEach(cleanup);

const setup = (overrides?: Props) => {
  const props = {
    color: "#ddd",
    onChange: jest.fn(),
    ...overrides,
  } as Props;

  const wrapper = render(<ColorPicker {...props} />);

  return {
    wrapper,
    props,
  };
};

it("should change the color as blur the input", () => {
  const { wrapper, props } = setup();

  fireEvent.blur(wrapper.queryByTestId("input-color"), {
    target: {
      value: "#eee",
    },
  });

  expect(props.onChange).toHaveBeenCalledWith("#eee");
});

it("should accept a valid pasted value", () => {
  const { wrapper, props } = setup();

  const inputElement = wrapper.queryByTestId("input-color");

  const clipboardEvent = new Event("paste", {
    bubbles: true,
    cancelable: true,
    composed: true,
  });

  // @ts-ignore
  clipboardEvent.clipboardData = {
    getData: () => "eee",
  };
  inputElement.dispatchEvent(clipboardEvent);

  expect(props.onChange).toHaveBeenCalledWith("#eee");
});

it("should disallow to paste invalid value", () => {
  const { wrapper, props } = setup();

  const inputElement = wrapper.queryByTestId("input-color");

  const clipboardEvent = new Event("paste", {
    bubbles: true,
    cancelable: true,
    composed: true,
  });

  // @ts-ignore
  clipboardEvent.clipboardData = {
    getData: () => "an invalid value",
  };
  inputElement.dispatchEvent(clipboardEvent);

  expect(props.onChange).not.toHaveBeenCalled();
});
