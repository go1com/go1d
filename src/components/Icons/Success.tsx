import * as React from "react";
import IconBase from "../IconBase";

class SuccessIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.614 6.578c-.218 0-.39.065-.514.196a.7.7 0 00-.188.506v.62c0 .87-.163 1.685-.489 2.446a6.283 6.283 0 01-1.337 1.99 6.283 6.283 0 01-1.99 1.337 6.144 6.144 0 01-2.447.49c-.87 0-1.685-.164-2.446-.49a6.284 6.284 0 01-1.99-1.337 6.283 6.283 0 01-1.337-1.99 6.144 6.144 0 01-.49-2.447c0-.87.163-1.685.49-2.446a6.284 6.284 0 011.337-1.99 6.284 6.284 0 011.99-1.337 6.144 6.144 0 012.446-.49c.457 0 .895.05 1.313.147.419.098.84.234 1.264.408a.69.69 0 00.53.016.587.587 0 00.367-.359.69.69 0 00.017-.53.587.587 0 00-.36-.367A8.741 8.741 0 009.265.438 6.906 6.906 0 007.649.25c-1.065 0-2.06.201-2.984.603a7.445 7.445 0 00-2.439 1.631 7.882 7.882 0 00-1.639 2.43A7.65 7.65 0 000 7.9c0 1.066.196 2.06.587 2.985a7.73 7.73 0 001.64 2.438 7.73 7.73 0 002.438 1.64 7.399 7.399 0 002.984.603c1.066 0 2.06-.201 2.985-.604a7.73 7.73 0 002.438-1.639 7.73 7.73 0 001.64-2.438c.391-.924.587-1.92.587-2.985v-.62a.7.7 0 00-.188-.505.657.657 0 00-.497-.196zm1.174-5.431a.7.7 0 00-.49-.196.7.7 0 00-.489.196L7.65 8.323 6.051 6.725a.672.672 0 00-.979 0 .672.672 0 000 .979L7.16 9.79a.79.79 0 00.253.147.733.733 0 00.236.049.733.733 0 00.237-.049.79.79 0 00.253-.147l7.649-7.665a.672.672 0 000-.979z" />
      </svg>
    );
  }
}

SuccessIcon.displayName = "IconSuccess";

export default SuccessIcon;
