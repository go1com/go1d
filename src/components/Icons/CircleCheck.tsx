import * as React from "react";
import IconBase from "../IconBase";

class IconCircleCheck extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M10.51 2.363A6.167 6.167 0 1014.167 8v-.613a.5.5 0 111 0V8a7.168 7.168 0 01-13.18 3.897 7.167 7.167 0 018.93-10.447.5.5 0 11-.407.913z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M15.02 2.313a.5.5 0 010 .707L8.354 9.693a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.707L8 8.633l6.313-6.32a.5.5 0 01.707 0z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconCircleCheck.displayName = "IconCircleCheck";

export default IconCircleCheck;
