import * as React from "react";

const Others: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M7 11.25a.75.75 0 100 1.5.75.75 0 000-1.5zM5.25 12a1.75 1.75 0 113.501.001A1.75 1.75 0 015.25 12zm6.75-.75a.75.75 0 100 1.5.75.75 0 000-1.5zm-1.75.75a1.75 1.75 0 113.501.001A1.75 1.75 0 0110.25 12zm6.75-.75a.75.75 0 100 1.5.75.75 0 000-1.5zm-1.75.75a1.75 1.75 0 113.501.001A1.75 1.75 0 0115.25 12z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Others.displayName = "IconOthers";

export default Others;
