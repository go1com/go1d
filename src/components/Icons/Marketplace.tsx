import * as React from "react";
import IconBase from "../IconBase";

class IconMarketplace extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M2.95.68A.5.5 0 0 1 3.332.5h9.334a.5.5 0 0 1 .384.18l2.333 2.8a.5.5 0 0 1 .116.32v9.8c0 .522-.23 1.01-.621 1.362-.389.35-.905.538-1.435.538H2.556c-.53 0-1.046-.189-1.435-.538A1.833 1.833 0 0 1 .5 13.6V3.8a.5.5 0 0 1 .116-.32L2.949.68zm.618.82L1.5 3.981V13.6c0 .22.097.444.29.618.195.176.47.282.766.282h10.888c.296 0 .571-.106.766-.282a.833.833 0 0 0 .29-.618V3.981L12.432 1.5H3.568z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M.5 3.8a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5zm4.389 2.3a.5.5 0 0 1 .5.5c0 .592.26 1.172.746 1.608A2.795 2.795 0 0 0 8 8.9c.709 0 1.379-.254 1.865-.692.485-.436.746-1.016.746-1.608a.5.5 0 0 1 1 0c0 .893-.395 1.738-1.077 2.352A3.795 3.795 0 0 1 8 9.9a3.795 3.795 0 0 1-2.534-.948C4.784 8.338 4.389 7.493 4.389 6.6a.5.5 0 0 1 .5-.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconMarketplace.displayName = "IconMarketplace";

export default IconMarketplace;
