import * as React from "react";

const Integration: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 48 48" {...props}>
    <path
      d="M40 18.996L20 46.996L24 28.996H8L28 0.995972L24 18.996H40Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Integration.displayName = "IconIntegration";

export default Integration;
