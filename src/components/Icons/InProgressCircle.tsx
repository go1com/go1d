import * as React from "react";

const InProgressCircle: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <circle cx={8} cy={8} r={8} />
  </svg>
);

InProgressCircle.displayName = "IconInProgressCircle";

export default InProgressCircle;
