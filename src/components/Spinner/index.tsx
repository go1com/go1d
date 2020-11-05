import { keyframes } from "emotion";
import * as React from "react";
import Theme from "../Theme";
import View, { ViewProps } from "../View";
import VisuallyHidden from "../VisuallyHidden";

// This returns an animation
const clip = keyframes`
  0% {transform: rotate(0deg) scale(1)} 
  50% {transform: rotate(180deg) scale(0.8)}
  100% {transform: rotate(360deg) scale(1)}
`;

class Spinner extends React.Component<ViewProps> {
  public static defaultProps = {
    color: "accent",
  };

  public render() {
    const { size, color, css: propCss, ...props } = this.props;
    return (
      <Theme.Consumer>
        {({ type, breakpoints }) => (
          <View role="status">
            <VisuallyHidden>Loading</VisuallyHidden>
            <View
              borderColor={color}
              border={2}
              display="inline-block"
              background="transparent"
              css={[
                {
                  "border-radius": "100%",
                  "border-bottom-color": "transparent",
                  animation: `${clip} 0.75s 0s infinite linear`,
                  "animation-fill-mode": "both",
                },
                Object.keys(breakpoints).reduce(
                  (acc, bpKey) => ({
                    ...acc,
                    [breakpoints[bpKey]]: {
                      width: type.scale[bpKey][size] || "1em",
                      height: type.scale[bpKey][size] || "1em",
                    },
                  }),
                  {}
                ),
                propCss,
              ]}
              {...props}
            />
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default Spinner;
