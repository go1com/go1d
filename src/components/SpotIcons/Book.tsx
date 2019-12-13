import * as React from "react";

const Book: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M5 2.5a.5.5 0 01.5-.5h11A1.5 1.5 0 0118 3.5v1a.5.5 0 01-1 0v-1a.5.5 0 00-.5-.5h-11a.5.5 0 01-.5-.5z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M3 2.5A2.5 2.5 0 015.5 0h13A1.5 1.5 0 0120 1.5v2.585c.582.206 1 .762 1 1.415v17a1.5 1.5 0 01-1.5 1.5h-14A2.5 2.5 0 013 21.5v-19zm1 2v17A1.5 1.5 0 005.5 23h14a.5.5 0 00.5-.5v-17a.5.5 0 00-.5-.5h-14A2.49 2.49 0 014 4.5zm0-2A1.5 1.5 0 015.5 1h13a.5.5 0 01.5.5V4H5.5A1.5 1.5 0 014 2.5z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Book.displayName = "IconBook";

export default Book;
