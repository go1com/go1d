import { css as emotion } from "emotion";
import * as React from "react";
import { darken } from "../../foundations";
import { LinkContext } from "../Provider";
import Theme from "../Theme";
import View from "../View";

export interface LinkProps {
  children: React.ReactNode;
  css?: any;
  href: any;
  hoverFocusColor?: string;
  activeColor?: string;
  // Allow for custom link props
  [key: string]: any;
}

const Link = ({
  children,
  css,
  hoverFocusColor = "accent",
  activeColor,
  ...props
}: LinkProps) => {
  return (
    <Theme.Consumer>
      {({ colors }) => (
        <LinkContext.Consumer>
          {LinkComponent => {
            const defaultCss = {
              textDecoration: "none",
              display: "inline-flex",
              ":hover, :focus": {
                "svg, span": {
                  color: colors[hoverFocusColor],
                },
              },
              ":active": {
                "svg, span": {
                  color: activeColor
                    ? colors[activeColor]
                    : darken(colors.accent, 0.4),
                },
              },
            };
            if (LinkComponent) {
              return (
                <LinkComponent className={emotion(defaultCss, css)} {...props}>
                  {children}
                </LinkComponent>
              );
            } else {
              return (
                <View element="a" css={{ ...defaultCss, ...css }} {...props}>
                  {children}
                </View>
              );
            }
          }}
        </LinkContext.Consumer>
      )}
    </Theme.Consumer>
  );
};

export default Link;
