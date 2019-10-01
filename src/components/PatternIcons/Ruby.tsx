import * as React from "react";

const Ruby: React.SFC<React.SVGProps<SVGSVGElement>> = (
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
        d="M-33.0578 1.56195C-33.0578 0.975448 -32.5824 0.5 -31.9959 0.5H55.5086C56.0951 0.5 56.5705 0.97545 56.5705 1.56195V52.7478H-33.0578V1.56195Z"
        fill="#EF535F"
      />
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="-33"
        y="-1"
        width="89"
        height="54"
      >
        <path
          d="M-33 0.0619456C-33 -0.524551 -32.5246 -1 -31.9381 -1H54.9381C55.5245 -1 56 -0.52455 56 0.0619469V53H-33V0.0619456Z"
          fill="#F9BD23"
        />
      </mask>
      <g mask="url(#mask1)">
        <path
          opacity="0.45"
          d="M55.4359 0H-31.2042C-32.2279 0 -33.0578 0.829894 -33.0578 1.85362V52.1893L55.4359 0Z"
          fill="#D80011"
        />
        <path
          opacity="0.75"
          d="M3.01653 0H56V52.4698L3.01653 0Z"
          fill="#BC0C1A"
          fill-opacity="0.4"
        />
      </g>
    </g>
  </svg>
);

Ruby.displayName = "IconRuby";

export default Ruby;
