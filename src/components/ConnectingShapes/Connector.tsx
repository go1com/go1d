import * as React from "react";
import { spacing } from "../../foundations";
import Theme from "../Theme";

export interface Props {
  space?: number;
  size?: number;
  fillColor?: string;
  strokeColor?: string;
  isVertical?: boolean;
  idCustom?: string;
  borderShape?: number;
}

const ConnectorShapes = ({
  space = 5,
  size = 4,
  fillColor = "transparent",
  strokeColor = fillColor,
  isVertical = true,
  idCustom = "standard",
  borderShape = 2,
}: Props) => {
  const actualSpace = spacing[space];
  const actualSize = spacing[size] + spacing[space];
  const width = isVertical ? actualSize : actualSpace;
  const height = isVertical ? actualSpace : actualSize;
  const radius = actualSpace / 2;
  const strokeWidth = borderShape * 2;
  const connectorType =
    (isVertical ? "connector_" : "connector_reverse_") + idCustom;
  return (
    <Theme.Consumer>
      {({ colors }) => (
        <svg
          style={{ margin: `-${borderShape}px`, zIndex: 200 }}
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
        >
          <mask id={connectorType}>
            <rect x="0" y="0" width={width} height={height} fill="white" />
            <circle
              cx={isVertical ? actualSize : radius}
              cy={isVertical ? radius : 0}
              r={radius}
            />
            <circle
              cx={isVertical ? 0 : radius}
              cy={isVertical ? radius : actualSize}
              r={radius}
            />
          </mask>
          <circle
            cx={isVertical ? actualSize : radius}
            cy={isVertical ? radius : 0}
            r={radius}
            fill="none"
            stroke={colors[strokeColor]}
            strokeWidth={strokeWidth}
          />
          <circle
            cx={isVertical ? 0 : radius}
            cy={isVertical ? radius : actualSize}
            r={radius}
            fill="none"
            stroke={colors[strokeColor]}
            strokeWidth={strokeWidth}
          />
          <rect
            x="0"
            y="0"
            width={width}
            height={height}
            fill={colors[fillColor]}
            mask={`url(#${connectorType})`}
          />
        </svg>
      )}
    </Theme.Consumer>
  );
};

export default ConnectorShapes;
