import * as React from "react";

const Lime: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 49 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0"
      mask-type="alpha"
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="49"
      height="49"
    >
      <circle cx="24.5" cy="24.5" r="24" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M-24.7744 -1.31476C-24.7744 -2.65129 -23.6909 -3.73476 -22.3544 -3.73476H70.4294C71.7659 -3.73476 72.8494 -2.65129 72.8494 -1.31476V55.233H-24.7744V-1.31476Z"
        fill="#D3EF62"
      />
      <path
        opacity="0.15"
        d="M48.1345 -3.73476H-21.3297C-23.2322 -3.73476 -24.7744 -2.19252 -24.7744 -0.290077V54.9194L48.1345 -3.73476Z"
        fill="#31B8DA"
      />
      <path
        opacity="0.1"
        d="M-21.4471 -3.73476H67.3707C69.2732 -3.73476 70.8154 -2.19252 70.8154 -0.290074V52.8327L-21.4471 -3.73476Z"
        fill="#15D9AE"
      />
    </g>
  </svg>
);

Lime.displayName = "IconLime";

export default Lime;
