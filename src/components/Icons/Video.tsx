import * as React from "react";
import IconBase from "../IconBase";

class VideoIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M15.672 4.406a.436.436 0 00-.336-.078.828.828 0 00-.336.14l-3.672 2.595V5c0-.563-.19-1.036-.57-1.422C10.378 3.193 9.9 3 9.328 3H2c-.563 0-1.036.193-1.422.578C.193 3.964 0 4.438 0 5v6.672c0 .562.193 1.036.578 1.422.386.385.86.578 1.422.578h7.328c.573 0 1.05-.193 1.43-.578.38-.386.57-.86.57-1.422V9.594l3.61 2.61c.062.03.127.059.195.085a.544.544 0 00.195.04c.073 0 .13-.004.172-.009a.69.69 0 00.172-.054.771.771 0 00.234-.25.654.654 0 00.094-.344V5a.644.644 0 00-.094-.352.8.8 0 00-.234-.242zM10 11.672a.64.64 0 01-.18.476c-.12.12-.284.18-.492.18H2a.671.671 0 01-.484-.18.63.63 0 01-.188-.476V5c0-.198.063-.36.188-.484A.655.655 0 012 4.328h7.328c.208 0 .373.063.492.188A.67.67 0 0110 5v6.672zm4.672-1.266l-2.875-2.078 2.875-2.062v4.14z" />
      </svg>
    );
  }
}

VideoIcon.displayName = "IconVideo";

export default VideoIcon;
