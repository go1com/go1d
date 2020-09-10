import * as React from "react";
import IconBase from "../IconBase";

class IconNotPassed extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M8 0C6.886 0 5.845.21 4.878.63a7.787 7.787 0 0 0-2.55 1.704 8.233 8.233 0 0 0-1.714 2.54A7.987 7.987 0 0 0 0 7.99c0 1.114.205 2.153.614 3.119.42.977.992 1.826 1.714 2.547a8.085 8.085 0 0 0 2.55 1.713c.967.42 2.008.63 3.122.63 1.114 0 2.155-.21 3.122-.63a8.084 8.084 0 0 0 2.55-1.713 8.076 8.076 0 0 0 1.714-2.547c.41-.966.614-2.005.614-3.119a7.987 7.987 0 0 0-.614-3.118 8.233 8.233 0 0 0-1.714-2.539A7.786 7.786 0 0 0 11.122.63 7.743 7.743 0 0 0 8 0zm0 6.898l2.04-2.056a.788.788 0 0 1 .546-.217c.208 0 .393.076.546.217l.007.007a.768.768 0 0 1 0 1.107L9.106 7.994l2.033 2.037a.768.768 0 0 1 0 1.107.807.807 0 0 1-.553.237.806.806 0 0 1-.553-.237L8 9.101l-2.032 2.037a.855.855 0 0 1-.242.176.741.741 0 0 1-.312.061.741.741 0 0 1-.312-.06.853.853 0 0 1-.24-.177.768.768 0 0 1 0-1.107l2.032-2.037-2.033-2.038a.768.768 0 0 1 0-1.107l.007-.007a.788.788 0 0 1 .546-.217c.208 0 .394.076.546.217l.008.008L8 6.897z" />
      </svg>
    );
  }
}

IconNotPassed.displayName = "IconNotPassed";

export default IconNotPassed;
