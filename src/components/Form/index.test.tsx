import { Formik, FormikActions } from "formik";
import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import Field from "../Field";
import TextInput from "../TextInput";
import Form, { InternalForm } from "./index";

afterEach(cleanup);

function test(evt: React.SyntheticEvent) {
  return evt;
}

function onReset(values: any, formikActions: FormikActions<any>) {
  formikActions.resetForm();
  return {};
}

it("renders without crashing without any optional props", () => {
  render(
    <Form initialValues={{ name: "" }} onSubmit={test}>
      <Field label="name" name="name" />
    </Form>
  );
});

it("renders without crashing with disabled true", () => {
  render(
    <Form initialValues={{ name: "" }} onSubmit={test}>
      <Field label="name" name="name" />
    </Form>
  );
});

it("renders without crashing with onsubmit null", () => {
  render(
    <Form initialValues={{ name: "" }} onSubmit={null}>
      <Field label="name" name="name" />
    </Form>
  );
});

it("renders without crashing with disabled null", () => {
  render(
    <Form initialValues={{ name: "" }} onSubmit={test}>
      <Field label="name" name="name" />
    </Form>
  );
});

it("renders without crashing with internalForm", () => {
  const { container } = render(
    <Formik
      disabled={false}
      onReset={onReset}
      initialValues={{ name: "jared" }}
      onSubmit={test}
    >
      {({ handleSubmit, handleReset, status, setStatus }) => (
        <InternalForm
          status={status}
          setStatus={setStatus}
          onReset={handleReset}
          disabled={false}
          onSubmit={handleSubmit}
        >
          <Field label="name" name="name" component={TextInput} />
        </InternalForm>
      )}
    </Formik>
  );

  const form = container.querySelector("form");
  fireEvent.submit(form);
});

it("renders without crashing with internalForm onSubmit null", () => {
  const { container } = render(
    <Formik
      disabled={true}
      onReset={onReset}
      initialValues={{ name: "jared" }}
      onSubmit={null}
    >
      {({ handleSubmit, handleReset, status, setStatus }) => (
        <InternalForm
          status={status}
          setStatus={setStatus}
          onReset={handleReset}
          disabled={true}
          onSubmit={handleSubmit}
        >
          <Field label="name" name="name" component={TextInput} />
        </InternalForm>
      )}
    </Formik>
  );

  const form = container.querySelector("form");
  fireEvent.submit(form);
});

it("renders without crashing with internalForm onreset", () => {
  const { container } = render(
    <Formik
      disabled={true}
      onReset={onReset}
      initialValues={{ name: "jared" }}
      onSubmit={null}
    >
      {({ handleSubmit, handleReset, status, setStatus }) => (
        <InternalForm
          status={status}
          setStatus={setStatus}
          onReset={handleReset}
          disabled={true}
          onSubmit={handleSubmit}
        >
          <Field label="name" name="name" component={TextInput} />
          <button id="resetButton" type="reset">
            Reset
          </button>
        </InternalForm>
      )}
    </Formik>
  );

  const form = container.querySelector("button");

  fireEvent.click(form);
});
