import * as React from "react";
import {
  cleanup,
  fireEvent,
  render,
  waitForElement,
} from "react-testing-library";
import Select from "./index";

afterEach(cleanup);

const Options = [
  {
    label: "test",
    value: "test",
  },
  {
    label: "test 1",
    value: "test 1",
  },
  {
    label: "test 2",
    value: "test 2",
  },
];

const Optgroups = [
  {
    label: "Opt group",
    optgroup: true,
    values: [
      {
        label: "foo",
        value: "test",
      },
      {
        label: "test 1",
        value: "test 1",
      },
      {
        label: "test 2",
        value: "test 2",
      },
    ],
  },
  {
    label: "",
    optgroup: true,
    values: [
      {
        label: "foo",
        value: "test",
      },
    ],
  },
];

it("renders without crashing without any optional props", () => {
  render(<Select options={Options} />);
});

it("renders without crashing without any with a large list of options", () => {
  render(
    <Select
      options={Array(120)
        .fill(null)
        .map((x, index) => ({
          label: String(index),
          value: String(index),
        }))}
    />
  );
});

it("renders without crashing with optgroups and default value", () => {
  render(<Select options={Optgroups} searchable={true} defaultValue="test" />);
});

it("renders without crashing with default value", () => {
  render(<Select options={Options} searchable={true} defaultValue="test" />);
});

it("renders without crashing some optional props", () => {
  render(<Select options={Options} />);
});

it("Clicking opens the dropdown", async () => {
  const ChangeMock = jest.fn();
  const { getByTestId } = render(
    <Select searchable={true} options={Options} onChange={ChangeMock} />
  );

  fireEvent.click(getByTestId("primarySection"));

  await waitForElement(() => getByTestId("searchFilterInput"));
});

it("Clicking opens the dropdown - optgroup", async () => {
  const ChangeMock = jest.fn();
  const { getByTestId } = render(
    <Select searchable={true} options={Optgroups} onChange={ChangeMock} />
  );

  fireEvent.click(getByTestId("primarySection"));

  await waitForElement(() => getByTestId("searchFilterInput"));
});
