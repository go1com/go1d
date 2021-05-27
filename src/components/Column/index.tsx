import * as React from "react";
import View, { ViewProps } from "../View";

class Column extends React.Component<ViewProps> {
  public static displayName = "Column";

  public render() {
    return (
      <View
        flexDirection="column"
        flexGrow={1}
        flexShrink={1}
        {...this.props}
      />
    );
  }
}

export default Column;
