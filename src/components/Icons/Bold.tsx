import * as React from "react";
import IconBase from "../IconBase";

class IconBold extends IconBase {
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
          d="M9.002 2.564c2.565.099 3.946 4.251 1.25 5.62a3.027 3.027 0 01-1.237.315c-1.675.025-3.351.001-5.026.001a.52.52 0 01-.499-.463c-.062-1.657-.001-3.316-.001-4.974a.52.52 0 01.463-.499c1.682-.063 3.367-.022 5.05 0zm-4.513.999V7.5c1.499 0 2.997.022 4.496-.001 1.675-.076 2.73-2.8.789-3.741a1.985 1.985 0 00-.798-.194c-1.495-.02-2.991-.001-4.487-.001z"
        />
        <path
          fillRule="nonzero"
          d="M9.619 7.501c1.78.069 3.26 1.925 2.798 3.707-.323 1.241-1.501 2.178-2.798 2.228-1.876.024-3.753.001-5.63.001a.516.516 0 01-.498-.461C3.425 11.319 3.489 9.659 3.489 8a.516.516 0 01.461-.498c1.888-.075 3.779-.025 5.669-.001zm-5.13.999v3.937c1.701 0 3.403.021 5.104-.001 1.673-.064 2.702-2.818.798-3.741a1.985 1.985 0 00-.798-.194C7.892 8.479 6.19 8.5 4.489 8.5z"
        />
      </svg>
    );
  }
}

IconBold.displayName = "IconBold";

export default IconBold;
