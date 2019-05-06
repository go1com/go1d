import * as React from "react";
import View from "../../View";

export default class PureWrapper extends React.PureComponent<any, any> {
  public render() {
    return <View {...this.props} />;
  }
}
