import * as React from "react";
import IconBase from "../IconBase";

class IconTrash extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M14.569 2.914h-2.914V2.18c0-.613-.207-1.13-.622-1.55C10.62.21 10.1 0 9.474 0H6.577c-.624 0-1.144.21-1.559.63-.414.42-.622.938-.622 1.551v.733H1.483a.732.732 0 0 0-.529.196.687.687 0 0 0-.204.52c0 .227.068.405.204.536.137.13.313.196.529.196h.732v9.457c0 .613.208 1.13.622 1.55.415.42.935.631 1.56.631h7.258c.625 0 1.145-.21 1.56-.63.414-.42.621-.938.621-1.551V4.362h.733a.732.732 0 0 0 .528-.196c.136-.13.205-.31.205-.537a.687.687 0 0 0-.205-.52.732.732 0 0 0-.528-.195zM5.845 2.18a.73.73 0 0 1 .196-.528c.13-.136.31-.205.536-.205h2.897c.227 0 .406.069.537.205.13.136.196.312.196.528v.733H5.845V2.18zm6.543 11.638a.703.703 0 0 1-.196.52c-.13.13-.31.196-.537.196H4.396c-.227 0-.406-.066-.536-.196a.703.703 0 0 1-.196-.52V4.362h8.724v9.457zm-5.81-7.276c-.228 0-.407.065-.537.196-.13.13-.196.31-.196.537v4.362c0 .216.065.389.196.52.13.13.31.196.536.196.216 0 .39-.066.52-.196a.702.702 0 0 0 .196-.52V7.276c0-.227-.065-.406-.196-.537a.703.703 0 0 0-.52-.196zm2.896 0a.703.703 0 0 0-.52.196c-.13.13-.195.31-.195.537v4.362c0 .216.065.389.195.52.131.13.304.196.52.196.227 0 .406-.066.537-.196a.702.702 0 0 0 .196-.52V7.276c0-.227-.065-.406-.196-.537-.13-.13-.31-.196-.537-.196z" />
      </svg>
    );
  }
}

IconTrash.displayName = "IconTrash";

export default IconTrash;
