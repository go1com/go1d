import * as React from "react";
import IconBase from "../IconBase";

class IconHeart extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M9.705 1.816a4.167 4.167 0 0 1 4.542 6.798l-5.893 5.893a.5.5 0 0 1-.708 0L1.753 8.614A4.168 4.168 0 1 1 7.647 2.72L8 3.073l.353-.353a4.167 4.167 0 0 1 1.352-.904z" />
      </svg>
    );
  }
}

IconHeart.displayName = "IconHeart";

export default IconHeart;
