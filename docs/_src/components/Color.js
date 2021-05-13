import React from "react";
import { View, Text, Theme } from "../../../src/";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }

  mouseOver = () => {
    this.setState({ hover: true });
  };

  mouseOut = () => {
    this.setState({ hover: false });
  };

  copyToClipboard = () => {
    const textArea = document.createElement("textarea");
    textArea.style.position = "fixed";
    textArea.style.top = 0;
    textArea.style.left = 0;
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = 0;
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.value = this.props.color;

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
    } catch (err) {
      console.log("Oops, unable to copy");
    }

    document.body.removeChild(textArea);
  };

  render() {
    const { color, ...props } = this.props;
    const { hover } = this.state;

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <View
            borderRadius={2}
            width="140"
            boxShadow={hover ? "strong" : "soft"}
            overflow="hidden"
            onMouseOver={this.mouseOver}
            onMouseOut={this.mouseOut}
            onClick={this.copyToClipboard}
            {...props}
          >
            <View backgroundColor={color} height="144" width="100%" />
            <View mode="light" padding={4} backgroundColor="background">
              <Text fontSize={1} fontWeight="semibold" fontFamily="mono">
                {color}
              </Text>
              <Text
                fontSize={1}
                fontWeight="semibold"
                fontFamily="mono"
                color="subtle"
              >
                {colors[color]}
              </Text>
            </View>
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default Color;
