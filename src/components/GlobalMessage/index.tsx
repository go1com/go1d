import * as React from "react";
import Banner, { BannerProps, getColors } from "../Banner";
import Theme from "../Theme";

const GlobalMessage: React.SFC<BannerProps> = ({ status, ...props }) => {
  return (
    <Theme.Consumer>
      {({ colors }) => (
        <Banner
          borderRadius={0}
          marginY={0}
          status={status}
          css={{
            borderLeft: "none",
            borderBottom: `4px solid ${getColors(colors, status).element}`,
          }}
          {...props}
        />
      )}
    </Theme.Consumer>
  );
};

export default GlobalMessage;
