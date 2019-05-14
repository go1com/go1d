import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import CheckboxGroup from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <CheckboxGroup
      name="TestInput"
      options={[
        {
          label: "test",
          value: true,
        },
      ]}
    />
  );
});

it("Can select and unselect", () => {
  const MockCall = jest.fn();
  const ChangeMock = event => MockCall(event.target.value);
  const Element = render(
    <CheckboxGroup
      onChange={ChangeMock}
      name="TestInput"
      options={[
        {
          label: "test",
          value: "testValue",
          id: "TestID",
          name: "testradio",
        },
        {
          label: "test",
          value: "testValue2",
          name: "testradio",
        },
      ]}
    />
  );

  const Label = Element.container.querySelector("#TestID") as HTMLElement;

  fireEvent.click(Label);

  expect(MockCall.mock.calls.length).toBe(1);
  expect(MockCall.mock.calls[0][0][0]).toBe("testValue");

  fireEvent.click(Label);

  expect(MockCall.mock.calls.length).toBe(2);
  expect(MockCall.mock.calls[1][0]).toEqual([]);
});
