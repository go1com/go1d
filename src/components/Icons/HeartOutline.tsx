import * as React from "react";
import IconBase from "../IconBase";

class IconHeartOutline extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M9.705 1.816a4.167 4.167 0 014.542 6.798l-5.893 5.893a.5.5 0 01-.708 0L1.753 8.614A4.168 4.168 0 117.647 2.72L8 3.073l.353-.353a4.167 4.167 0 011.352-.904zm3.835 1.61a3.167 3.167 0 00-4.48 0l-.706.708a.5.5 0 01-.708 0l-.706-.707a3.168 3.168 0 00-4.48 4.48L8 13.446l5.54-5.54a3.167 3.167 0 000-4.48z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconHeartOutline.displayName = "IconHeartOutline";

export default IconHeartOutline;
