import * as React from "react";
import IconBase from "../IconBase";

class EllipsisIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M9.806 7.806a1.805 1.805 0 11-3.612 0 1.805 1.805 0 113.612 0zM13.194 6a1.805 1.805 0 100 3.613 1.805 1.805 0 100-3.613zM2.806 6a1.805 1.805 0 100 3.613 1.805 1.805 0 100-3.613z" />
      </svg>
    );
  }
}

EllipsisIcon.displayName = "IconEllipsis";

export default EllipsisIcon;
