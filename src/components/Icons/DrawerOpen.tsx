import * as React from "react";

const DrawerOpen: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
    <path d="M3.823 7.437a.96.96 0 0 0-.1.122.219.219 0 0 0-.046.122.216.216 0 0 0-.082.16A1.93 1.93 0 0 0 3.586 8c0 .038.003.09.01.16a.216.216 0 0 0 .081.16c.036.037.06.078.073.121a.284.284 0 0 0 .073.122l3.107 3.212a.77.77 0 0 0 .546.225.767.767 0 0 0 .545-.225.82.82 0 0 0 .218-.564.82.82 0 0 0-.218-.563l-1.8-1.84h8.998c.242 0 .433-.076.572-.226A.822.822 0 0 0 16 8a.822.822 0 0 0-.209-.582c-.14-.15-.33-.226-.572-.226H6.222l1.799-1.84a.82.82 0 0 0 .218-.563.82.82 0 0 0-.218-.564A.767.767 0 0 0 7.476 4a.767.767 0 0 0-.546.225L3.823 7.437z" />
    <path
      fillRule="evenodd"
      d="M.8 16a.8.8 0 0 1-.8-.8V.8a.8.8 0 1 1 1.6 0v14.4a.8.8 0 0 1-.8.8z"
      clipRule="evenodd"
    />
  </svg>
);

DrawerOpen.displayName = "IconDrawerOpen";

export default DrawerOpen;
