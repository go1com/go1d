import * as React from "react";
import IconBase from "../IconBase";

class InverseClockIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 0C6.886 0 5.845.21 4.878.63a7.787 7.787 0 00-2.55 1.704 8.234 8.234 0 00-1.714 2.54A7.986 7.986 0 000 7.99c0 1.114.205 2.153.614 3.119.42.977.992 1.826 1.714 2.547a8.085 8.085 0 002.55 1.713A7.74 7.74 0 008 16a7.74 7.74 0 003.121-.63 8.085 8.085 0 002.55-1.713 8.076 8.076 0 001.715-2.547c.41-.966.614-2.005.614-3.119a7.985 7.985 0 00-.614-3.118 8.233 8.233 0 00-1.714-2.539A7.786 7.786 0 0011.122.63 7.742 7.742 0 008 0zm.733 3.63v4.072l1.962 1.96a.702.702 0 010 1.022.766.766 0 01-.512.222.766.766 0 01-.511-.222L7.488 8.503a.852.852 0 01-.162-.222.642.642 0 01-.06-.29V3.63a.69.69 0 01.205-.52A.733.733 0 018 2.915c.216 0 .392.065.529.196.136.13.204.304.204.52z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

InverseClockIcon.displayName = "IconInverseClock";

export default InverseClockIcon;
