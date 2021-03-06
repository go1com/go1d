import * as React from "react";
import IconBase from "../IconBase";

class IconUnpublish extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M1.797 10.41l5.34 5.34c.042.041.087.08.135.114a.238.238 0 0 0 .136.053.552.552 0 0 0 .313.083c.125 0 .257-.028.396-.083a.313.313 0 0 1 .136-.084.314.314 0 0 0 .136-.083l5.34-5.34A.86.86 0 0 0 14 9.783a.86.86 0 0 0-.271-.626.86.86 0 0 0-.626-.271.86.86 0 0 0-.626.27l-3.817 3.84V.876C8.66.611 8.576.4 8.41.24A.896.896 0 0 0 7.762 0c-.265 0-.48.08-.647.24-.167.16-.25.372-.25.636v12.12L3.048 9.158a1.19 1.19 0 0 0-.323-.198.822.822 0 0 0-.303-.073.822.822 0 0 0-.302.073 1.19 1.19 0 0 0-.323.198.86.86 0 0 0-.272.626c0 .236.09.445.272.625z" />
      </svg>
    );
  }
}

IconUnpublish.displayName = "IconUnpublish";

export default IconUnpublish;
