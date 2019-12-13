import * as React from "react";

const Lodging: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <g strokeLinecap="round" strokeLinejoin="round" clipPath="url(#clip0)">
      <path
        d="M19.473 4.7H21.5l2 12H.5l2-12h2.278m18.722 12v4.5a1.5 1.5 0 01-1.5 1.5H2a1.5 1.5 0 01-1.5-1.5v-4.5m1.333-8h20.334"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.552 6.21a.5.5 0 01-.5.49H5.074a.5.5 0 01-.5-.569l.278-2a.5.5 0 01.5-.43h4.742a.5.5 0 01.5.51l-.042 2zm3.148 0a.5.5 0 00.5.49h4.977a.5.5 0 00.5-.569l-.278-2a.5.5 0 00-.499-.43h-4.743a.5.5 0 00-.5.51l.043 2z"
        clipRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 4.7V2.2A1.5 1.5 0 014 .7h16a1.5 1.5 0 011.5 1.5v2.5m-18 18v1m17-1v1M10.605 4.814h3.042"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0" />
    </defs>
  </svg>
);

Lodging.displayName = "IconLodging";

export default Lodging;
