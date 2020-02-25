import * as React from "react";
import IconBase from "../IconBase";

class HeadingTwoIcon extends IconBase {
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
          d="M1.127 12.313v-8.59h1.137V7.25h4.465V3.723h1.136v8.589H6.729V8.264H2.264v4.048H1.127zm13.746-1.014v1.014H9.195a1.879 1.879 0 01.123-.733c.145-.387.376-.767.695-1.142.318-.375.778-.809 1.38-1.301.933-.766 1.564-1.372 1.892-1.82.328-.447.492-.87.492-1.268a1.41 1.41 0 00-.448-1.058c-.299-.287-.688-.43-1.169-.43-.508 0-.914.152-1.219.457-.304.304-.459.726-.462 1.265l-1.084-.111c.074-.809.353-1.425.837-1.849.485-.424 1.135-.635 1.952-.635.824 0 1.476.228 1.957.685.48.457.72 1.023.72 1.699 0 .344-.07.682-.211 1.014-.14.332-.374.682-.7 1.049-.326.367-.868.871-1.626 1.511-.633.532-1.039.892-1.219 1.082a3.447 3.447 0 00-.445.571h4.213z"
        />
      </svg>
    );
  }
}

HeadingTwoIcon.displayName = "IconHeadingTwo";

export default HeadingTwoIcon;
