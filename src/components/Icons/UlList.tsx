import * as React from "react";
import IconBase from "../IconBase";

class UlListIcon extends IconBase {
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
          d="M14.01 10.783v1.299a.21.21 0 01-.064.152.21.21 0 01-.153.065H5.568a.209.209 0 01-.152-.065.206.206 0 01-.064-.152v-1.299a.207.207 0 01.216-.216h8.225c.059 0 .11.021.153.064a.212.212 0 01.064.152zm0-3.463v1.299a.21.21 0 01-.064.152.209.209 0 01-.153.064H5.568a.208.208 0 01-.152-.064.206.206 0 01-.064-.152V7.32a.207.207 0 01.216-.216h8.225c.059 0 .11.021.153.064a.212.212 0 01.064.152zm0-3.463v1.299a.212.212 0 01-.064.152.209.209 0 01-.153.064H5.568a.208.208 0 01-.152-.064.208.208 0 01-.064-.152V3.857c0-.059.021-.109.064-.152a.208.208 0 01.152-.064h8.225c.059 0 .11.021.153.064a.21.21 0 01.064.152zM3.919 10.783v1.299a.743.743 0 01-.014.152c-.008.043-.019.065-.031.065H2.196c-.012 0-.022-.022-.031-.065a.749.749 0 01-.013-.152v-1.299c0-.063.004-.115.012-.155.008-.041.019-.061.032-.061h1.678c.012 0 .023.021.031.064a.75.75 0 01.014.152zm0-3.463v1.299a.743.743 0 01-.014.152c-.008.043-.019.064-.031.064H2.196c-.012 0-.022-.021-.031-.064a.749.749 0 01-.013-.152V7.32c0-.063.004-.115.012-.155.008-.041.019-.061.032-.061h1.678c.012 0 .023.021.031.064a.75.75 0 01.014.152zm0-3.463v1.299a.75.75 0 01-.014.152c-.008.043-.019.064-.031.064H2.196c-.012 0-.022-.021-.031-.064a.755.755 0 01-.013-.152V3.857c0-.059.004-.109.013-.152s.019-.064.031-.064h1.678c.012 0 .023.021.031.064a.743.743 0 01.014.152z"
        />
      </svg>
    );
  }
}

UlListIcon.displayName = "IconUlList";

export default UlListIcon;
