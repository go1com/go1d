import * as React from "react";
import View, { ViewProps } from "../View";

class Row extends React.Component<ViewProps> {
  public static displayName = "Row";

  public render() {
    return (
      <View flexDirection="row" flexGrow={1} flexShrink={1} {...this.props} />
    );
  }
}

export default Row;
