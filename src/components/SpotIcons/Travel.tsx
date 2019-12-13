import * as React from "react";

const Travel: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      d="M20.513 5.112L6.846 11.057l-2.793-1.4a.5.5 0 00-.421-.013l-2.608 1.122a.5.5 0 00-.156.813l3.744 3.745a.5.5 0 00.54.11l7.194-2.877-2.553 6.808a.5.5 0 00.691.623l2.716-1.357a.5.5 0 00.223-.223l3.926-7.85 4.7-1.75a2 2 0 10-1.53-3.696h-.006z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.017 7.067L9.551 4.4a.5.5 0 00-.382 0l-2.389.99a.5.5 0 000 .924L12.4 8.64"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Travel.displayName = "IconTravel";

export default Travel;
