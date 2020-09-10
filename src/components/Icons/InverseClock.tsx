import * as React from "react";
import IconBase from "../IconBase";

class IconInverseClock extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 0C6.886 0 5.845.21 4.878.63a7.787 7.787 0 0 0-2.55 1.704 8.234 8.234 0 0 0-1.714 2.54A7.986 7.986 0 0 0 0 7.99c0 1.114.205 2.153.614 3.119.42.977.992 1.826 1.714 2.547a8.085 8.085 0 0 0 2.55 1.713A7.74 7.74 0 0 0 8 16a7.74 7.74 0 0 0 3.121-.63 8.085 8.085 0 0 0 2.55-1.713 8.076 8.076 0 0 0 1.715-2.547c.41-.966.614-2.005.614-3.119a7.985 7.985 0 0 0-.614-3.118 8.233 8.233 0 0 0-1.714-2.539A7.786 7.786 0 0 0 11.122.63 7.742 7.742 0 0 0 8 0zm.733 3.63v4.072l1.962 1.96a.702.702 0 0 1 0 1.022.766.766 0 0 1-.512.222.766.766 0 0 1-.511-.222L7.488 8.503a.852.852 0 0 1-.162-.222.642.642 0 0 1-.06-.29V3.63a.69.69 0 0 1 .205-.52A.733.733 0 0 1 8 2.915c.216 0 .392.065.529.196.136.13.204.304.204.52z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconInverseClock.displayName = "IconInverseClock";

export default IconInverseClock;
