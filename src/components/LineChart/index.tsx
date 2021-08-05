import * as React from "react";
import Go1dVictoryTheme from "../DataViz/theme";
import Heading from "../Heading";
import Text from "../Text";
import Theme from "../Theme";
import View from "../View";

import {
  VictoryAxis,
  VictoryChart,
  VictoryGroup,
  VictoryLabel,
  VictoryLegend,
  VictoryLine,
  VictoryScatter,
  VictoryTooltip,
  VictoryVoronoiContainer,
} from "victory";

import { DomainPropType, ScalePropType } from "victory-core";

interface ScaleType {
  x: ScalePropType;
  y: ScalePropType;
}

const defaultScale: ScaleType = {
  x: "linear",
  y: "linear",
};

interface PaddingType {
  top: number;
  right: number;
  bottom: number;
  left: number;
}

export interface Props {
  accessibleTitle?: string;
  data: object[][];
  scale?: ScaleType;
  width: number;
  height: number;
  domain?: DomainPropType;
  padding?: PaddingType;
  xAxis?: React.ReactNode;
  yAxis?: React.ReactNode;
  yAxisLabelText?: string;
  xAccessorProp?: any;
  yAccessorProp?: any;
  tooltipLabels?: any;
  categoryProp?: string;
  titleContent?: React.ReactNode;
  insightContent?: React.ReactNode;
  notesContent?: React.ReactNode;
}

/**
 * A Line Chart shows the evolution of up to 4 variables with quantitative values, such as dollars, over a continuous interval or time period, such as 12 months.
 */
const LineChart: React.FunctionComponent<Props> = ({
  accessibleTitle = "Line chart",
  data,
  scale = defaultScale,
  width,
  height,
  domain,
  padding = { left: 48, top: 48, right: 8, bottom: 48 },
  xAxis = <VictoryAxis />,
  yAxis = <VictoryAxis dependentAxis={true} />,
  yAxisLabelText,
  xAccessorProp = "x",
  yAccessorProp = "y",
  tooltipLabels,
  categoryProp,
  titleContent = null,
  insightContent = null,
  notesContent = null,
  ...restProps
}) => {
  // early exit for empty state
  if (!data || !data.length) {
    return (
      <>
        <Heading
          color="subtle"
          visualHeadingLevel="Heading 4"
          semanticElement="h2"
          marginBottom={3}
        >
          {titleContent}
        </Heading>
        <Text
          color="subtle"
          element="p"
          fontSize={2}
          fontWeight="normal"
          fontFamily="sansSerif"
          lineHeight="paragraph"
          marginBottom={3}
        >
          There is no data yet.
        </Text>
        <View
          element="svg"
          width="100%"
          height={height}
          backgroundColor="faint"
          borderRadius={3}
          aria-hidden="true"
        />
      </>
    );
  }

  const visibleChartTitle = titleContent ? (
    <Heading
      color="subtle"
      visualHeadingLevel="Heading 4"
      semanticElement="h2"
      marginBottom={3}
    >
      {titleContent}
    </Heading>
  ) : null;

  const insight = insightContent ? (
    <Text
      color="subtle"
      element="p"
      fontSize={2}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
      marginBottom={3}
    >
      {insightContent}
    </Text>
  ) : null;

  const notes = notesContent ? (
    <Text
      color="subtle"
      element="p"
      fontSize={2}
      fontWeight="normal"
      fontFamily="sansSerif"
      lineHeight="paragraph"
      marginY={3}
    >
      {notesContent}
    </Text>
  ) : null;

  const { colors, type } = React.useContext(Theme);

  const categoricalColors = [
    colors.vizCategory1,
    colors.vizCategory2,
    colors.vizCategory3,
    colors.vizCategory4,
    colors.vizCategory5,
  ];

  let containerLabels = ({ datum }) =>
    `x: ${datum[xAccessorProp]}, y: ${datum[yAccessorProp]}`;

  if (tooltipLabels) {
    containerLabels = tooltipLabels;
  }

  const categoryNames = categoryProp
    ? data.map(d => ({ name: d[0][categoryProp] }))
    : null;

  return (
    <View width={width}>
      {visibleChartTitle}
      {insight}
      <VictoryChart
        scale={scale}
        domain={domain ? domain : null}
        containerComponent={
          <VictoryVoronoiContainer
            title={accessibleTitle}
            labels={containerLabels}
            labelComponent={
              <VictoryTooltip
                style={{ fontSize: 16 }}
                constrainToVisibleArea={true}
              />
            }
            voronoiBlacklist={["scatter"]}
          />
        }
        width={width}
        height={height}
        padding={padding}
        theme={Go1dVictoryTheme}
        {...restProps}
      >
        {categoryProp ? (
          <VictoryLegend
            x={0}
            y={0}
            centerTitle={true}
            orientation="horizontal"
            gutter={24}
            colorScale={categoricalColors}
            data={categoryNames}
          />
        ) : null}
        {yAxisLabelText ? (
          <VictoryLabel
            x={padding.left}
            y={padding.top - 12}
            style={[
              {
                fill: colors.subtle,
                fontFamily: type.family.sansSerif,
                fontSize: type.scale.sm[0],
              },
            ]}
            text={yAxisLabelText}
          />
        ) : null}
        {xAxis}
        {yAxis}
        {data.map((dataset, index) => {
          return (
            <VictoryGroup
              key={`${index}`}
              data={dataset}
              x={xAccessorProp}
              y={yAccessorProp}
            >
              <VictoryLine
                key={`${index}-0`}
                data={dataset}
                name="line"
                style={{
                  data: {
                    stroke: categoricalColors[index % categoricalColors.length],
                  },
                }}
                x={xAccessorProp}
                y={yAccessorProp}
              />
              <VictoryScatter
                key={`${index}-1`}
                data={dataset}
                name="scatter"
                size={2}
                style={{
                  data: {
                    stroke: categoricalColors[index % categoricalColors.length],
                    fill: categoricalColors[index % categoricalColors.length],
                  },
                }}
                x={xAccessorProp}
                y={yAccessorProp}
              />
            </VictoryGroup>
          );
        })}
      </VictoryChart>
      {notes}
    </View>
  );
};

LineChart.displayName = "Line Chart";

export default LineChart;
