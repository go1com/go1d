import * as React from "react";

const ChevronRight: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M5.746 2.26a.85.85 0 0 0-.246.603.85.85 0 0 0 .246.602L10.406 8l-4.66 4.535a.85.85 0 0 0-.246.602.85.85 0 0 0 .246.602.855.855 0 0 0 1.232 0l5.255-5.137a.825.825 0 0 0 .205-.311A.883.883 0 0 0 12.5 8c0-.08-.02-.177-.062-.291a.825.825 0 0 0-.205-.311L6.978 2.261a.855.855 0 0 0-1.232 0z" />
  </svg>
);

ChevronRight.displayName = "IconChevronRight";

export default ChevronRight;
