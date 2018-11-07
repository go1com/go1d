import * as React from "react";

const Minus: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M13.261 7.234H2.739a.726.726 0 0 0-.537.202.724.724 0 0 0-.202.536c0 .234.067.419.202.554a.726.726 0 0 0 .537.202h10.522a.726.726 0 0 0 .537-.202c.135-.135.202-.32.202-.554a.724.724 0 0 0-.202-.536.726.726 0 0 0-.537-.202z" />
  </svg>
);

Minus.displayName = "IconMinus";

export default Minus;
