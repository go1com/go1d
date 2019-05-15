import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import Autocomplete from "./";

afterEach(cleanup);

const options = [
  {
    label: "foo1",
    value: {
      lat: "1.23",
      lon: "4.56",
    },
  },
  {
    label: "foo2",
    value: {
      lat: "1.23",
      lon: "4.56",
    },
  },
  {
    label: "foo3",
    value: {
      lat: "1.23",
      lon: "4.56",
    },
  },
];

it("renders without crashing without any optional props", () => {
  render(
    <Autocomplete
      options={options}
      lookupMethod={jest.fn()}
      onSelectOption={jest.fn()}
    />
  );
});

it("renders without crashing with optionRenderer prop", () => {
  render(
    <Autocomplete
      options={options}
      lookupMethod={jest.fn()}
      onSelectOption={jest.fn()}
      optionRenderer={jest.fn()}
    />
  );
});

it("handles change and fires lookup events", () => {
  const mock = jest.fn();

  const { getByTestId } = render(
    <Autocomplete
      options={options}
      lookupMethod={mock}
      onSelectOption={jest.fn()}
    />
  );

  fireEvent.change(getByTestId("inputElement"), {
    target: { value: "Bris" },
  });
  expect(mock.mock.calls.length).toBe(1);
});

it("handles select and fires data up", () => {
  const mock = jest.fn();

  const { getByTestId } = render(
    <Autocomplete
      options={options}
      lookupMethod={jest.fn()}
      onSelectOption={mock}
    />
  );

  fireEvent.change(getByTestId("inputElement"), {
    target: { value: "Bris" },
  });

  fireEvent.click(getByTestId("locationElement"));

  expect(mock.mock.calls.length).toBe(1);
});

it("handles clear button clicks", () => {
  const mock = jest.fn();

  const { getByTestId } = render(
    <Autocomplete
      options={options}
      lookupMethod={jest.fn()}
      onSelectOption={mock}
    />
  );

  fireEvent.change(getByTestId("inputElement"), {
    target: { value: "Bris" },
  });

  fireEvent.click(getByTestId("locationElement"));

  fireEvent.click(getByTestId("close"));

  expect(mock.mock.calls[1]).toEqual([null]);
});
