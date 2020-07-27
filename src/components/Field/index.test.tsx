import * as React from "react";
import { cleanup, render, waitForElement } from "react-testing-library";
import Button from "../Button";
import Form from "../Form";
import Text from "../Text";
import Field from "./index";

afterEach(cleanup);

const noOp = jest.fn();

it("renders without crashing without any optional props", () => {
  const input = () => <div />;
  render(
    <Form onSubmit={noOp} initialValues={{}}>
      <Field label="label" name="name" component={input} />
    </Form>
  );
});

it("handles errors properly for entities", async () => {
  const input = () => <div />;
  const { getByText } = render(
    <Form onSubmit={noOp} initialValues={{ name: "test" }}>
      <Field
        label="label"
        name="name"
        component={input}
        // tslint:disable-next-line:jsx-no-lambda
        validate={name => {
          return name === "test" ? "Bad Name" : null;
        }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );

  getByText("Submit").parentElement.click();

  await waitForElement(() => getByText("Bad Name"));
  expect(getByText("Bad Name")).not.toBeNull();
});

it("handles errors properly for nested entities", async () => {
  const input = () => <div />;
  const { getByText } = render(
    <Form onSubmit={noOp} initialValues={{ name: { first: "test" } }}>
      <Field
        label="label"
        name="name.first"
        component={input}
        // tslint:disable-next-line:jsx-no-lambda
        validate={name => {
          return name === "test" ? "Bad Name" : null;
        }}
      />
      <Button type="submit">Submit</Button>
    </Form>
  );

  getByText("Submit").parentElement.click();

  await waitForElement(() => getByText("Bad Name"));
  expect(getByText("Bad Name")).not.toBeNull();
});

it("renders without crashing with a labelSuffix", () => {
  const input = () => <div />;
  render(
    <Form onSubmit={noOp} initialValues={{}}>
      <Field
        label="label"
        name="name"
        component={input}
        labelSuffix={<Text>test</Text>}
      />
    </Form>
  );
});

it("renders without crashing with a descriptionSuffix", () => {
  const input = () => <div />;
  render(
    <Form onSubmit={noOp} initialValues={{}}>
      <Field
        label="label"
        name="name"
        component={input}
        descriptionSuffix={<Text>test</Text>}
      />
    </Form>
  );
});
