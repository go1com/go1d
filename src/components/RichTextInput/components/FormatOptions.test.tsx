import * as React from "react";
import { cleanup, render } from "react-testing-library";
import FormatOptions from "./FormatOptions";

afterEach(cleanup);

const fn = jest.fn();

it("renders without crashing without any optional props", () => {
  const { getByTestId } = render(
    <FormatOptions
      onClickBlock={fn}
      onClickMarked={fn}
      onClickLink={fn}
      onInsertText={fn}
      blockActive={fn}
      markActive={fn}
      linkActive={fn}
      boldFormatOption={true}
      italicFormatOption={true}
      underlineFormatOption={true}
      strikethroughFormatOption={true}
      h2FormatOption={true}
      h3FormatOption={true}
      blockquoteFormatOption={true}
      linkFormatOption={true}
      numberedListFormatOption={true}
      bulletListFormatOption={true}
      dynamicValues={[
        {
          label: "First name",
          value: "!first_name",
        },
      ]}
    />
  );

  // check that each of the format buttons are rendered
  const h2FormatOption = getByTestId("blockHeadingTwo");
  expect(h2FormatOption).toBeDefined();
  const h3FormatOption = getByTestId("blockHeadingThree");
  expect(h3FormatOption).toBeDefined();
  const boldFormatOption = getByTestId("markBold");
  expect(boldFormatOption).toBeDefined();
  const italicFormatOption = getByTestId("markItalic");
  expect(italicFormatOption).toBeDefined();
  const underlineFormatOption = getByTestId("markUnderline");
  expect(underlineFormatOption).toBeDefined();
  const strikethroughFormatOption = getByTestId("markStrikethrough");
  expect(strikethroughFormatOption).toBeDefined();
  const blockquoteFormatOption = getByTestId("blockBlockquote");
  expect(blockquoteFormatOption).toBeDefined();
  const linkFormatOption = getByTestId("inlineLink");
  expect(linkFormatOption).toBeDefined();
  const numberedListFormatOption = getByTestId("blockNumberedList");
  expect(numberedListFormatOption).toBeDefined();
  const bulletListFormatOption = getByTestId("blockBulletedList");
  expect(bulletListFormatOption).toBeDefined();
  const dynamicValuesButton = getByTestId("dynamicValuesButton");
  expect(dynamicValuesButton).toBeDefined();
});

it("renders without crashing hiding all formatOptions", () => {
  const { queryByTestId } = render(
    <FormatOptions
      onClickBlock={fn}
      onClickMarked={fn}
      onClickLink={fn}
      onInsertText={fn}
      blockActive={fn}
      markActive={fn}
      linkActive={fn}
      boldFormatOption={false}
      italicFormatOption={false}
      underlineFormatOption={false}
      strikethroughFormatOption={false}
      h2FormatOption={false}
      h3FormatOption={false}
      blockquoteFormatOption={false}
      linkFormatOption={false}
      numberedListFormatOption={false}
      bulletListFormatOption={false}
    />
  );

  // check that each of the format buttons is not rendered
  expect(queryByTestId("blockHeadingTwo")).toBeNull();
  expect(queryByTestId("blockHeadingThree")).toBeNull();
  expect(queryByTestId("boldFormatOption")).toBeNull();
  expect(queryByTestId("markItalic")).toBeNull();
  expect(queryByTestId("markUnderline")).toBeNull();
  expect(queryByTestId("markStrikethrough")).toBeNull();
  expect(queryByTestId("blockBlockquote")).toBeNull();
  expect(queryByTestId("inlineLink")).toBeNull();
  expect(queryByTestId("blockNumberedList")).toBeNull();
  expect(queryByTestId("blockBulletedList")).toBeNull();
});
