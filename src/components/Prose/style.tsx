import { Theme as FoundationTheme } from "../../foundations/foundation-types";

export function getStyles(foundations: FoundationTheme) {
  return {
    whiteSpace: "initial",
    a: {
      color: foundations.colors.accent,
      ":hover": {
        color: foundations.colors.default,
        textDecoration: "underline",
        textDecorationColor: foundations.colors.accent,
        textUnderlinePosition: "under",
      },
      ":active": {
        color: foundations.colors.default,
        textDecoration: "underline",
        textDecorationColor: foundations.colors.default,
        textUnderlinePosition: "under",
      },
    },
    em: {
      fontStyle: "italic",
    },
    h2: {
      color: foundations.colors.contrast,
      fontWeight: foundations.type.weight.semibold,
      marginBottom: foundations.spacing[4],
      marginTop: foundations.spacing[7],
      fontSize: foundations.type.scale.lg[4],
      [foundations.breakpoints.md]: {
        fontSize: foundations.spacing[5],
      },
    },
    "h3, h4, h5, h6": {
      fontSize: foundations.type.scale.lg[3],
      marginBottom: foundations.spacing[4],
      color: foundations.colors.default,
    },
    h3: {
      color: foundations.colors.subtle,
    },
    p: {
      fontSize: foundations.type.scale.lg[3],
      marginBottom: foundations.spacing[4],
      color: foundations.colors.default,
      lineHeight: 1.5,
    },
    strong: {
      fontWeight: foundations.type.weight.bold,
    },
    ul: {
      display: "block",
      listStyle: "disc outside none",
      margin: "1em 0",
      padding: "0 0 0 40px",
      ul: {
        listStyle: "circle outside none",
        marginLeft: "15px",
      },
      ol: {
        listStyle: "lower-latin outside none",
        marginLeft: "15px",
      },
    },
    li: {
      display: "list-item",
      padding: `${foundations.spacing[2]}px 0`,
      color: foundations.colors.default,
    },
    ol: {
      display: "block",
      listStyle: "decimal outside none",
      margin: "1em 0",
      padding: "0 0 0 40px",
      ul: {
        listStyle: "circle outside none",
        marginLeft: "15px",
      },
      ol: {
        listStyle: "lower-latin outside none",
        marginLeft: "15px",
      },
    },
    u: {
      textDecoration: "underline",
      textUnderlinePosition: "under",
    },
    blockquote: {
      fontSize: foundations.type.scale.lg[4],
      marginBottom: foundations.spacing[7],
      marginTop: foundations.spacing[7],
      fontStyle: "italic",
      ":before": {
        content: "open-quote",
      },
      ":after": {
        content: "close-quote",
      },
    },
    ["code, kbd, pre, samp"]: {
      padding: "2px 4px",
      fontSize: "90%",
      color: "#c7254e",
      backgroundColor: "#f9f2f4",
      borderRadius: "4px",
    },
    pre: {
      display: "block",
      padding: "9.5px",
      margin: "0 0 10px",
      color: "#333",
      wordBreak: "break-all",
      wordWrap: "break-word",
      backgroundColor: "#f5f5f5",
      border: "1px solid #ccc",
      borderRadius: "4px",

      code: {
        fontSize: "inherit",
        color: "inherit",
        whiteSpace: "pre-wrap",
        backgroundColor: "transparent",
        borderRadius: 0,
      },
    },
  };
}
