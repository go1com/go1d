import * as React from "react";

const Forest: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0">
      <ellipse cx="24" cy="25.3483" rx="24" ry="24.3669" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M-33.28 -24.4595C-33.28 -25.84 -32.1609 -26.9592 -30.7804 -26.9592H55.1003C56.4808 -26.9592 57.5999 -25.84 57.5999 -24.4595V49.7152H-33.28V-24.4595Z"
        fill="#15D9AE"
      />
      <path
        opacity="0.5"
        d="M40.9197 49.713L-33.2798 -24.5143V49.713H40.9197Z"
        fill="#33C1B8"
      />
      <path
        opacity="0.35"
        d="M13.8857 49.7132L57.6001 -24.5141V49.7132H13.8857Z"
        fill="#7999CA"
      />
    </g>
  </svg>
);

Forest.displayName = "IconForest";

export default Forest;
