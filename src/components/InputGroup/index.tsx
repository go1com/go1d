import * as React from "react";
import Theme from "../Theme";
import View from "../View";

const InputGroup = ({ children }) => (
  <Theme.Consumer>
    {({ radius }) => {
      const css = {
        "> *": {
          borderRadius: 0,
        },
        "> :first-child": {
          borderTopLeftRadius: radius[5],
          borderBottomLeftRadius: radius[5],
        },
        "> :last-child": {
          borderTopRightRadius: radius[5],
          borderBottomRightRadius: radius[5],
        },
      };
      return (
        <View flexDirection="row" css={css}>
          {children}
        </View>
      );
    }}
  </Theme.Consumer>
);

export default InputGroup;
