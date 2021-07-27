import * as React from "react";
import Banner, { BannerProps } from "../Banner";
import Theme from "../Theme";
import { ViewProps } from "../View";

export interface GlobalMessageProps extends ViewProps {
  status: BannerProps["type"];
  close?: BannerProps["close"];
}

const GlobalMessage: React.SFC<GlobalMessageProps> = ({ status, ...props }) => {
  return (
    <Theme.Consumer>
      {({ colors }) => (
        <Banner
          borderRadius={0}
          marginY={0}
          type={status}
          css={{
            borderLeft: "none",
            borderBottom: `4px solid ${colors[status]}`,
          }}
          {...props}
        />
      )}
    </Theme.Consumer>
  );
};

export default GlobalMessage;
