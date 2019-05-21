import * as moment from "moment";
import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import DateRange from "./";

afterEach(cleanup);

it("renders with minimal props", () => {
  render(<DateRange />);
});

it("handles change events", () => {
  const ref: React.RefObject<DateRange> = React.createRef();
  const change = jest.fn();
  const clear = jest.fn();
  const { container } = render(
    <DateRange ref={ref} onChange={change} onClear={clear} />
  );

  let elem: HTMLElement = container.querySelector("#start_date_ID");
  fireEvent.change(elem, { target: { value: "12/12/2029" } });

  elem = container.querySelector("#end_date_ID");
  fireEvent.click(elem);
  fireEvent.change(elem, { target: { value: "12/12/2030" } });

  const { state } = ref!.current;
  expect(state.endDate.format("DD-MM-YYYY")).toEqual("12-12-2030");
  expect(state.startDate.format("DD-MM-YYYY")).toEqual("12-12-2029");

  expect(change).toBeCalledTimes(2);

  // Can we clear?
  elem = container.querySelector("#start_date_ID");
  fireEvent.change(elem, { target: { value: null } });

  elem = container.querySelector("#end_date_ID");
  fireEvent.click(elem);
  fireEvent.change(elem, { target: { value: null } });

  expect(clear).toBeCalledTimes(1);
});
