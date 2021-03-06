import * as React from "react";
import IconBase from "../IconBase";

class IconHelp extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M8 1.455a6.545 6.545 0 1 0 0 13.09 6.545 6.545 0 0 0 0-13.09zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M8.188 5.109a1.455 1.455 0 0 0-1.618.95.727.727 0 1 1-1.372-.482 2.91 2.91 0 0 1 5.653.97c0 1.112-.826 1.847-1.415 2.24a5.852 5.852 0 0 1-1.226.617l-.025.009-.008.003h-.004c0 .001-.001.001-.226-.673l.226.674a.728.728 0 0 1-.463-1.38h.002l.01-.003.055-.02c.049-.02.122-.048.21-.088a4.4 4.4 0 0 0 .642-.35c.502-.334.767-.69.767-1.03a1.457 1.457 0 0 0-1.208-1.437zm-.476 2.928z"
          clipRule="evenodd"
        />
        <circle cx={8} cy={11.5} r={0.8} />
      </svg>
    );
  }
}

IconHelp.displayName = "IconHelp";

export default IconHelp;
