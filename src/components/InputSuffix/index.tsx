import * as React from "react";

import get = require("lodash/get");
import InputGroup from "../InputGroup";
import TextInput, { TextInputProps } from "../TextInput";
import View from "../View";

export interface InputSuffixProps extends TextInputProps {
  suffixValue: React.ReactNode;
}

class InputSuffix extends React.PureComponent<InputSuffixProps, any> {
  public render() {
    const { value, size = "md", suffixValue, ...props } = this.props;

    return (
      <InputGroup>
        <TextInput
          value={value}
          borderRadius={0}
          viewCss={{
            borderRight: "0",
            flexGrow: 1,
            flexShrink: 1,
          }}
          size={size}
          {...props}
        />
        <View
          paddingX={get({ lg: 7, md: 5, sm: 5 }, size)}
          paddingY={get({ lg: 5, md: 3, sm: 1 }, size)}
          color="subtle"
          backgroundColor="soft"
          border={1}
          borderColor="faded"
          marginRight={-1}
          css={{
            fontWeight: 600,
          }}
        >
          <View marginTop={1}>{suffixValue}</View>
        </View>
      </InputGroup>
    );
  }
}

export default InputSuffix;
