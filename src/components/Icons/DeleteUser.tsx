import * as React from "react";
import IconBase from "../IconBase";

class DeleteUserIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M8 9H3.328c-.458 0-.89.083-1.297.25a3.5 3.5 0 00-1.062.71 3.122 3.122 0 00-.703 1.056A3.249 3.249 0 000 12.328v1.328c0 .209.06.373.18.492.12.12.284.18.492.18a.64.64 0 00.476-.18c.12-.12.18-.283.18-.492v-1.328c0-.562.193-1.036.578-1.422.386-.385.86-.578 1.422-.578H8c.563 0 1.036.193 1.422.578.385.386.578.86.578 1.422v1.328c0 .209.06.373.18.492.12.12.284.18.492.18a.64.64 0 00.476-.18c.12-.12.18-.283.18-.492v-1.328c0-.469-.083-.906-.25-1.312a3.39 3.39 0 00-.71-1.055 3.39 3.39 0 00-1.056-.711A3.424 3.424 0 008 9zM5.672 7.656c.458 0 .89-.083 1.297-.25a3.5 3.5 0 001.062-.71c.302-.298.537-.65.703-1.055.177-.407.266-.844.266-1.313s-.089-.906-.266-1.312a3.122 3.122 0 00-.703-1.055A3.488 3.488 0 006.97 1.25 3.383 3.383 0 005.672 1c-.469 0-.906.083-1.313.25a3.5 3.5 0 00-1.062.71 3.122 3.122 0 00-.703 1.056 3.249 3.249 0 00-.266 1.312c0 .469.089.906.266 1.313.166.406.4.757.703 1.054.302.297.656.534 1.062.711.407.167.844.25 1.313.25zm0-5.328c.562 0 1.036.193 1.422.578.385.386.578.86.578 1.422 0 .563-.193 1.037-.578 1.422-.386.385-.86.578-1.422.578-.573 0-1.05-.193-1.43-.578-.38-.385-.57-.86-.57-1.422 0-.562.19-1.036.57-1.422.38-.385.857-.578 1.43-.578zm8.922 4.328l1.203-1.187a.644.644 0 000-.938.644.644 0 00-.938 0l-1.187 1.203-1.203-1.203a.644.644 0 00-.938 0 .644.644 0 000 .938l1.203 1.187-1.203 1.203a.644.644 0 000 .938.893.893 0 00.242.148A.616.616 0 0012 9a.616.616 0 00.227-.055.893.893 0 00.242-.148l1.203-1.203 1.187 1.203a.89.89 0 00.243.148.615.615 0 00.226.055.643.643 0 00.242-.055.684.684 0 00.227-.148.644.644 0 000-.938l-1.203-1.203z" />
      </svg>
    );
  }
}

DeleteUserIcon.displayName = "IconDeleteUser";

export default DeleteUserIcon;
