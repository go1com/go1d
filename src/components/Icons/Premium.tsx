import * as React from "react";
import IconBase from "../IconBase";

class IconPremium extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M7.987 3.502a.02.02 0 00-.007.006l-2.878 3.44a.5.5 0 01-.602.129l-2.963-1.44a.042.042 0 00-.012-.003H1.52a.032.032 0 00-.015.007.029.029 0 00-.006.006l.001.005L3.575 12.5h8.85l2.074-6.848v-.005a.03.03 0 00-.005-.006.031.031 0 00-.015-.008h-.004a.042.042 0 00-.012.005L11.5 7.077a.5.5 0 01-.602-.13L8.02 3.509a.02.02 0 00-.007-.006A.031.031 0 008 3.5a.031.031 0 00-.013.002zm-.774-.635a1.028 1.028 0 011.574 0l2.627 3.14 2.613-1.269c.782-.38 1.692.335 1.429 1.204l-2.182 7.203a.5.5 0 01-.478.355H3.204a.5.5 0 01-.478-.355L.544 5.942c-.263-.869.647-1.584 1.43-1.204l2.612 1.269 2.627-3.14z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconPremium.displayName = "IconPremium";

export default IconPremium;
