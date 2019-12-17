import * as React from "react";

const SkipBack: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      d="M14.222 1.778a.778.778 0 00-1.263-.608L5.18 7.393a.778.778 0 000 1.214l7.778 6.223a.778.778 0 001.263-.608V1.778zm-1.555 10.826L6.912 8l5.755-4.604v9.208z"
      clipRule="evenodd"
    />
    <path d="M3.333 2.556a.778.778 0 00-1.555 0v10.888a.778.778 0 101.555 0V2.556z" />
  </svg>
);

SkipBack.displayName = "IconSkipBack";

export default SkipBack;
