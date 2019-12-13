import * as React from "react";

const Place: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M3.072 6.684A9.5 9.5 0 0121.5 9.941H21h.5a9.48 9.48 0 01-4.758 8.222l-.25-.433.25.434c-1.371.791-1.81 1.577-3.288 4.218l-.582 1.037a1 1 0 01-1.742 0c-.212-.375-.405-.72-.582-1.038-1.463-2.615-1.917-3.426-3.29-4.218l.25-.434-.25.433A9.5 9.5 0 013.073 6.685zM13.479 1.56a8.5 8.5 0 00-5.721 15.736c1.624.937 2.223 2.013 3.64 4.554.185.333.385.691.603 1.078l.604-1.08c1.43-2.565 2.016-3.615 3.637-4.55l.001-.001A8.48 8.48 0 0020.5 9.94a8.5 8.5 0 00-7.02-8.38z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M5.5 9.94a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zm6.5-5.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M6.044 7.44a.5.5 0 01.5-.5H7.5a2 2 0 012 2 .5.5 0 00.5.5 1.5 1.5 0 011.5 1.5 3 3 0 01-3 3H7.126a.5.5 0 010-1H8.5a2 2 0 002-2 .5.5 0 00-.5-.5 1.5 1.5 0 01-1.5-1.5 1 1 0 00-1-1h-.956a.5.5 0 01-.5-.5zm10.426-2a.5.5 0 01-.5.5A1.973 1.973 0 0014 7.935v.005a.5.5 0 00.5.5 1.5 1.5 0 011.5 1.5 1 1 0 001 1h.811a.5.5 0 110 1h-.81a2 2 0 01-2-2 .5.5 0 00-.5-.5A1.5 1.5 0 0113 7.943a2.973 2.973 0 012.967-3.003.5.5 0 01.501.5z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Place.displayName = "IconPlace";

export default Place;
