import * as React from "react";
import IconBase from "../IconBase";

class IconSunrise extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 2.5a.5.5 0 0 1 .5.5v1.333a.5.5 0 1 1-1 0V3a.5.5 0 0 1 .5-.5zM2.46 4.793a.5.5 0 0 1 .707 0l.947.947a.5.5 0 0 1-.708.707L2.46 5.5a.5.5 0 0 1 0-.707zm11.08 0a.5.5 0 0 1 0 .707l-.946.947a.5.5 0 1 1-.708-.707l.947-.947a.5.5 0 0 1 .707 0zm-8.25 2.83a3.833 3.833 0 0 1 6.543 2.71.5.5 0 1 1-1 0 2.834 2.834 0 0 0-5.666 0 .5.5 0 1 1-1 0c0-1.016.404-1.991 1.122-2.71zm-5.123 2.71a.5.5 0 0 1 .5-.5H2a.5.5 0 0 1 0 1H.667a.5.5 0 0 1-.5-.5zm13.333 0a.5.5 0 0 1 .5-.5h1.333a.5.5 0 1 1 0 1H14a.5.5 0 0 1-.5-.5zM.167 13a.5.5 0 0 1 .5-.5h14.666a.5.5 0 0 1 0 1H.667a.5.5 0 0 1-.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconSunrise.displayName = "IconSunrise";

export default IconSunrise;
