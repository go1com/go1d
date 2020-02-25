import * as React from "react";
import IconBase from "../IconBase";

class IconHeadingThree extends IconBase {
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
          d="M1.127 12.313v-8.59h1.137V7.25h4.465V3.723h1.136v8.589H6.729V8.264H2.264v4.048H1.127zm8.209-2.268l1.055-.141c.121.598.327 1.029.618 1.292.291.264.645.396 1.063.396.496 0 .915-.172 1.257-.516.342-.344.513-.769.513-1.277 0-.485-.158-.884-.475-1.198-.316-.315-.719-.472-1.207-.472-.199 0-.447.039-.744.117l.117-.926c.071.008.127.012.17.012.449 0 .854-.117 1.213-.352.359-.234.539-.595.539-1.084a1.28 1.28 0 00-.393-.96c-.261-.254-.599-.381-1.013-.381-.41 0-.752.129-1.026.386-.273.258-.449.645-.527 1.161l-1.055-.188c.129-.707.422-1.255.879-1.643.457-.389 1.026-.583 1.705-.583.469 0 .901.1 1.295.301.395.201.697.476.906.824.209.347.313.716.313 1.107 0 .371-.1.709-.299 1.014-.199.304-.494.546-.885.726.508.117.903.361 1.184.73.281.369.422.831.422 1.385a2.54 2.54 0 01-.82 1.908c-.547.521-1.239.782-2.075.782-.754 0-1.379-.225-1.878-.674-.498-.449-.782-1.031-.852-1.746z"
        />
      </svg>
    );
  }
}

IconHeadingThree.displayName = "IconHeadingThree";

export default IconHeadingThree;
