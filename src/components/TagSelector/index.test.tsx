import * as React from "react";
import { cleanup, render } from "react-testing-library";
import View from "../View";
import TagSelector from "./";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<TagSelector options={["test"]} />);
});

it("renders without crashing with optional props", () => {
  render(
    <TagSelector
      options={["test"]}
      value={["A TAG"]}
      onChange={jest.fn()}
      name="TEST 1"
    />
  );
});

it("handles change well", () => {
  const fn = jest.fn();
  const ref: React.RefObject<TagSelector> = React.createRef();

  render(
    <TagSelector
      options={["test"]}
      value={["A TAG"]}
      onChange={fn}
      name="TEST 1"
      ref={ref}
    />
  );

  if (ref.current) {
    const changeEvent = { target: { value: ["Tweezers"] } };
    ref.current.onChange(changeEvent as any);
    expect(fn).toBeCalledWith(changeEvent);
  } else {
    fail("ref could not be set");
  }
});

it("handles create well", () => {
  const fn = jest.fn();
  const ref: React.RefObject<TagSelector> = React.createRef();

  render(
    <TagSelector
      options={["test"]}
      value={["A TAG"]}
      onChange={fn}
      name="TEST 1"
      ref={ref}
    />
  );

  if (ref.current) {
    const changeEvent = {
      target: {
        value: ["A TAG", "Createable"],
        name: "TEST 1",
        id: undefined,
      },
    };
    ref.current.inputChange({ currentTarget: { value: "Createable" } } as any);
    ref.current.onCreate();
    expect(fn).toBeCalledWith(changeEvent);
  } else {
    fail("ref could not be set");
  }
});

it("can focus", () => {
  const ref: React.RefObject<TagSelector> = React.createRef();

  render(
    <TagSelector options={["test"]} value={["A TAG"]} name="TEST 1" ref={ref} />
  );

  if (ref.current) {
    ref.current.handleFocus({} as any);
    expect(ref.current.state.isFocused).toBe(true);
    ref.current.handleBlur({} as any);
    expect(ref.current.state.isFocused).toBe(false);
  } else {
    fail("ref could not be set");
  }
});

it("can render options", () => {
  const ref: React.RefObject<TagSelector> = React.createRef();

  render(
    <TagSelector
      options={["test"]}
      value={["A TAG"]}
      name="TEST 1"
      ref={ref}
      error="TEST"
    />
  );

  if (ref.current) {
    ref.current.renderOption({ value: "test", label: "Test" });
    ref.current.renderCreate();
  } else {
    fail("ref could not be set");
  }
});

it("handles delete well", () => {
  const fn = jest.fn();
  const ref: React.RefObject<TagSelector> = React.createRef();

  render(
    <TagSelector
      options={["test"]}
      value={["A TAG", "ONE MORE TAG"]}
      onChange={fn}
      name="TEST 1"
      ref={ref}
    />
  );

  if (ref.current) {
    const changeEvent = {
      target: {
        value: ["ONE MORE TAG"],
        name: "TEST 1",
        id: undefined,
      },
    };
    ref.current.removeItem({
      currentTarget: { dataset: { value: "A TAG" } },
    } as any);
    expect(fn).toBeCalledWith(changeEvent);
  } else {
    fail("ref could not be set");
  }
});

it("can focus", () => {
  const ref: React.RefObject<TagSelector> = React.createRef();

  render(
    <TagSelector options={["test"]} value={["A TAG"]} name="TEST 1" ref={ref} />
  );

  if (ref.current) {
    ref.current.handleFocus({} as any);
    expect(ref.current.state.isFocused).toBe(true);
    ref.current.handleBlur({} as any);
    expect(ref.current.state.isFocused).toBe(false);
  } else {
    fail("ref could not be set");
  }
});

it("renders the provided placeholder", () => {
  const { queryByPlaceholderText } = render(
    <TagSelector options={["test"]} placeholder="A placeholder" />
  );

  const tagEl = queryByPlaceholderText("A placeholder");
  if (tagEl instanceof HTMLInputElement) {
    expect(tagEl.placeholder).toEqual("A placeholder");
  } else {
    fail("no placeholder");
  }
});

it("it renders status message", () => {
  const ref: React.RefObject<TagSelector> = React.createRef();
  const statusRenderer = () => (
    <View test-dataid="statusmuessage">TestStatus</View>
  );
  const { queryByText } = render(
    <TagSelector
      options={["test"]}
      showStatus={true}
      statusRenderer={statusRenderer}
      value={["A TAG"]}
      name="TEST 1"
      ref={ref}
    />
  );

  if (ref.current) {
    ref.current.handleFocus({} as any);
    expect(ref.current.state.isFocused).toBe(true);
    const status = queryByText("TestStatus");
    expect(status).toBeDefined();
  }
});
