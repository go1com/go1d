// tslint:disable:jsx-no-lambda
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import AuthorSelector from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<AuthorSelector options={[]} mapEmailToAuthor={jest.fn()} />);
});

it("handles change well", () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={["test@test.net"]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      ref={ref}
      onChange={fn}
    />
  );

  const { current } = ref;

  if (current) {
    current.onChange({ target: { value: ["test@test.com"] } });

    expect(current.state.value).toEqual(["test@test.com"]);
    expect(fn).toBeCalledWith({ target: { value: ["test@test.com"] } });
  } else {
    fail("No ref could be set");
  }
});

it("handles input change well", () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={["test"]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      ref={ref}
      onInputChange={fn}
      createable={true}
    />
  );

  const { current } = ref;

  if (current) {
    current.handleFocus({} as any);
    const changeEvt = {
      currentTarget: {
        value: "test@test.com",
      },
      target: {
        value: "test@test.com",
      },
    };
    current.onInputChange(changeEvt as any);

    expect(current.state.search).toEqual("test@test.com");
    expect(fn).toBeCalledWith(changeEvt);
    current.renderCreate();
  } else {
    fail("No ref could be set");
  }
});

it("renders options", () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={[]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      ref={ref}
      onInputChange={fn}
    />
  );

  const { current } = ref;

  if (current) {
    current.handleFocus({} as any);
    current.renderOption({ value: "1", label: "1" });
    current.handleBlur({} as any);
  } else {
    fail("No ref could be set");
  }
});

it("selects options", () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={["test@test.test"]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      name="test"
      ref={ref}
      onChange={fn}
    />
  );

  const { current } = ref;

  current!.selectValue({
    currentTarget: { value: "test@test.test" },
    target: { value: "test@test.test" },
  } as any);
  expect(fn).toBeCalledWith({
    target: {
      name: "test",
      value: ["test@test.test"],
    },
  });
});

it("Deletes well", () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={[]}
      value={["TEST@TEST.test", "test@test.test", "test2@test.test"]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      name="test"
      ref={ref}
      onChange={fn}
    />
  );

  const { current } = ref;

  current!.handleDelete({
    currentTarget: { dataset: { value: "test@test.test" } },
    target: { value: "test@test.test" },
  } as any);
  expect(fn).toBeCalledWith({
    target: {
      name: "test",
      value: ["TEST@TEST.test", "test2@test.test"],
    },
  });
});

it("Creates well with no promise", () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={[]}
      value={["TEST@TEST.test", "test2@test.test"]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      name="test"
      ref={ref}
      onChange={fn}
    />
  );

  const { current } = ref;

  current!.createNewValue({
    currentTarget: { value: "test@test.test" },
    target: { value: "test@test.test" },
  } as any);
  expect(fn).toBeCalledWith({
    target: {
      name: "test",
      value: ["TEST@TEST.test", "test2@test.test", "test@test.test"],
    },
  });
});

it("Creates well with a promise", async () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={[]}
      value={["TEST@TEST.test", "test2@test.test"]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      onCreate={jest.fn(() => new Promise(res => res("hifranc@test.com")))}
      name="test"
      ref={ref}
      onChange={fn}
    />
  );

  const { current } = ref;

  await current!.createNewValue({
    currentTarget: { value: "test@test.test" },
    target: { value: "test@test.test" },
  } as any);
  expect(fn).toBeCalledWith({
    target: {
      name: "test",
      value: ["TEST@TEST.test", "test2@test.test", "hifranc@test.com"],
    },
  });
});

it("Creates well with a rejected promise", async () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={[]}
      value={["TEST@TEST.test", "test2@test.test"]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      onCreate={jest.fn(() => new Promise((res, rej) => rej(true)))}
      name="test"
      ref={ref}
      onChange={fn}
    />
  );

  const { current } = ref;

  await current!.createNewValue({
    currentTarget: { value: "test@test.test" },
    target: { value: "test@test.test" },
  } as any);
  expect(fn).toBeCalledTimes(0);
});

it("renders the provided placeholder", () => {
  const { queryByPlaceholderText } = render(
    <AuthorSelector
      placeholder="A placeholder"
      options={[]}
      mapEmailToAuthor={jest.fn()}
    />
  );

  const authEl = queryByPlaceholderText("A placeholder");
  if (authEl instanceof HTMLInputElement) {
    expect(authEl.placeholder).toEqual("A placeholder");
  } else {
    fail("no placeholder");
  }
});

it("Creates well with no promise and no value prop", () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={[]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      name="test"
      ref={ref}
      onChange={fn}
    />
  );

  const { current } = ref;

  current!.createNewValue({
    currentTarget: { value: "test@test.test" },
    target: { value: "test@test.test" },
  } as any);
  expect(fn).toBeCalledWith({
    target: {
      name: "test",
      value: ["test@test.test"],
    },
  });

  current!.handleDelete({
    currentTarget: { dataset: { value: "test@test.test" } },
    target: { value: "test@test.test" },
  } as any);
  expect(fn).toBeCalledWith({
    target: {
      name: "test",
      value: [],
    },
  });
});

it("Creates and deletes well with a promise and no value prop", async () => {
  const ref: React.RefObject<AuthorSelector> = React.createRef();
  const fn = jest.fn();
  render(
    <AuthorSelector
      options={[]}
      mapEmailToAuthor={email => ({
        firstName: "Hi",
        lastName: "Franc",
        mail: email,
      })}
      onCreate={jest.fn(() => new Promise(res => res("hifranc@test.com")))}
      name="test"
      ref={ref}
      onChange={fn}
    />
  );

  const { current } = ref;

  await current!.createNewValue({
    currentTarget: { value: "test@test.test" },
    target: { value: "test@test.test" },
  } as any);
  expect(fn).toBeCalledWith({
    target: {
      name: "test",
      value: ["hifranc@test.com"],
    },
  });

  await current!.handleDelete({
    currentTarget: { dataset: { value: "hifranc@test.com" } },
    target: { value: "hifranc@test.com" },
  } as any);
  expect(fn).toBeCalledWith({
    target: {
      name: "test",
      value: [],
    },
  });
});
