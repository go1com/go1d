import * as React from "react";

const Gold: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg
    viewBox="0 0 50 50"
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
      width="48"
      height="50"
    >
      <ellipse cx="24" cy="25.3483" rx="24" ry="24.3669" fill="#C4C4C4" />
    </mask>
    <g mask="url(#mask0)">
      <path
        d="M-11.7551 -9.3959C-11.7551 -10.2561 -11.0578 -10.9534 -10.1976 -10.9534H92.1517C93.0119 -10.9534 93.7092 -10.2561 93.7092 -9.3959V52.7503H-11.7551V-9.3959Z"
        fill="#FFE714"
      />
      <path
        opacity="0.75"
        d="M34.3016 52.749L-11.7556 -8.92164V52.749H34.3016Z"
        fill="#F9BD23"
      />
      <path
        opacity="0.15"
        d="M-11.7554 25.6476L49.7654 -9.78524V25.6476H-11.7554Z"
        fill="#EF535F"
      />
    </g>
  </svg>
);

Gold.displayName = "IconGold";

export default Gold;
