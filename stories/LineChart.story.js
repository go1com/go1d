import React from "react";
import { View } from "../src/";
import { LineChart } from "../src/";

import {
  VictoryAxis,
} from "victory";

export default {
  title: "Athletic/LineChart",
  id: 'LineChart', // id permalink becomes ?path=/docs/linechart--main
  parameters: {
    design: [
      {
        name: 'Guidelines',
        type: 'link',
        url: 'https://www.figma.com/file/BxQA6qbzRwjSA2AXWnO0f9/Components?node-id=3906%3A36',
        label: 'See Line Chart designs in Figma',
      },
    ],
  },
  component: LineChart,
};

const data = [
  [
    { minutes: 1, learners: 2.25, category: "Group A" },
    { minutes: 2, learners: 2,    category: "Group A" },
    { minutes: 3, learners: 3,    category: "Group A" },
    { minutes: 4, learners: 3,    category: "Group A" },
    { minutes: 5, learners: 4,    category: "Group A" }
  ],
  [
    { minutes: 1, learners: 3, category: "Group B" },
    { minutes: 2, learners: 3, category: "Group B" },
    { minutes: 3, learners: 4, category: "Group B" },
    { minutes: 4, learners: 4, category: "Group B" },
    { minutes: 5, learners: 5, category: "Group B" }
  ],
  [
    { minutes: 1, learners: 4, category: "Group C" },
    { minutes: 2, learners: 5, category: "Group C" },
    { minutes: 3, learners: 5, category: "Group C" },
    { minutes: 4, learners: 6, category: "Group C" },
    { minutes: 5, learners: 7, category: "Group C" }
  ],
  [
    { minutes: 1, learners: 5, category: "Group D" },
    { minutes: 2, learners: 7, category: "Group D" },
    { minutes: 3, learners: 7, category: "Group D" },
    { minutes: 4, learners: 8, category: "Group D" },
    { minutes: 5, learners: 8, category: "Group D" }
  ],
  [
    { minutes: 1, learners: 6, category: "Group E" },
    { minutes: 2, learners: 6, category: "Group E" },
    { minutes: 3, learners: 6, category: "Group E" },
    { minutes: 4, learners: 5, category: "Group E" },
    { minutes: 5, learners: 6, category: "Group E" }
  ],
  [
    { minutes: 2, learners: 8, category: "Group F" },
    { minutes: 3, learners: 9, category: "Group F" },
    { minutes: 4, learners: 9, category: "Group F" },
    { minutes: 5, learners: 9, category: "Group F" },
    { minutes: 6, learners: 4, category: "Group F" }
  ],
];

const accessibleTitle = "Line chart showing upwards trend of time spent learning";
const titleContent = "Total minutes learning";
const insightContent = "Learners spend more time learning in the morning.";
const notesContent = "Note: a learning minute is when a learner focuses for 60+ seconds.";
const xAccessorProp = "minutes";
const yAccessorProp = "learners";
const yAxisLabelText = "Y Axis label";
const categoryProp = "category";
const xAxisWithLabel = (
  <VictoryAxis
    label="X Axis label"
  />
);

export const Main = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={data.slice(0,1)}
        width={300}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
        scale={{ x: "linear", y: "linear" }}
        xAxis={xAxisWithLabel}
        yAxisLabelText={yAxisLabelText}
        {...args}
      />
    </View>
  );
};
Main.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: notesContent,
  data: data.slice(0,1),
  width: 300,
  height: 300,
  xAccessorProp: xAccessorProp,
  yAccessorProp: yAccessorProp,
  xAxis: xAxisWithLabel,
  yAxisLabelText: yAxisLabelText,
}

export const Size = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={data.slice(0,1)}
        width={600}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
        padding={{left: 48, top: 48, right: 72, bottom: 48}}
        {...args}
      />
    </View>
  );
};
Size.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: notesContent,
  data: data.slice(0,1),
  width: 600,
  height: 300,
  xAccessorProp: xAccessorProp,
  yAccessorProp: yAccessorProp,
}
Size.parameters = {
  docs: {
    description: {
      story: 'Set the width and height as appropriate for the layout. We recommend using a modular layout. You can update the size at different breakpoints by responding to changes in viewport size. For example, see [Working with JavaScript Media Queries by Marko Ilic](https://css-tricks.com/working-with-javascript-media-queries/).',
    },
  },
};

export const MultiLine = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={data.slice(0,3)}
        width={300}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
        categoryProp={categoryProp}
        {...args}
      />
    </View>
  );
};
MultiLine.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: notesContent,
  data: data.slice(0,3),
  width: 300,
  height: 300,
  xAccessorProp: xAccessorProp,
  yAccessorProp: yAccessorProp,
  categoryProp: categoryProp,
}

export const MultiLineWithYAxisLabel = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={data.slice(0,3)}
        yAxisLabelText={yAxisLabelText}
        width={300}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
        categoryProp={categoryProp}
        {...args}
      />
    </View>
  );
};
MultiLineWithYAxisLabel.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: notesContent,
  data: data.slice(0,3),
  width: 300,
  height: 300,
  xAccessorProp: xAccessorProp,
  yAccessorProp: yAccessorProp,
  yAxisLabelText: yAxisLabelText,
  categoryProp: categoryProp,
}

export const TooManyLines = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={data}
        width={300}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
        categoryProp={"category"}
        {...args}
      />
    </View>
  );
};
TooManyLines.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: notesContent,
  data: data,
  width: 300,
  height: 300,
  xAccessorProp: xAccessorProp,
  yAccessorProp: yAccessorProp,
  categoryProp: categoryProp,
}
TooManyLines.parameters = {
  docs: {
    description: {
      story: 'Aim for 2–4 lines. If you need more lines, consider using small multiples or faceting instead.',
    },
  },
};


export const CustomScale = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={data.slice(0,3)}
        scale={{ x: "linear", y: "log" }}
        width={300}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
        {...args}
      />
    </View>
  );
};
CustomScale.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: notesContent,
  data: data.slice(0,3),
  scale: { x: "linear", y: "log" },
  width: 300,
  height: 300,
  xAccessorProp: xAccessorProp,
  yAccessorProp: yAccessorProp,
}

const timeData = [
  [
    { event: new Date(2021, 1, 1), count: 1, category: "Group A" },
    { event: new Date(2021, 2, 2), count: 2, category: "Group A" },
    { event: new Date(2021, 3, 3), count: 3, category: "Group A" },
    { event: new Date(2021, 4, 4), count: 4, category: "Group A" },
    { event: new Date(2021, 5, 5), count: 5, category: "Group A" },
  ],
  [
    { event: new Date(2021, 1, 1), count: 3, category: "Group B" },
    { event: new Date(2021, 2, 2), count: 4, category: "Group B" },
    { event: new Date(2021, 3, 3), count: 2, category: "Group B" },
    { event: new Date(2021, 4, 4), count: 1, category: "Group B" },
    { event: new Date(2021, 5, 5), count: 0, category: "Group B" },
  ],
];

const timeScaleXAccessorProp = "event";
const timeScaleYAccessorProp = "count";
const timeScaleTooltipLabels = ({ datum }) => `${datum[timeScaleXAccessorProp].toLocaleString("default", { month: "short" })}: ${datum[timeScaleYAccessorProp]}`;
const timeScaleXAxis = (
  <VictoryAxis
    label="Months"
    tickFormat={date => date.toLocaleString("default", { month: "short" })}
  />
);

export const TimeScale = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={timeData}
        scale={{ x: "time", y: "linear" }}
        width={300}
        height={300}
        xAccessorProp={timeScaleXAccessorProp}
        yAccessorProp={timeScaleYAccessorProp}
        xAxis={timeScaleXAxis}
        padding={{left: 48, top: 48, right: 72, bottom: 48}}
        tooltipLabels={timeScaleTooltipLabels}
        {...args}
      />
    </View>
  );
};
TimeScale.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: notesContent,
  data: timeData,
  scale: { x: "time", y: "linear" },
  width: 300,
  height: 300,
  padding: {left: 48, top: 48, right: 72, bottom: 48},
  tooltipLabels: timeScaleTooltipLabels,
  xAccessorProp: timeScaleXAccessorProp,
  yAccessorProp: timeScaleYAccessorProp,
  xAxis: timeScaleXAxis,
}

const xAxis = (
  <VictoryAxis
    label="Independent axis label"
    tickValues={[1, 2, 3, 4]}
    tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
  />
);

const yAxis = (
  <VictoryAxis
    dependentAxis
    tickFormat={(d) => (`$${d}k`)}
  />
);

export const CustomAxes = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={data.slice(0,1)}
        scale={{ x: "linear", y: "log" }}
        xAxis={xAxis}
        yAxis={yAxis}
        width={300}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
        {...args}
      />
    </View>
  );
};
CustomAxes.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: notesContent,
  data: data.slice(0,1),
  xAxis: xAxis,
  yAxis: yAxis,
  width: 300,
  height: 300,
  xAccessorProp: xAccessorProp,
  yAccessorProp: yAccessorProp,
}

const domain = {x: [0, 10], y: [0, 10]};

export const CustomDomain = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={data.slice(0,3)}
        domain={domain}
        width={300}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
        {...args}
      />
    </View>
  );
};
CustomDomain.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: notesContent,
  data: data.slice(0,3),
  domain: domain,
  width: 300,
  height: 300,
  xAccessorProp: xAccessorProp,
  yAccessorProp: yAccessorProp,
}

const patchyData = [
  [
    { minutes: 1, learners: 2, category: "Group A" },
    { minutes: 2, learners: 2, category: "Group A" },
    { minutes: 3, learners: null, category: "Group A" },
    { minutes: 4, learners: 3, category: "Group A" },
    { minutes: 5, learners: 4, category: "Group A" }
  ],
  [
    { minutes: 1, learners: 3, category: "Group B" },
    { minutes: 2, learners: 3, category: "Group B" },
    { minutes: 3, learners: null, category: "Group B" },
    { minutes: 4, learners: null, category: "Group B" },
    { minutes: 5, learners: 5, category: "Group B" }
  ],
];
const missingValuesTooltipLabels = ({ datum }) => {
  return datum[yAccessorProp] ?
    `X: ${datum[xAccessorProp]}, Y: ${datum[yAccessorProp]}` :
    `X: no data`
}

const customProps = {
  animate: {
    duration: 2000,
    onLoad: {
      duration: 300,
      easing: "quadInOut",
    }
  }
}

export const CustomProps = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={data.slice(0,3)}
        width={300}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
        categoryProp={categoryProp}
        {...customProps}
        {...args}
      />
    </View>
  );
};
CustomProps.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: notesContent,
  data: data.slice(0,3),
  width: 300,
  height: 300,
  xAccessorProp: xAccessorProp,
  yAccessorProp: yAccessorProp,
  categoryProp: categoryProp,
}

export const MissingValues = args => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        titleContent={titleContent}
        insightContent={insightContent}
        notesContent={notesContent}
        data={patchyData}
        width={300}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
        tooltipLabels={missingValuesTooltipLabels}
        {...args}
      />
    </View>
  );
};
MissingValues.args = {
  accessibleTitle: accessibleTitle,
  titleContent: titleContent,
  insightContent: insightContent,
  notesContent: "Note: some data is missing due to a global outage.",
  data: patchyData,
  width: 300,
  height: 300,
  xAccessorProp: xAccessorProp,
  yAccessorProp: yAccessorProp,
  tooltipLabels: missingValuesTooltipLabels,
}

export const EmptyState = () => {
  return (
    <View color="contrast" background="background">
      <LineChart
        accessibleTitle={accessibleTitle}
        data={[]}
        titleContent={titleContent}
        width={300}
        height={300}
        xAccessorProp={xAccessorProp}
        yAccessorProp={yAccessorProp}
      />
    </View>
  );
};
EmptyState.storyName = "No data empty state";

