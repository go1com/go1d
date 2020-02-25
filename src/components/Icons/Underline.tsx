import * as React from "react";
import IconBase from "../IconBase";

class UnderlineIcon extends IconBase {
  getIconComponent() {
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
          d="M12.061 1.299c.345.037.61.316.622.668 0 3.632.208 7.836-3.029 9.076-2.775 1.064-6.292-1.13-6.354-4.324-.01-1.584 0-3.168 0-4.752.025-.689 1.245-.921 1.339-.047.125 3.515-.601 8.04 3.31 8.09 1.747.022 3.359-1.53 3.394-3.308.01-1.578 0-3.156 0-4.735.014-.383.22-.686.718-.668zM2.63 14.032h10.724m.052-.669c.346.041.367.128.457.233.329.386.063 1.083-.509 1.106H2.63c-.714-.028-.973-1.302 0-1.341 3.592 0 7.187-.139 10.776.002z"
        />
      </svg>
    );
  }
}

UnderlineIcon.displayName = "IconUnderline";

export default UnderlineIcon;
