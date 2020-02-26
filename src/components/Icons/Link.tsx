import * as React from "react";
import IconBase from "../IconBase";

class IconLink extends IconBase {
  getIconComponent(props) {
    return (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit={1.4}
        clipRule="evenodd"
        {...props}
      >
        <path
          fillRule="nonzero"
          d="M11.319.926c2.958.057 5.191 4.08 2.77 6.649-1.621 1.621-3.342 3.46-5.484 3.047-1.493-.288-2.938-1.556-2.402-2.282.418-.567 1.126.273 1.808.678.982.583 2.331.425 3.162-.376 1.777-1.756 4.143-4.202 1.551-5.96-.963-.653-2.336-.557-3.226.242-.892.841-2.282 1.965-2.279.689a.686.686 0 01.193-.461l1.131-1.124A4.009 4.009 0 0111.319.926z"
        />
        <path
          fillRule="nonzero"
          d="M6.784 5.456a4.02 4.02 0 013.081 1.569s-.045 1.983-1.14.666c-.93-1.084-2.76-1.211-3.825-.184-1.776 1.755-4.143 4.201-1.551 5.959.983.666 2.394.543 3.271-.284l1.111-1.111c.5-.466 1.531.273.925.924L7.531 14.12c-2.122 2-6.515.734-6.646-2.67-.074-1.906 1.594-3.426 3.137-4.913a4.023 4.023 0 012.762-1.081z"
        />
      </svg>
    );
  }
}

IconLink.displayName = "IconLink";

export default IconLink;
