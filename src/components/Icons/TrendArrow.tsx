import * as React from "react";
import IconBase from "../IconBase";

class IconTrendArrow extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M15.783 3.82a.497.497 0 0 0-.463-.32h-4.003a.5.5 0 1 0 0 1h2.793L8.983 9.626l-2.98-2.98a.5.5 0 0 0-.707 0l-5 5a.5.5 0 0 0 .708.708L5.65 7.707l2.98 2.98a.5.5 0 0 0 .707 0l5.48-5.48V8a.5.5 0 1 0 1 0V4l-.001-.028" />
      </svg>
    );
  }
}

IconTrendArrow.displayName = "IconTrendArrow";

export default IconTrendArrow;
