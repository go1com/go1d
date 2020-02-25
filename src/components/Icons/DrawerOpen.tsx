import * as React from "react";
import IconBase from "../IconBase";

class IconDrawerOpen extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M3.823 7.437a.96.96 0 00-.1.122.219.219 0 00-.046.122.216.216 0 00-.082.16A1.93 1.93 0 003.586 8c0 .038.003.09.01.16a.216.216 0 00.081.16c.036.037.06.078.073.121a.284.284 0 00.073.122l3.107 3.212a.77.77 0 00.546.225.767.767 0 00.545-.225.82.82 0 00.218-.564.82.82 0 00-.218-.563l-1.8-1.84h8.998c.242 0 .433-.076.572-.226A.822.822 0 0016 8a.822.822 0 00-.209-.582c-.14-.15-.33-.226-.572-.226H6.222l1.799-1.84a.82.82 0 00.218-.563.82.82 0 00-.218-.564A.767.767 0 007.476 4a.767.767 0 00-.546.225L3.823 7.437z" />
        <path
          fillRule="evenodd"
          d="M.8 16a.8.8 0 01-.8-.8V.8a.8.8 0 111.6 0v14.4a.8.8 0 01-.8.8z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconDrawerOpen.displayName = "IconDrawerOpen";

export default IconDrawerOpen;
