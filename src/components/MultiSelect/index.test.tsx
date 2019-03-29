import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Text from "../Text/index";
import MultiSelect from "./index";

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

it("renders without crashing without any optional props", () => {
  render(<MultiSelect options={Options} />);
});

it("renders without crashing with optional props", () => {
  const onChangeMock = () => null;
  render(
    <MultiSelect
      options={Options}
      label="Test"
      disabled={false}
      onChange={onChangeMock}
      name="Test"
    />
  );
});

it("renders label as React Node without crashing", () => {
  const onChangeMock = () => null;
  render(
    <MultiSelect
      options={Options}
      label={<Text>Hello</Text>}
      disabled={false}
      onChange={onChangeMock}
      name="Test"
    />
  );
});

it("handles default values", () => {
  const onChangeMock = jest.fn();
  render(
    <MultiSelect
      options={Options}
      label="Test"
      disabled={false}
      onChange={onChangeMock}
      name="Test"
      searchable={true}
      defaultValue={["test 1", "test"]}
    />
  );
});

it("Calculates the Length of the dropdown correctly", () => {
  const ref: React.RefObject<MultiSelect> = React.createRef();
  const GroupOptions = [
    {
      label: "Derp",
      optgroup: true,
      values: [
        { value: "test0", label: "Test0" },
        { value: "test1", label: "Test1" },
        { value: "test2", label: "Test2" },
      ],
    },
  ];

  render(<MultiSelect ref={ref} options={Options} />);

  if (ref.current) {
    expect(ref.current.calculateDropDownHeight(GroupOptions[0].values)).toBe(
      165
    );
    expect(
      ref.current.calculateDropDownHeight([
        {
          label: "Derp",
          optgroup: true,
        },
        {
          label: " ",
          optgroup: true,
        },
        undefined,
        ...GroupOptions[0].values,
      ])
    ).toBe(216);
  } else {
    fail("ref could not be set");
  }
});

it("Calculates the Width of the dropdown correctly", () => {
  const ref: React.RefObject<MultiSelect> = React.createRef();

  render(<MultiSelect ref={ref} options={Options} />);

  if (ref.current) {
    expect(ref.current.calculateListWidth(Options)).toBe(200);
    expect(
      ref.current.calculateListWidth([
        {
          label:
            "Derp Really Long Title Derp Derp Derp Derp Derp Derp Derp Derp",
          value: "Should overflow",
        },
        ...Options,
      ])
    ).toBe(350);
  } else {
    fail("ref could not be set");
  }
});
