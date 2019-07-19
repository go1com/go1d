import * as React from "react";
import Theme from "../Theme";

export interface CircleProgressProps {
  progress: number;
  showProgress?: boolean;
  bgColor?: string;
  progressColor?: string;
  size?: string;
  lineWidth?: string;
  roundedStroke?: boolean;
  responsive?: boolean;
  getText?: (progress: number) => string;
}

const radius = 175;
const diameter = Math.round(Math.PI * radius * 2);
const getOffset = (val = 0) =>
  Math.round(((100 - Math.min(val, 100)) / 100) * diameter);

class CircleProgress extends React.Component<CircleProgressProps> {
  public static displayName = "CircleProgress";

  public static defaultProps: CircleProgressProps = {
    progress: 0,
    showProgress: true,
    size: "100",
    lineWidth: "25",
    getText: value => `${value}%`,
  };

  public render() {
    return (
      <Theme.Consumer>
        {({ colors }) => {
          const {
            progress,
            size,
            bgColor = colors.muted,
            progressColor = colors.accent,
            lineWidth,
            roundedStroke,
            responsive,
          } = this.props;

          const strokeDashoffset = getOffset(progress);
          const transition = `stroke-dashoffset 1s ease-out`;
          const strokeLinecap = roundedStroke ? "round" : "butt";
          const svgSize = responsive ? "100%" : size;

          return (
            <svg width={svgSize} height={svgSize} viewBox="-25 -25 400 400">
              <circle
                stroke={bgColor}
                cx="175"
                cy="175"
                r="175"
                strokeWidth={lineWidth}
                fill="none"
              />
              <circle
                stroke={progressColor}
                transform="rotate(-90 175 175)"
                cx="175"
                cy="175"
                r="175"
                strokeDasharray="1100"
                strokeWidth={lineWidth}
                strokeDashoffset="1100"
                strokeLinecap={strokeLinecap}
                fill="none"
                style={{ strokeDashoffset, transition }}
              />
              {this.text()}
            </svg>
          );
        }}
      </Theme.Consumer>
    );
  }

  private text = () => {
    const { progress, showProgress: showPercentage } = this.props;

    if (!showPercentage) {
      return;
    }

    return (
      <text
        x={radius}
        y={radius}
        textAnchor="middle"
        dominantBaseline="central"
        style={{ fontSize: "4rem" }}
      >
        {this.props.getText(progress)}
      </text>
    );
  };
}

export default CircleProgress;
