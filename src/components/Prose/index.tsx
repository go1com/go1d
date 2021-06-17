import * as React from "react";
import * as XSS from "xss";
import Base from "../Base";
import Button from "../Button";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import { getStyles } from "./style";

import IconChevronDown from "../Icons/ChevronDown";
import ChevronUpcon from "../Icons/ChevronUp";

export interface ProseProps extends TextProps {
  HTML?: string;
  expandable?: boolean;
}

function transformHeightFromFont(fontSize: number) {
  switch (fontSize) {
    case 3:
      return 2;
    case 2:
      return 1.7;
    case 1:
      return 1.5;
    default:
      return 2;
  }
}

function transformMarginBottomFromFont(fontSize: number) {
  switch (fontSize) {
    case 3:
      return 1;
    case 2:
      return 1.5;
    case 1:
      return 2;
    default:
      return 1;
  }
}

interface State {
  isLineClamped: boolean;
  currentLineClamp: number;
}

/**
 * Prose sanitizes HTML and wraps it into a Text component. All text in our apps should be wrapped in a Text component.
 */
class Prose extends React.Component<ProseProps, State> {
  public static displayName = "Prose";

  private innerRef = React.createRef<HTMLElement>();

  constructor(props: ProseProps) {
    super(props);
    this.state = {
      isLineClamped: false,
      currentLineClamp: props.lineClamp,
    };
  }

  public componentDidMount() {
    const { offsetHeight, scrollHeight } = this.innerRef.current;
    this.setState({
      isLineClamped: offsetHeight < scrollHeight,
    });
  }

  public render() {
    const {
      HTML,
      fontSize = 3,
      lineHeight = "paragraph",
      lineClamp,
      expandable,
      css = {},
      ...props
    } = this.props;
    const { isLineClamped, currentLineClamp } = this.state;
    return (
      <Theme.Consumer>
        {foundations => (
          <Base
            css={{
              a: {
                "&:hover:after, &:focus:after": {
                  content: "''",
                  height: Array.isArray(fontSize)
                    ? fontSize.map(transformHeightFromFont)
                    : transformHeightFromFont(fontSize),
                  background: foundations.colors.accent,
                  width: "100%",
                  position: "relative",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  marginBottom: Array.isArray(fontSize)
                    ? fontSize.map(transformMarginBottomFromFont)
                    : transformMarginBottomFromFont(fontSize),
                },
                "&:active:after": {
                  background: foundations.colors.contrast,
                },
              },
            }}
          >
            <Text
              innerRef={this.innerRef}
              fontSize={fontSize}
              lineHeight={lineHeight}
              lineClamp={expandable ? currentLineClamp : lineClamp}
              css={{
                ...getStyles(foundations),
                ...css,
              }}
              {...props}
              dangerouslySetInnerHTML={{
                __html: XSS.filterXSS(HTML),
              }}
            />
            {expandable && isLineClamped && (
              <Button
                color="accent"
                onClick={this.toggleLineClamp}
                paddingLeft={0}
                icon={currentLineClamp ? IconChevronDown : ChevronUpcon}
                flexDirection="row-reverse"
              >
                {`Show ${currentLineClamp ? "more" : "less"}`}
              </Button>
            )}
          </Base>
        )}
      </Theme.Consumer>
    );
  }

  private toggleLineClamp = () => {
    const { lineClamp } = this.props;
    this.setState(({ currentLineClamp }) => ({
      currentLineClamp: currentLineClamp ? undefined : lineClamp,
    }));
  };
}

export default Prose;
