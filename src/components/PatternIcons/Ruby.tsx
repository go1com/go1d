import * as React from "react";

const Ruby: React.SFC<React.SVGProps<SVGSVGElement>> = (
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
        d="M-33.5579 2.04338C-33.5579 1.45688 -33.0824 0.98143 -32.4959 0.98143H55.0085C55.595 0.98143 56.0705 1.45688 56.0705 2.04338V54.0279H-33.5579V2.04338Z"
        fill="#EF535F"
      />
      <mask
        id="mask1"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="-34"
        y="0"
        width="91"
        height="55"
      >
        <path
          d="M-33.5579 2.04338C-33.5579 1.45688 -33.0824 0.98143 -32.4959 0.98143H55.0085C55.595 0.98143 56.0705 1.45688 56.0705 2.04338V54.0279H-33.5579V2.04338Z"
          fill="#F9BD23"
        />
      </mask>
      <g mask="url(#mask1)">
        <path
          opacity="0.45"
          d="M55.5032 0.98143H-31.7042C-32.728 0.98143 -33.5579 1.81132 -33.5579 2.83505V53.4636L55.5032 0.98143Z"
          fill="#D80011"
        />
        <path
          opacity="0.75"
          d="M2.74788 0.98143H56.071V53.7457L2.74788 0.98143Z"
          fill="#BC0C1A"
          fill-opacity="0.4"
        />
      </g>
    </g>
  </svg>
);

Ruby.displayName = "IconRuby";

export default Ruby;
