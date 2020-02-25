import * as React from "react";
import IconBase from "../IconBase";

class CheckOutlineIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 .667a7.333 7.333 0 100 14.666A7.333 7.333 0 008 .667zM0 8a8 8 0 1116 0A8 8 0 010 8zm12.198-3.602c.148.11.18.318.07.466l-4.666 6.334a.333.333 0 01-.477.062L3.792 8.594a.333.333 0 01.416-.52l3.063 2.45 4.46-6.055a.333.333 0 01.467-.07z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

CheckOutlineIcon.displayName = "IconCheckOutline";

export default CheckOutlineIcon;
