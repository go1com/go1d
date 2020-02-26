import * as React from "react";
import IconBase from "../IconBase";

class IconUpload extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M7.437.236a.96.96 0 01.122-.1.219.219 0 01.122-.045.216.216 0 01.16-.082C7.908.003 7.961 0 8 0c.038 0 .09.003.16.01a.216.216 0 01.16.08.288.288 0 00.121.074.284.284 0 01.122.072l3.212 3.108A.77.77 0 0112 3.89a.766.766 0 01-.225.545.82.82 0 01-.564.218.82.82 0 01-.563-.218l-1.84-1.8v8.997c0 .243-.076.433-.226.573a.822.822 0 01-.582.209.822.822 0 01-.582-.21c-.15-.139-.226-.33-.226-.572V2.635l-1.84 1.8a.82.82 0 01-.563.218.82.82 0 01-.564-.218A.767.767 0 014 3.89a.77.77 0 01.225-.546L7.437.236z" />
        <path
          fillRule="evenodd"
          d="M16 15.2a.8.8 0 01-.8.8H.8a.8.8 0 010-1.6h14.4a.8.8 0 01.8.8z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconUpload.displayName = "IconUpload";

export default IconUpload;
