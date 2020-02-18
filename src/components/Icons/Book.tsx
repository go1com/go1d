import * as React from "react";

const Book: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path
      fillRule="evenodd"
      d="M.774 1C.347 1 0 1.333 0 1.745V12.17c0 .412.347.745.774.745h5.058c.37 0 .724.141.986.393.26.25.408.592.408.947 0 .412.346.745.774.745h.01l.05-.002c.4-.03.714-.35.714-.743 0-.355.147-.696.408-.948a1.43 1.43 0 01.986-.392h5.058c.427 0 .774-.333.774-.745V1.745c0-.412-.347-.745-.774-.745H10.89A3.74 3.74 0 008.3 2.032a3.572 3.572 0 00-.3.326 3.57 3.57 0 00-.3-.326A3.74 3.74 0 005.11 1H.774zm6.452 3.525v7.238a3.035 3.035 0 00-1.394-.338H1.548V2.49H5.11c.56 0 1.1.215 1.496.597.397.381.62.899.62 1.439zm2.942 6.9c-.491 0-.97.118-1.394.338V4.525c0-.54.223-1.058.62-1.44a2.16 2.16 0 011.496-.596h3.562v8.936h-4.284z"
      clipRule="evenodd"
    />
  </svg>
);

Book.displayName = "IconBook";

export default Book;
