import * as React from "react";

const Document: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <g fillRule="evenodd" clipPath="url(#clip0)" clipRule="evenodd">
      <path
        d="M1.5 3.7A1.5 1.5 0 013 2.2h18a1.5 1.5 0 011.5 1.5v19a1.5 1.5 0 01-1.5 1.5H3a1.5 1.5 0 01-1.5-1.5v-19zM3 3.2a.5.5 0 00-.5.5v19a.5.5 0 00.5.5h18a.5.5 0 00.5-.5v-19a.5.5 0 00-.5-.5H3z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 .2a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4A.5.5 0 016 .2zm12 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5zm-8 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5zm4 0a.5.5 0 01.5.5v4a.5.5 0 01-1 0v-4a.5.5 0 01.5-.5zM5.5 9.7a.5.5 0 01.5-.5h12a.5.5 0 010 1H6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h12a.5.5 0 010 1H6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h12a.5.5 0 010 1H6a.5.5 0 01-.5-.5zm0 3a.5.5 0 01.5-.5h7a.5.5 0 010 1H6a.5.5 0 01-.5-.5z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

Document.displayName = "IconDocument";

export default Document;
