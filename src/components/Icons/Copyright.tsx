import * as React from "react";

const Copyright: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path fill="currentColor" d="M8 1.45455C4.38505 1.45455 1.45455 4.38505 1.45455 8C1.45455 11.615 4.38505 14.5455 8 14.5455C11.615 14.5455 14.5455 11.615 14.5455 8C14.5455 4.38505 11.615 1.45455 8 1.45455ZM0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8Z" />
    <path fill-opacity="0" d="M10.4579 6.02449C10.0587 5.56826 9.53068 5.24368 8.94335 5.0935C8.35602 4.94333 7.73698 4.97462 7.16779 5.18324C6.5986 5.39186 6.10596 5.76803 5.75479 6.26218C5.40363 6.75633 5.21041 7.34528 5.20059 7.95142C5.19077 8.55756 5.36482 9.15245 5.6998 9.65772C6.03478 10.163 6.51498 10.5549 7.07711 10.7818C7.63925 11.0088 8.25696 11.0601 8.84884 10.929C9.44072 10.798 9.979 10.4907 10.3928 10.0476" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
  </svg>
);

Copyright.displayName = "IconCopyright";

export default Copyright;
