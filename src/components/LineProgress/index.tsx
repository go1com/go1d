import * as React from "react";
import { Theme } from "../..";

export interface LineProgressProps {
  percent: number;
  strokeColor?: string;
  strokeLinecap?: "butt" | "round" | "square";
  strokeWidth?: number;
  style?: object;
  trailColor?: string;
  trailWidth?: number;
  transition?: string;

  [k: string]: any;
}

export class LineProgress extends React.Component<LineProgressProps> {
  public static defaultProps: LineProgressProps = {
    percent: 0,
    strokeColor: "success",
    strokeLinecap: "round",
    strokeWidth: 1,
    style: {},
    trailColor: "subtle",
    trailWidth: 1,
    transition:
      "stroke-dashoffset 0.3s ease 0s, stroke-dasharray .3s ease 0s, stroke 0.3s linear",
  };
  public paths = {};

  public render() {
    const {
      percent,
      strokeColor,
      strokeLinecap,
      strokeWidth,
      style,
      trailColor,
      trailWidth,
      transition,
      ...restProps
    } = this.props;

    const center = strokeWidth / 2;
    const right = 100 - strokeWidth / 2;
    const pathString = `M ${strokeLinecap === "round" ? center : 0}, ${center}
           L ${strokeLinecap === "round" ? right : 100},${center}`;
    const viewBoxString = `0 0 100 ${strokeWidth}`;

    const stackPtg = 0;
    const ptg = percent;
    const pathStyle = {
      strokeDasharray: `${ptg}px, 100px`,
      strokeDashoffset: `-${stackPtg}px`,
      transition,
    };

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <svg
            viewBox={viewBoxString}
            preserveAspectRatio="none"
            style={style}
            {...restProps}
          >
            <path
              d={pathString}
              strokeLinecap={strokeLinecap}
              stroke={colors[trailColor]}
              strokeWidth={trailWidth || strokeWidth}
              strokeOpacity={0.3}
              fillOpacity="0"
            />
            <path
              d={pathString}
              strokeLinecap={strokeLinecap}
              stroke={colors[strokeColor]}
              strokeWidth={strokeWidth}
              fillOpacity="0"
              style={pathStyle}
            />
          </svg>
        )}
      </Theme.Consumer>
    );
  }
}
