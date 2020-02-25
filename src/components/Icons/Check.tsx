import * as React from "react";
import IconBase from "../IconBase";

class CheckIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.686 3.29A1.037 1.037 0 0013.96 3a1.04 1.04 0 00-.725.29l-7.21 7.235-3.262-3.286a1.037 1.037 0 00-.725-.29c-.274 0-.515.096-.725.29A.996.996 0 001 7.964c0 .273.105.515.314.724L5.301 12.7c.113.097.221.17.326.218a.954.954 0 00.399.072.954.954 0 00.398-.072c.105-.049.214-.121.326-.218l7.936-7.96A.996.996 0 0015 4.016a.996.996 0 00-.314-.725z" />
      </svg>
    );
  }
}

CheckIcon.displayName = "IconCheck";

export default CheckIcon;
