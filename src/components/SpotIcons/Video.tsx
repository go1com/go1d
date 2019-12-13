import * as React from "react";

const Video: React.SFC<React.SVGProps<SVGSVGElement>> = (
  props: React.SVGProps<SVGSVGElement>
) => (
  <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path
      fillRule="evenodd"
      d="M2.362 3.642a72.65 72.65 0 0119.276 0h.001a1.48 1.48 0 011.26 1.211 38.468 38.468 0 010 13.555 1.48 1.48 0 01-1.26 1.21 72.644 72.644 0 01-19.277 0H2.36a1.48 1.48 0 01-1.26-1.21 38.47 38.47 0 010-13.556l.493.088-.493-.086a1.48 1.48 0 011.26-1.212zm.133.991a.48.48 0 00-.408.393v.002a37.47 37.47 0 000 13.204v.002a.48.48 0 00.408.393 71.646 71.646 0 0019.01 0 .48.48 0 00.409-.393v-.002a37.468 37.468 0 000-13.204v-.002a.48.48 0 00-.409-.393 71.65 71.65 0 00-19.01 0z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      d="M8.285 7.892c.278-.49.9-.657 1.386-.381h.001l5.664 3.237a1.017 1.017 0 010 1.763v.001l-5.664 3.237h-.001a1.016 1.016 0 01-1.519-.88V8.393c0-.178.048-.35.133-.5m.873.489l-.003.004a.02.02 0 00-.003.007v6.473c0 .009.008.017.018.017 0 0 .003 0 .007-.003l5.662-3.236a.016.016 0 00.005-.004.02.02 0 00.003-.013l-.002-.005.435-.247-.434.248a.015.015 0 00-.007-.006L9.177 8.38a.016.016 0 00-.006-.003.018.018 0 00-.013.004z"
      clipRule="evenodd"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Video.displayName = "IconVideo";

export default Video;
