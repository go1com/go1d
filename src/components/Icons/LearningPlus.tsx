import * as React from "react";
import IconBase from "../IconBase";

class IconLearningPlus extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M4.167 11.833A1.167 1.167 0 003 13a.5.5 0 01-1 0 2.167 2.167 0 012.167-2.167h9a.5.5 0 010 1h-9z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M4.167 1.833A1.167 1.167 0 003 3v10a1.167 1.167 0 001.167 1.167h8.5V6a.5.5 0 111 0v8.667a.5.5 0 01-.5.5h-9A2.167 2.167 0 012 13V3A2.167 2.167 0 014.167.833h4.5a.5.5 0 010 1h-4.5zm6.333.295c0-.184.15-.333.333-.333h3.59a.333.333 0 010 .667h-3.59a.333.333 0 01-.333-.334z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M12.628 0c.184 0 .333.15.333.333v3.59a.333.333 0 11-.666 0V.333c0-.184.15-.333.333-.333z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconLearningPlus.displayName = "IconLearningPlus";

export default IconLearningPlus;
