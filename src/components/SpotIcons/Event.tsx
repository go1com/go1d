import * as React from "react";

const Event: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <g fillRule="evenodd" clipPath="url(#clip0)" clipRule="evenodd">
      <path
        d="M1.5 3.001a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5h-21zm-1.5.5a1.5 1.5 0 011.5-1.5h21a1.5 1.5 0 011.5 1.5v19a1.5 1.5 0 01-1.5 1.5h-21a1.5 1.5 0 01-1.5-1.5v-19z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.5.001a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zm13 0a.5.5 0 01.5.5v5a.5.5 0 01-1 0v-5a.5.5 0 01.5-.5zM0 7.501a.5.5 0 01.5-.5h23a.5.5 0 010 1H.5a.5.5 0 01-.5-.5z"
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

Event.displayName = "IconEvent";

export default Event;
