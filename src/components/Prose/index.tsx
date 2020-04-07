import * as React from "react";
import * as SanitizeHTML from "sanitize-html";
import Base from "../Base";
import Button from "../Button";
import Text, { TextProps } from "../Text";
import Theme from "../Theme";
import { getStyles } from "./style";

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

const Prose: React.SFC<ProseProps> = ({
  HTML,
  fontSize = 3,
  lineHeight = "paragraph",
  lineClamp,
  expandable,
  ...props
}: ProseProps) => {
  const innerRef = React.useRef(null);
  const [isLineClamped, setIsLineClamped] = React.useState<boolean>(false);
  const [currentLineClamp, setCurrentLineClamp] = React.useState<number>(
    lineClamp
  );
  React.useEffect(() => {
    const { offsetHeight, scrollHeight } = innerRef.current;
    setIsLineClamped(offsetHeight < scrollHeight);
  }, []);

  const toggleLineClamp = () => {
    setCurrentLineClamp(currentLineClamp ? undefined : lineClamp);
  };

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
            innerRef={innerRef}
            fontSize={fontSize}
            lineHeight={lineHeight}
            lineClamp={expandable ? currentLineClamp : lineClamp}
            css={getStyles(foundations)}
            dangerouslySetInnerHTML={{
              __html: SanitizeHTML(HTML, {
                allowedTags: SanitizeHTML.defaults.allowedTags.concat([
                  "center",
                  "h2",
                  "img",
                  "iframe",
                ]),
                allowedAttributes: {
                  ...SanitizeHTML.defaults.allowedAttributes,
                  img: ["alt", "src", "title"],
                  iframe: [
                    "src",
                    "width",
                    "height",
                    "allow",
                    "allowfullscreen",
                    "frameborder",
                  ],
                },
              }),
            }}
            {...props}
          />
          {expandable && isLineClamped && (
            <Button
              color="accent"
              onClick={toggleLineClamp}
              paddingLeft={0}
              iconName={currentLineClamp ? "ChevronDown" : "ChevronUp"}
              flexDirection="row-reverse"
            >
              {`Show ${currentLineClamp ? "more" : "less"}`}
            </Button>
          )}
        </Base>
      )}
    </Theme.Consumer>
  );
};

Prose.displayName = "Prose";

export default Prose;
