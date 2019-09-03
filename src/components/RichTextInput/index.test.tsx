import * as React from "react";
import { cleanup, fireEvent, render } from "react-testing-library";
import { Value, ValueJSON } from "slate";
import Plain from "slate-plain-serializer";
import RichTextInput from "../RichTextInput";

afterEach(cleanup);

declare var global: any;

const value: ValueJSON = {
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "This is editable ",
              },
              {
                text: "rich",
                marks: [
                  {
                    type: "bold",
                  },
                ],
              },
              {
                text: "underlined",
                marks: [
                  {
                    type: "underline",
                  },
                ],
              },
              {
                text: "striked",
                marks: [
                  {
                    type: "strikethrough",
                  },
                ],
              },
              {
                text: " text, ",
              },
              {
                text: "much",
                marks: [
                  {
                    type: "italic",
                  },
                ],
              },
              {
                text: " better than a ",
              },
              {
                text: "<textarea>",
                marks: [
                  {
                    type: "code",
                  },
                ],
              },
              {
                text: "!",
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text:
                  "Since it's rich text, you can do things like turn a selection of text ",
              },
              {
                text: "bold",
                marks: [
                  {
                    type: "bold",
                  },
                ],
              },
              {
                text:
                  ", or add a semantically rendered block quote in the middle of the page, like this:",
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "block-quote",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "A wise quote.",
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "heading-two",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "A wise heading two.",
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "heading-three",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "A wise heading three.",
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "Try it out for yourself!",
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "inline",
            type: "link",
            data: {
              href: "asd",
            },
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    object: "leaf",
                    text: "asd",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "numbered-list",
        nodes: [
          {
            object: "block",
            type: "list-item",
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    text: "Item 1",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        object: "block",
        type: "bulleted-list",
        nodes: [
          {
            object: "block",
            type: "list-item",
            nodes: [
              {
                object: "text",
                leaves: [
                  {
                    text: "Item do",
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
} as ValueJSON;

beforeEach(() => {
  global.window.getSelection = () => {
    return {
      removeAllRanges: jest.fn(),
    };
  };
  global.window.prompt = () => {
    return "http://go1.com";
  };
});

it("renders without crashing without any optional props", () => {
  render(<RichTextInput />);
});

it("shows all format options", () => {
  const { getByTestId } = render(
    <RichTextInput
      h2FormatOption={true}
      h3FormatOption={true}
      boldFormatOption={true}
      italicFormatOption={true}
      underlineFormatOption={true}
      strikethroughFormatOption={true}
      blockquoteFormatOption={true}
      linkFormatOption={true}
      numberedListFormatOption={true}
      bulletListFormatOption={true}
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
});

it("hides all format options", () => {
  const { queryByTestId } = render(
    <RichTextInput
      h2FormatOption={false}
      h3FormatOption={false}
      boldFormatOption={false}
      italicFormatOption={false}
      underlineFormatOption={false}
      strikethroughFormatOption={false}
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

it("clicks heading two", () => {
  const { getByTestId } = render(<RichTextInput />);

  fireEvent.click(getByTestId("blockHeadingTwo"));
});

it("clicks bold", () => {
  const { getByTestId } = render(<RichTextInput />);

  fireEvent.click(getByTestId("markBold"));
});

it("clicks underline", () => {
  const { getByTestId } = render(<RichTextInput />);

  fireEvent.click(getByTestId("markUnderline"));
});

it("clicks link", () => {
  const { getByTestId } = render(<RichTextInput />);
  const evt = { preventDefault: jest.fn() };

  fireEvent.click(getByTestId("inlineLink"), evt);
});

it("renders with error", () => {
  render(<RichTextInput error={true} />);
});

it("renders with focus", () => {
  const { getByTestId } = render(<RichTextInput />);

  fireEvent.focus(getByTestId("editorContainer"));
});

it("handles blur", () => {
  const { getByTestId } = render(<RichTextInput />);

  fireEvent.blur(getByTestId("editorContainer"));
});

it("handles plain serializer", () => {
  render(<RichTextInput value={Plain.deserialize("A value")} />);
});

it("handles updates prop", () => {
  const { container } = render(
    <RichTextInput value={Plain.deserialize("A value")} />
  );

  render(<RichTextInput value={Plain.deserialize("New value")} />, {
    container,
  });
});

it("handles same props", () => {
  const { container } = render(
    <RichTextInput value={Plain.deserialize("A value")} />
  );

  render(<RichTextInput value={Plain.deserialize("A value")} />, {
    container,
  });
});

it("handles disabled prop", () => {
  render(<RichTextInput disabled={true} />);
});

it("handles border on focus", () => {
  const { container, getByTestId } = render(
    <RichTextInput value={Plain.deserialize("A value")} />
  );

  fireEvent.focus(getByTestId("editorContainer"));

  render(<RichTextInput value={Plain.deserialize("A value")} />, {
    container,
  });
});

it("renders marks", () => {
  const { getByTestId, container } = render(
    <RichTextInput value={Value.fromJSON(value)} />
  );

  fireEvent.click(getByTestId("blockHeadingTwo"));
  fireEvent.click(getByTestId("inlineLink"));

  render(<RichTextInput value={Value.fromJSON(value)} />, {
    container,
  });
});
