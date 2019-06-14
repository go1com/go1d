import * as React from "react";

import View from "../View";

class OptionList extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { children } = this.props;

    return (
      <View>
        {React.Children.map(children, (child: React.ReactElement<any>) => {
          return React.cloneElement(child as React.ReactElement<any>, {
            marginBottom: 3,
          });
        })}
      </View>
    );
  }
}

export default OptionList;
