import * as React from "react";

const Link: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 48 48" {...props}>
    <path
      d="M24.9407 36.2104L16.4867 44.6644C14.9914 46.159 12.9638 46.9985 10.8497 46.9985C8.73558 46.9985 6.70799 46.159 5.21269 44.6644L3.33469 42.7864C1.84042 41.2918 1.00098 39.2649 1.00098 37.1514C1.00098 35.038 1.84042 33.0111 3.33469 31.5164L15.5467 19.3024C17.042 17.8079 19.0696 16.9684 21.1837 16.9684C23.2978 16.9684 25.3254 17.8079 26.8207 19.3024L28.6987 21.1824"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M23.061 11.7865L31.515 3.3345C32.2551 2.59401 33.1339 2.0066 34.1011 1.60583C35.0683 1.20506 36.105 0.998779 37.152 0.998779C38.1989 0.998779 39.2356 1.20506 40.2029 1.60583C41.1701 2.0066 42.0488 2.59401 42.789 3.3345L44.667 5.2105C46.1613 6.70511 47.0007 8.73204 47.0007 10.8455C47.0007 12.959 46.1613 14.9859 44.667 16.4805L32.455 28.6945C31.7148 29.435 30.8361 30.0224 29.8689 30.4232C28.9016 30.8239 27.8649 31.0302 26.818 31.0302C25.771 31.0302 24.7343 30.8239 23.7671 30.4232C22.7999 30.0224 21.9211 29.435 21.181 28.6945L19.303 26.8145"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Link.displayName = "IconLink";

export default Link;
