import * as React from "react";

import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface ContainerProps extends ViewProps {
  contain?: "narrow" | "normal" | "wide" | "full";
}

/**
 * Containers are used to handle width and padding for components.
 */
const Container: React.SFC<ContainerProps> = ({
  contain = "full",
  children,
  ...props
}: ContainerProps) => (
  <Theme.Consumer>
    {({ type }) => (
      <View
        marginX="auto"
        maxWidth={type.measure[contain]}
        width="100%"
        {...props}
      >
        {children}
      </View>
    )}
  </Theme.Consumer>
);

export default Container;
