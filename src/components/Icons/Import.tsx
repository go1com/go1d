import * as React from "react";
import IconBase from "../IconBase";

class ImportIcon extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M11.315 7.547L8.53 4.75a.683.683 0 00-.968 0 .688.688 0 00-.002.971l1.62 1.628H.686a.686.686 0 000 1.371H9.18l-1.622 1.63a.686.686 0 00.972.967l2.784-2.797.002-.002a.686.686 0 000-.97h-.002z" />
        <path d="M11.122.63A7.743 7.743 0 008 0C6.886 0 5.845.21 4.878.63c-.325.136-.636.29-.932.46-.46.265-.426.906.026 1.183.25.154.566.146.823.003A6.432 6.432 0 018 1.448c.91 0 1.763.17 2.559.512.796.34 1.49.806 2.08 1.397a6.56 6.56 0 011.4 2.079 6.43 6.43 0 01.511 2.555c0 .91-.17 1.761-.512 2.556a6.56 6.56 0 01-1.398 2.08 6.572 6.572 0 01-2.081 1.396A6.431 6.431 0 018 14.535a6.431 6.431 0 01-3.19-.82.82.82 0 00-.825.004c-.454.278-.487.922-.027 1.189.293.17.6.324.92.462.967.42 2.008.63 3.122.63 1.114 0 2.155-.21 3.122-.63a8.084 8.084 0 002.55-1.713 8.076 8.076 0 001.714-2.547c.41-.966.614-2.005.614-3.119a7.987 7.987 0 00-.614-3.118 8.233 8.233 0 00-1.714-2.539A7.786 7.786 0 0011.122.63z" />
      </svg>
    );
  }
}

ImportIcon.displayName = "IconImport";

export default ImportIcon;
