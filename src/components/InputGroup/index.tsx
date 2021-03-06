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
          marginRight: "-1px",
          borderTopLeftRadius: radius[3],
          borderBottomLeftRadius: radius[3],
        },
        "> :last-child": {
          marginLeft: "-1px",
          borderTopRightRadius: radius[3],
          borderBottomRightRadius: radius[3],
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
