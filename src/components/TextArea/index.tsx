import * as React from "react";
import TextInput, { TextInputProps } from "../TextInput";

export interface TextAreaProps extends TextInputProps {
  multiline?: number;
}

class TextArea extends React.Component<TextAreaProps, any> {
  public static displayName = "TextArea";

  public static defaultProps = {
    multiline: 3,
  };

  public render() {
    const { css, ...props } = this.props;
    return (
      <TextInput
        type="textarea"
        css={[
          {
            resize: "vertical",
            maxHeight: "none",
          },
          css,
        ]}
        {...props}
      />
    );
  }
}

export default TextArea;
