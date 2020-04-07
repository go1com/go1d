import * as React from "react";
import { cleanup, render } from "react-testing-library";
import FileUploader from "./index";
import Form from "../Form";
import Field from "../Field";

afterEach(cleanup);
jest.mock("react-dropzone", () => ({
  default: (props: any) =>
    props.children({
      open: jest.fn(),
      getRootProps: jest.fn(() => ({})),
      getInputProps: jest.fn(() => ({})),
    }),
}));

const submit = jest.fn();
const onChange = jest.fn();
const uploadComplete = jest.fn();
const upload = (file: File): Promise<string> => new Promise((resolve, reject) => {
  return resolve("a url");
});

it("renders no file state", () => {
  render(
    <FileUploader
      formik={{ values: { data: {} } }}
      name="test"
      acceptedFileExts=".zip"
      uploadProgress={0}
      upload={upload}
      description={"picklerick"}
      iconName="Document"
      uploadComplete={uploadComplete}
      onChange={onChange}
      value={null}
    />
  );
});

it("renders in progress state", () => {
  render(
    <FileUploader
      formik={{ values: { data: {} } }}
      name="test"
      acceptedFileExts=".zip"
      uploadProgress={50}
      upload={upload}
      description={"picklerick"}
      iconName="Document"
      uploadComplete={uploadComplete}
      onChange={onChange}
      value={null}
    />
  );
});

it("renders completed upload", () => {
  render(
    <FileUploader
      formik={{ values: { data: {} } }}
      name="test"
      acceptedFileExts=".zip"
      uploadProgress={100}
      upload={upload}
      description={"picklerick"}
      iconName="Document"
      uploadComplete={uploadComplete}
      onChange={onChange}
      value={null}
    />
  );
});

it("renders value given", () => {
  render(
    <FileUploader
      formik={{ values: { data: {} } }}
      name="test"
      acceptedFileExts=".zip"
      uploadProgress={100}
      upload={upload}
      description={"picklerick"}
      iconName="Document"
      uploadComplete={uploadComplete}
      onChange={onChange}
      value={"a url"}
    />
  );
});

it("renders inside a form", () => {
  render(
    <Form
      initialValues={{
        test: 'a url'
      }}
      onSubmit={submit}
    >
      <Field 
        name="test"
        label="File Upload"
        component={FileUploader}
        description={"picklerick"}
        iconName="Document"
        upload={upload}
        uploadComplete={uploadComplete}
        acceptedFileExts=".zip"
      />
    </Form>
  );
});
