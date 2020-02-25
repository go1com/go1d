import * as React from "react";
import IconBase from "../IconBase";

class FolderIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M13.817 2.933H7.642L6.397 1.04A.923.923 0 006.14.835.658.658 0 005.817.75H2.183c-.625 0-1.145.208-1.56.623C.208 1.788 0 2.308 0 2.933v10.184c0 .614.208 1.131.623 1.552.415.42.935.631 1.56.631h11.634c.625 0 1.145-.21 1.56-.631.415-.42.623-.938.623-1.552v-8c0-.626-.207-1.146-.623-1.561-.415-.415-.935-.623-1.56-.623zm.733 10.184a.732.732 0 01-.196.528c-.13.137-.31.205-.537.205H2.183c-.227 0-.406-.068-.537-.204a.733.733 0 01-.196-.53V2.934c0-.227.065-.406.196-.537.13-.13.31-.196.537-.196h3.275l1.229 1.893c.08.069.17.134.272.196a.585.585 0 00.308.094h6.55c.227 0 .406.066.537.196.13.131.196.31.196.538v8z" />
      </svg>
    );
  }
}

FolderIcon.displayName = "IconFolder";

export default FolderIcon;
