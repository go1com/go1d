import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import Field from "../Field";
import Form from "../Form";
import Stepper from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<Stepper id="asd" />);
});

it("renders without crashing with a value", () => {
  render(<Stepper id="stepper" value={0} />);
});

it("test focus", () => {
  const onFocus = jest.fn();

  const { getByTestId } = render(<Stepper id="crashing" onFocus={onFocus} />);

  fireEvent.focus(getByTestId("inputElement"));
  expect(onFocus.mock.calls.length).toBe(1);
});

it("test blur", () => {
  const onBlur = jest.fn();

  const { getByTestId } = render(<Stepper id="crashing" onBlur={onBlur} />);

  fireEvent.blur(getByTestId("inputElement"));
  expect(onBlur.mock.calls.length).toBe(1);
});

it("min max reset value less than 0 max", () => {
  const { getByTestId } = render(
    <Stepper id="stepper" minNumber={-5} maxNumber={-3} />
  );

  const el = getByTestId("inputElement") as any;
  expect(el.value).toBe("");
});

it("min max reset value greater than 0 max", () => {
  const { getByTestId } = render(
    <Stepper id="stepper" minNumber={-5} maxNumber={23} />
  );

  const el = getByTestId("inputElement") as any;
  expect(el.value).toBe("");
});

it("handles strings increment decrement", () => {
  const { getByTestId } = render(
    <Form initialValues={{ num: "1" }} onSubmit={jest.fn()}>
      <Field component={Stepper} name="num" />
    </Form>
  );

  const inc = getByTestId("increment") as any;
  fireEvent.click(inc);
  const el = getByTestId("inputElement") as any;
  expect(el.value).toBe("2");
});

it("handles null", () => {
  const { getByTestId } = render(
    <Form initialValues={{ num: null }} onSubmit={jest.fn()}>
      <Field component={Stepper} name="num" />
    </Form>
  );

  const inc = getByTestId("increment") as any;
  fireEvent.click(inc);
  const el = getByTestId("inputElement") as any;
  expect(el.value).toBe("1");
});
