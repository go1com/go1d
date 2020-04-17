import * as React from "react";
import IconBase from "../IconBase";

class IconBookPlus extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path
          fillRule="evenodd"
          d="M.5 2.4a.5.5 0 01.5-.5h3.64c.78 0 1.526.318 2.074.88.132.135.25.282.353.438A2.896 2.896 0 019.494 1.9H9.8a.5.5 0 010 1h-.307c-.507 0-.995.206-1.358.578-.362.372-.568.88-.568 1.41v6.766c.384-.272.844-.42 1.32-.42h3.746V9.466a.5.5 0 011 0v2.266a.5.5 0 01-.5.5H8.887c-.346 0-.68.141-.93.396a1.391 1.391 0 00-.39.97.5.5 0 01-1 0 1.39 1.39 0 00-.391-.97 1.297 1.297 0 00-.93-.396H1a.5.5 0 01-.5-.5V2.4zm6.067 9.254a2.288 2.288 0 00-1.32-.42H1.5V2.9h3.14c.507 0 .996.206 1.358.578.363.372.569.88.569 1.41v6.766z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M10.767 4.267a.5.5 0 01.5-.5H15a.5.5 0 010 1h-3.733a.5.5 0 01-.5-.5z"
          clipRule="evenodd"
        />
        <path
          fillRule="evenodd"
          d="M13.133 1.9a.5.5 0 01.5.5v3.733a.5.5 0 01-1 0V2.4a.5.5 0 01.5-.5z"
          clipRule="evenodd"
        />
      </svg>
    );
  }
}

IconBookPlus.displayName = "IconBookPlus";

export default IconBookPlus;
