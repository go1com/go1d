import * as React from "react";
import IconBase from "../IconBase";

class IconDownload extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M7.437 12.178c.037.036.078.07.122.1a.22.22 0 00.122.045c.037.048.09.076.16.082.068.006.121.009.159.009.038 0 .09-.003.16-.01a.216.216 0 00.16-.081.284.284 0 01.121-.073.285.285 0 00.122-.072l3.212-3.108A.766.766 0 0012 8.524a.767.767 0 00-.225-.545.82.82 0 00-.564-.218.82.82 0 00-.563.218l-1.84 1.8V.781c0-.243-.076-.434-.226-.573A.822.822 0 008 0a.822.822 0 00-.582.209c-.15.14-.226.33-.226.573v8.996L5.352 7.98a.82.82 0 00-.563-.218.82.82 0 00-.564.218.767.767 0 00-.225.545.77.77 0 00.225.546l3.212 3.107z" />
        <path
          fillRule="evenodd"
          d="M16 15.2a.8.8 0 01-.8.8H.8a.8.8 0 010-1.6h14.4a.8.8 0 01.8.8z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconDownload.displayName = "IconDownload";

export default IconDownload;
