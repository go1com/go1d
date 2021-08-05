import { assign } from "lodash";
import { colors, spacing, type } from "../../foundations";

const categoricalColors = [
  colors.vizCategory1,
  colors.vizCategory2,
  colors.vizCategory3,
  colors.vizCategory4,
  colors.vizCategory5,
];
const textColor = colors.subtle;
const graphicColor = colors.vizZeroData;

const sansSerif = type.family.sansSerif;
const letterSpacing = "normal";
const fontSize = type.scale.sm[0];

const baseProps = {
  padding: spacing[7],
  colorScale: categoricalColors,
};

const baseLabelStyles = {
  fontFamily: sansSerif,
  fontSize,
  letterSpacing,
  padding: spacing[3],
  fill: textColor,
  stroke: "transparent",
};
const centeredLabelStyles = assign({ textAnchor: "middle" }, baseLabelStyles);

const strokeLinecap = "round";
const strokeLinejoin = "round";
const dataStrokeWidth = 1.5;

/**
 * Go1d style Victory Theme for data visualization
 */
const Go1dVictoryTheme = {
  axis: assign(
    {
      style: {
        axis: {
          fill: "transparent",
          stroke: colors.faded,
          strokeWidth: dataStrokeWidth,
          strokeLinecap,
          strokeLinejoin,
        },
        axisLabel: assign({}, centeredLabelStyles, {
          padding: spacing[6],
        }),
        grid: {
          fill: "none",
          stroke: colors.soft,
          pointerEvents: "painted",
        },
        ticks: {
          fill: "transparent",
          size: spacing[2],
          stroke: colors.soft,
          strokeWidth: 1,
          strokeLinecap,
          strokeLinejoin,
        },
        tickLabels: baseLabelStyles,
      },
    },
    baseProps
  ),
  chart: baseProps,
  legend: {
    colorScale: categoricalColors,
    gutter: spacing[4],
    orientation: "vertical",
    titleOrientation: "top",
    style: {
      data: {
        type: "circle",
      },
      labels: baseLabelStyles,
      title: assign({}, baseLabelStyles, { padding: spacing[3] }),
    },
  },
  line: assign(
    {
      style: {
        data: {
          fill: "transparent",
          stroke: graphicColor,
          strokeWidth: dataStrokeWidth,
        },
        labels: baseLabelStyles,
      },
    },
    baseProps
  ),
  tooltip: {
    style: assign({}, baseLabelStyles, {
      padding: 0,
      pointerEvents: "none",
    }),
    flyoutStyle: {
      stroke: textColor,
      strokeWidth: 1,
      fill: colors.faint,
      pointerEvents: "none",
    },
    flyoutPadding: spacing[2],
    cornerRadius: spacing[2],
    pointerLength: spacing[2],
  },
};

export default Go1dVictoryTheme;
