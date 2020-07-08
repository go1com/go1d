import * as React from "react";
import IconBase from "../IconBase";

class IconClosedBook extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M2.68 13.54c-.413 0-.807.16-1.096.442a1.478 1.478 0 00-.448 1.057.5.5 0 11-1 0c0-.666.27-1.303.749-1.771a2.566 2.566 0 011.795-.729h11.034a.5.5 0 010 1H2.68z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M2.68 1.54c-.413 0-.807.16-1.096.443a1.479 1.479 0 00-.448 1.057v12c0 .394.16.774.448 1.056.29.283.683.444 1.096.444h10.534v-15H2.68zm0-1c-.671 0-1.317.26-1.795.728A2.479 2.479 0 00.136 3.04v12c0 .666.27 1.303.749 1.771a2.566 2.566 0 001.795.729h11.034a.5.5 0 00.5-.5v-16a.5.5 0 00-.5-.5H2.68z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconClosedBook.displayName = "IconClosedBook";

export default IconClosedBook;
