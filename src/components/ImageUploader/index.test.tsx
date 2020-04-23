import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ImageUploader from ".";
import * as utils from "./utils";

afterEach(cleanup);
jest.mock("react-dropzone", () => ({
  default: props =>
    props.children({
      open: jest.fn(),
      getRootProps: jest.fn(() => ({})),
      getInputProps: jest.fn(() => ({})),
    }),
}));

beforeAll(() => {
  // shim static URL methods which are unsupported in jsdom
  // tslint:disable
  const noop = () => {};

  if (typeof window.URL.createObjectURL === "undefined") {
    Object.defineProperty(window.URL, "createObjectURL", { value: noop });
  }
  if (typeof window.URL.revokeObjectURL === "undefined") {
    Object.defineProperty(window.URL, "revokeObjectURL", { value: noop });
  }
});

it("Renders without crashing", () => {
  render(<ImageUploader />);
});

it("can add an image", () => {
  const fn = jest.fn();
  const ref: React.RefObject<any> = React.createRef();
  // tslint:disable-next-line:no-string-literal
  global["URL"] = { revokeObjectURL: fn, createObjectURL: fn };
  render(
    <ImageUploader onChange={fn} name="test" value="An image" ref={ref} />
  );

  const file = new File(["(⌐□_□)"], "chucknorris.png", {
    type: "image/png",
  });

  if (ref.current) {
    ref.current.onChange([file]);
    expect(fn).toBeCalledWith({ target: { name: "test", value: file } });
  } else {
    fail("ref could not be set");
  }
});

it("can delete an image", () => {
  const fn = jest.fn();
  const ref: React.RefObject<any> = React.createRef();
  // tslint:disable-next-line:no-string-literal
  global["URL"] = { revokeObjectURL: fn };
  render(
    <ImageUploader onChange={fn} name="test" value="An image" ref={ref} />
  );

  if (ref.current) {
    ref.current.removeImage();
    expect(fn).toBeCalledWith({ target: { name: "test", value: "" } });
  } else {
    fail("ref could not be set");
  }
});

it("renders the provided placeholder", () => {
  const { queryByText } = render(<ImageUploader uploadText="A uploadText" />);

  const uploadEl = queryByText("A uploadText");
  if (uploadEl instanceof HTMLSpanElement) {
    expect(uploadEl.textContent).toEqual("A uploadText");
  } else {
    fail("no placeholder");
  }
});

it("renders with crop and call onCrop properly after uploaded", async () => {
  const file = new File(["(⌐□_□)"], "chucknorris.png", {
    type: "image/png",
  });

  jest.spyOn(utils, "getCroppedImg").mockResolvedValue(file as any);

  const ref = React.createRef<ImageUploader>();
  const onCrop = jest.fn();

  const { getByTestId } = render(
    <ImageUploader
      ref={ref}
      value="http://cdn.go1/logo.png"
      allowCrop={true}
      cropConfig={{ aspect: 18 / 9, onCrop }}
    />
  );

  const zoom = getByTestId("cropZoom");

  expect(zoom).toBeDefined();

  const instance = ref.current;

  await instance.setCroppedAreaPixels(
    {},
    {
      width: 16,
      height: 9,
      x: 0,
      y: 1,
    }
  );

  expect(onCrop).toHaveBeenCalledWith(file);
});
