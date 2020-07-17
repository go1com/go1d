import { Interpolation } from "emotion";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import applySpacing from "../../utils/applySpacing";
import { autobind } from "../../utils/decorators";
import Portal from "../Portal";
import Text from "../Text";
import Theme from "../Theme";
import View from "../View";

export interface TooltipProps {
  placement?: "top" | "right" | "bottom" | "left";
  mode?: "hover" | "click" | "always";
  tip: React.ReactNode;
  children: React.ReactNode | ((params: any) => React.ReactNode); // this doesn't work
}

function generateArrowCSS(p, s, colors): Interpolation {
  let arrowCSS = {};
  let arrowCSSBefore = {};

  if (p === "top") {
    arrowCSS = {
      bottom: 0,
      left: 0,
      marginBottom: applySpacing(s, -3),
    };
    arrowCSSBefore = {
      borderBottomWidth: 0,
      borderTopColor: colors.default,
    };
  }
  if (p === "bottom") {
    arrowCSS = {
      top: 0,
      left: 0,
      marginTop: applySpacing(s, -3),
    };
    arrowCSSBefore = {
      borderTopWidth: 0,
      borderBottomColor: colors.default,
    };
  }
  if (p === "right") {
    arrowCSS = {
      left: 0,
      marginLeft: applySpacing(s, -3),
    };
    arrowCSSBefore = {
      borderLeftWidth: 0,
      borderRightColor: colors.default,
    };
  }
  if (p === "left") {
    arrowCSS = {
      right: 0,
      marginRight: applySpacing(s, -3),
    };
    arrowCSSBefore = {
      borderRightWidth: 0,
      borderLeftColor: colors.default,
    };
  }
  return {
    position: "absolute",
    ...arrowCSS,
    "&::before": {
      content: '" "',
      margin: "auto",
      display: "block",
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderColor: "transparent",
      borderWidth: applySpacing(s, 3),
      borderRadius: 1,
      ...arrowCSSBefore,
    },
  };
}

class Tooltip extends React.Component<TooltipProps, any> {
  public static defaultProps = {
    placement: "top",
    mode: "hover",
  };

  private scheduleUpdate?: () => void;

  constructor(props) {
    super(props);
    this.state = { visible: props.mode === "always" };
  }

  @autobind
  public showTooltip() {
    this.setState({ visible: true });
  }

  @autobind
  public hideTooltip() {
    this.setState({ visible: false });
  }

  @autobind
  public toggleTooltip() {
    this.setState(({ visible }) => ({
      visible: !visible,
    }));
  }

  @autobind
  public getEventProps() {
    const { mode } = this.props;

    if (mode === "hover") {
      return {
        onMouseOver: this.showTooltip,
        onMouseOut: this.hideTooltip,
      };
    } else if (mode === "click") {
      return {
        onClick: this.toggleTooltip,
      };
    }
  }

  public componentDidUpdate() {
    if (this.scheduleUpdate) {
      this.scheduleUpdate();
    }
  }

  public render() {
    const { placement, tip, children } = this.props;

    let render = null;
    if (typeof children === "function") {
      render = children as ((params: any) => React.ReactNode);
    }

    return (
      <Theme.Consumer>
        {({ spacing: s, colors }) => (
          <Manager>
            <Reference>
              {({ ref }) =>
                render ? (
                  render({ ref, getEventProps: this.getEventProps })
                ) : (
                  <span
                    ref={ref}
                    {...this.getEventProps()}
                    data-testid="tooltip-span"
                  >
                    {children}
                  </span>
                )
              }
            </Reference>
            {this.state.visible && (
              <Popper placement={placement}>
                {({ ref, style, placement: p, arrowProps, scheduleUpdate }) => {
                  this.scheduleUpdate = scheduleUpdate;
                  return (
                    <Portal>
                      <View
                        innerRef={ref}
                        style={style}
                        backgroundColor="default"
                        paddingY={3}
                        paddingX={4}
                        borderRadius={2}
                        margin={3}
                        transition="none"
                        boxShadow="soft"
                        zIndex="tooltip"
                        role="tooltip"
                        data-testid="tooltip"
                      >
                        <Text color="background">{tip}</Text>
                        <View
                          css={generateArrowCSS(p, s, colors)}
                          innerRef={arrowProps.ref}
                          style={arrowProps.style}
                          transition="none"
                        />
                      </View>
                    </Portal>
                  );
                }}
              </Popper>
            )}
          </Manager>
        )}
      </Theme.Consumer>
    );
  }
}

export default Tooltip;
