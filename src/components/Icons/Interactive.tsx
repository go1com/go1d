import * as React from "react";
import IconBase from "../IconBase";

class InteractiveIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.91 6.01a.76.76 0 00-.253-.32.636.636 0 00-.368-.106h-5.52L9.393.77a.522.522 0 00-.066-.434.537.537 0 00-.343-.27.706.706 0 00-.45-.05.606.606 0 00-.386.262L1.155 8.663a.87.87 0 00-.148.36.633.633 0 00.082.41.71.71 0 00.254.254c.104.06.227.09.368.09h5.52l-.623 4.83a.501.501 0 00.066.427.543.543 0 00.343.262c.033.043.08.068.14.073.06.006.106.008.139.008a.751.751 0 00.311-.065.572.572 0 00.246-.213l6.992-8.385a.866.866 0 00.148-.352.456.456 0 00-.082-.352zm-6.632 6.354l.426-3.21a.977.977 0 00-.049-.31 1.908 1.908 0 00-.098-.246.543.543 0 00-.246-.164.977.977 0 00-.311-.05H3.185l4.471-5.387-.36 3.226c0 .098.016.197.049.295a3.4 3.4 0 00.098.262.718.718 0 00.238.155.673.673 0 00.253.058h4.815l-4.47 5.371z" />
      </svg>
    );
  }
}

InteractiveIcon.displayName = "IconInteractive";

export default InteractiveIcon;
