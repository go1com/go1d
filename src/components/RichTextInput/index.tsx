import * as Immutable from "immutable";
import { get, isEqual } from "lodash";
import * as React from "react";
import { Operation, Value } from "slate";
import { Editor } from "slate-react";

import Plain from "slate-plain-serializer";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import { getStyles } from "../Prose/style";
import Theme from "../Theme";
import View from "../View";
import FormatOptions from "./components/FormatOptions";

interface State {
  value: Value;
  hasFocus?: boolean;
}

export interface Props {
  placeholder?: string;
  value?: Value;
  onChange?: (
    change: { operations: Immutable.List<Operation>; value: Value }
  ) => any;
  name?: string;
  disabled?: boolean;
  id?: string;
  error?: boolean;
  borderColor?: string;
  size?: "lg" | "md" | "sm";
}

const DEFAULT_NODE = "paragraph";

class RichTextInput extends React.Component<Props, State> {
  public static defaultProps = {
    size: "md",
    value: Plain.deserialize(""),
  };

  public static getDerivedStateFromProps(props: Props, state: State) {
    const nextPropsValue = props.value;
    const stateValue = state.value;
    if (!isEqual(stateValue, nextPropsValue)) {
      return {
        value: props.value,
      };
    }
    return null;
  }

  private editor: React.RefObject<any> = React.createRef();

  constructor(props: Props) {
    super(props);

    this.state = {
      value: props.value,
    };
  }

  @autobind
  public hasBlock(type: any) {
    const { value } = this.state;
    return value.blocks
      ? value.blocks.some((node: any) => node.type === type)
      : false;
  }

  @autobind
  public hasMark(type: any) {
    const { value } = this.state;
    return value.activeMarks
      ? value.activeMarks.some((mark: any) => mark.type === type)
      : false;
  }

  @autobind
  public onClickLink(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();

    const hasLinks = this.hasLinks();

    if (hasLinks) {
      this.editor.current.unwrapInline("link");
    } else if (this.editor.current.value.selection.isExpanded) {
      const href = window.prompt("Enter the URL of the link:");

      if (href === null) {
        return;
      }

      this.editor.current.wrapInline({ type: "link", data: { href } });
      this.editor.current.moveToEnd();
    } else {
      const href = window.prompt("Enter the URL of the link:");

      if (href === null) {
        return;
      }

      const text = window.prompt("Enter the text for the link:");

      if (text === null) {
        return;
      }

      this.editor.current
        .insertText(text)
        .moveFocusBackward(text.length)
        .wrapInline({ type: "link", data: { href } })
        .moveToEnd();
    }
  }

  @autobind
  public hasLinks() {
    const { value } = this.state;
    return value.inlines
      ? value.inlines.some((inline: any) => inline.type === "link")
      : false;
  }

  @autobind
  public hasBlockCheck(type: any) {
    let isActive = this.hasBlock(type);

    if (["numbered-list", "bulleted-list"].includes(type)) {
      const {
        value: { document, blocks },
      } = this.state;

      if (blocks && blocks.size > 0) {
        const parent = document.getParent(blocks.first().key) as any;
        isActive = this.hasBlock("list-item") && parent && parent.type === type;
      }
    }
    return isActive;
  }

  @autobind
  public renderNode(props: any, editor: any, next: any) {
    const { attributes, children, node } = props;

    switch (node.type) {
      case "heading-two":
        return <h2 {...attributes}>{children}</h2>;
      case "heading-three":
        return <h3 {...attributes}>{children}</h3>;
      case "paragraph":
        return <p {...attributes}>{children}</p>;
      case "block-quote":
        return <blockquote {...attributes}>{children}</blockquote>;
      case "link":
        const { data } = node;
        const href = data.get("href");
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            {...attributes}
          >
            {children}
          </a>
        );
      case "list-item":
        return <li {...attributes}>{children}</li>;
      case "numbered-list":
        return <ol {...attributes}>{children}</ol>;
      case "bulleted-list":
        return <ul {...attributes}>{children}</ul>;

      default:
        return next();
    }
  }

  @autobind
  public renderMark(props: any, editor: any, next: any) {
    const { children, mark, attributes } = props;

    // add rest
    switch (mark.type) {
      case "bold":
        return <strong {...attributes}>{children}</strong>;
      case "italic":
        return <em {...attributes}>{children}</em>;
      case "strikethrough":
        return <s {...attributes}>{children}</s>;
      default:
        return next();
    }
  }

  @autobind
  public onChange({
    operations,
    value,
  }: {
    operations: Immutable.List<Operation>;
    value: Value;
  }) {
    if (!isEqual(this.state.value, value)) {
      const { name } = this.props;
      safeInvoke(this.props.onChange, {
        target: { value, name },
      });
      this.setState({ value });
    }
  }

  @autobind
  public onClickMarked(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();
    this.editor.current.toggleMark(event.currentTarget.dataset.value);
  }

  @autobind
  public onClickBlock(event: React.SyntheticEvent<HTMLButtonElement>) {
    event.preventDefault();

    const { editor } = this;
    const { value } = editor.current!;
    const { document } = value;
    const type = event.currentTarget.dataset.value;

    // Handle everything but list buttons.
    if (type !== "bulleted-list" && type !== "numbered-list") {
      const isActive = this.hasBlock(type);
      const isList = this.hasBlock("list-item");

      if (isList) {
        editor.current
          .setBlocks(isActive ? DEFAULT_NODE : type)
          .unwrapBlock("bulleted-list")
          .unwrapBlock("numbered-list");
      } else {
        editor.current.setBlocks(isActive ? DEFAULT_NODE : type);
      }
    } else {
      // Handle the extra wrapping required for list buttons.
      const isList = this.hasBlock("list-item");
      const isType = value.blocks
        ? value.blocks.some((block: any) => {
            return !!document.getClosest(
              block.key,
              (parent: any) => parent.type === type
            );
          })
        : false;

      if (isList && isType) {
        editor.current
          .setBlocks(DEFAULT_NODE)
          .unwrapBlock("bulleted-list")
          .unwrapBlock("numbered-list");
      } else if (isList) {
        editor.current
          .unwrapBlock(
            type === "bulleted-list" ? "numbered-list" : "bulleted-list"
          )
          .wrapBlock(type);
      } else {
        editor.current.setBlocks("list-item").wrapBlock(type);
      }
    }
  }

  public shouldComponentUpdate(nextProps: Props, nextState: State) {
    if (isEqual(nextState.value, this.state.value)) {
      return false;
    } else {
      return true;
    }
  }

  @autobind
  public onFocus(event: any, editor: any, next: any) {
    this.setState({ hasFocus: true });
  }

  @autobind
  public onBlur(event: any, editor: any, next: any) {
    this.setState({ hasFocus: false });
  }

  @autobind
  public getBorderColor() {
    const { error, borderColor } = this.props;
    const { hasFocus } = this.state;

    if (error) {
      return "danger";
    }
    if (hasFocus) {
      return "accent";
    }

    return borderColor ? borderColor : "soft";
  }

  public render() {
    const { id, disabled, size } = this.props;

    return (
      <Theme.Consumer>
        {foundations => (
          <View
            backgroundColor="background"
            border={1}
            borderColor={this.getBorderColor()}
            boxShadow="inner"
            htmlFor={id}
            opacity={disabled ? "disabled" : null}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            css={getStyles(foundations)}
            data-testid="editorContainer"
          >
            <View paddingX={4} paddingY={get({ lg: 3, md: 3, sm: 2 }, size)}>
              <Editor
                spellCheck={false}
                autoFocus={true}
                placeholder={this.props.placeholder}
                ref={this.editor}
                value={this.state.value || Plain.deserialize("")}
                onChange={this.onChange}
                renderNode={this.renderNode}
                renderMark={this.renderMark}
              />
            </View>
            <FormatOptions
              onClickBlock={this.onClickBlock}
              onClickMarked={this.onClickMarked}
              onClickLink={this.onClickLink}
              blockActive={this.hasBlockCheck}
              markActive={this.hasMark}
              linkActive={this.hasLinks}
            />
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default RichTextInput;
