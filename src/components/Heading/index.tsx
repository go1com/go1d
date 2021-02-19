import * as React from "react";
import {
  FontFamily,
  FontWeight,
  Leading,
} from "../../foundations/foundation-types";
import Text, { TextProps } from "../Text";

export type VisualHeadingLevel =
  | "Heading 1"
  | "Heading 2"
  | "Heading 3"
  | "Heading 4"
  | "Heading 5"
  | "Heading 6";

export type SemanticHeadingElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export interface TypographyCombination {
  fontFamily: FontFamily;
  fontSize: number;
  fontWeight: FontWeight;
  lineHeight: Leading;
}

const VISUAL_HEADING_PROPS: {
  [Key in VisualHeadingLevel]: TypographyCombination;
} = {
  "Heading 1": {
    fontFamily: "serif",
    fontSize: 7,
    fontWeight: "semibold",
    lineHeight: "display",
  },
  "Heading 2": {
    fontFamily: "serif",
    fontSize: 5,
    fontWeight: "semibold",
    lineHeight: "display",
  },
  "Heading 3": {
    fontSize: 4,
    fontWeight: "bold",
    fontFamily: "sansSerif",
    lineHeight: "display",
  },
  "Heading 4": {
    fontSize: 3,
    fontWeight: "medium",
    fontFamily: "sansSerif",
    lineHeight: "display",
  },
  "Heading 5": {
    fontSize: 2,
    fontWeight: "medium",
    fontFamily: "sansSerif",
    lineHeight: "display",
  },
  "Heading 6": {
    fontSize: 1,
    fontWeight: "medium",
    fontFamily: "sansSerif",
    lineHeight: "display",
  },
};

export interface HeadingProps extends TextProps {
  children: React.ReactNode;
  semanticElement?: SemanticHeadingElements;
  visualHeadingLevel: VisualHeadingLevel;
}

const Heading = ({
  children,
  semanticElement,
  visualHeadingLevel,
  ...otherProps
}: HeadingProps) => {
  const visualHeadingProps = VISUAL_HEADING_PROPS[visualHeadingLevel];
  return (
    <Text element={semanticElement} {...visualHeadingProps} {...otherProps}>
      {children}
    </Text>
  );
};

export default Heading;
