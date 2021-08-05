import * as React from "react";
import { cleanup, render } from "react-testing-library";
import LineChart from "./index";

import { VictoryAxis } from "victory";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(<LineChart data={[[{ x: 1, y: 1 }]]} width={300} height={300} />);
});

const xAccessorProp = "x";
const tooltipLabelsFunction = ({ datum }) => datum.xAccessorProp;

it("renders without crashing with all props", () => {
  render(
    <LineChart
      data={[[{ x: 1, y: 1, color: "whitesmoke" }]]}
      width={300}
      height={300}
      accessibleTitle="Line chart"
      scale={{ x: "linear", y: "linear" }}
      domain={{ x: [0, 10], y: [0, 10] }}
      padding={{ left: 48, top: 48, right: 8, bottom: 48 }}
      yAxisLabelText="Y Axis"
      xAccessorProp={xAccessorProp}
      yAccessorProp="y"
      xAxis={<VictoryAxis />}
      yAxis={<VictoryAxis dependentAxis={true} />}
      tooltipLabels={tooltipLabelsFunction}
      categoryProp="color"
      titleContent="title"
      insightContent="insight"
      notesContent="note"
    />
  );
});

it("renders empty state", () => {
  render(<LineChart data={[]} width={300} height={300} />);
});
