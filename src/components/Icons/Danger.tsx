import * as React from "react";
import IconBase from "../IconBase";

class IconDanger extends IconBase {
  getIconComponent(props) {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M8 0C6.886 0 5.845.21 4.878.63a7.787 7.787 0 00-2.55 1.704 8.234 8.234 0 00-1.714 2.54A7.986 7.986 0 000 7.99c0 1.114.205 2.153.614 3.119.42.977.992 1.826 1.714 2.547a8.085 8.085 0 002.55 1.713c.967.42 2.008.63 3.122.63 1.114 0 2.155-.21 3.121-.63a8.085 8.085 0 002.55-1.713 8.076 8.076 0 001.715-2.547c.41-.966.614-2.005.614-3.119a7.985 7.985 0 00-.614-3.118 8.233 8.233 0 00-1.714-2.539A7.786 7.786 0 0011.122.63 7.742 7.742 0 008 0zm0 14.535c-.91 0-1.763-.17-2.559-.512a6.572 6.572 0 01-2.08-1.397 6.564 6.564 0 01-1.4-2.079 6.413 6.413 0 01-.511-2.556c0-.908.17-1.76.512-2.555a6.564 6.564 0 011.398-2.08A6.572 6.572 0 015.441 1.96 6.432 6.432 0 018 1.448c.91 0 1.763.17 2.559.512.796.34 1.49.806 2.08 1.397a6.566 6.566 0 011.4 2.079 6.43 6.43 0 01.511 2.555c0 .91-.17 1.761-.512 2.556a6.565 6.565 0 01-1.398 2.08 6.573 6.573 0 01-2.081 1.396A6.432 6.432 0 018 14.535zM8 4.362a.733.733 0 00-.529.196c-.136.13-.204.31-.204.537V7.99c0 .228.068.407.204.537.137.13.313.196.529.196a.733.733 0 00.529-.196c.136-.13.204-.31.204-.537V5.095c0-.227-.068-.406-.204-.537A.733.733 0 008 4.362zm-.512 6.032c-.068.08-.122.156-.162.23a.588.588 0 00-.06.281c0 .114.02.208.06.281.04.074.094.15.162.23.08.069.157.123.23.162a.59.59 0 00.282.06c.114 0 .208-.02.281-.06.074-.04.151-.093.23-.162a.972.972 0 00.163-.264.67.67 0 00.06-.247.67.67 0 00-.06-.247.974.974 0 00-.162-.264.704.704 0 00-1.024 0z" />
      </svg>
    );
  }
}

IconDanger.displayName = "IconDanger";

export default IconDanger;
