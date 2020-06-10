import * as React from "react";
import IconBase from "../IconBase";

class IconHeart extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M9.705 1.816a4.167 4.167 0 014.542 6.798l-5.893 5.893a.5.5 0 01-.708 0L1.753 8.614A4.168 4.168 0 117.647 2.72L8 3.073l.353-.353a4.167 4.167 0 011.352-.904z" />
      </svg>
    );
  }
}

IconHeart.displayName = "IconHeart";

export default IconHeart;
