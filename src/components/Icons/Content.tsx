import * as React from "react";
import IconBase from "../IconBase";

class ContentIcon extends IconBase {
  getIconComponent() {
    return (
      <svg fill="currentColor" viewBox="0 0 16 16" {...props}>
        <path d="M.426 4.998l7.284 3.65a.2.2 0 00.12.06c.045.006.102.008.17.008.068 0 .125-.002.17-.008a.2.2 0 00.12-.06l7.284-3.65a.731.731 0 00.324-.265A.704.704 0 0016 4.35a.704.704 0 00-.102-.384.731.731 0 00-.324-.265L8.29.051A1.155 1.155 0 007.957 0a.991.991 0 00-.315.051L.358 3.701a.736.736 0 00-.264.265A.753.753 0 000 4.35c0 .148.034.275.102.383a.73.73 0 00.324.265zM8 1.518l5.68 2.832L8 7.18 2.32 4.35 8 1.518zm6.994 9.45L8 14.465l-6.994-3.497a.807.807 0 00-.554-.008c-.188.062-.316.161-.384.298-.068.148-.074.324-.017.529.057.204.16.347.307.426l7.284 3.634c.068.08.128.125.179.136A.83.83 0 008 16c.068 0 .125-.003.17-.008a.176.176 0 00.12-.077l7.284-3.634a.564.564 0 00.358-.383.685.685 0 00-.069-.555.67.67 0 00-.392-.375c-.182-.068-.34-.068-.477 0zm0-3.633L8 10.832 1.006 7.335a.842.842 0 00-.554-.017c-.188.057-.316.159-.384.307a.842.842 0 00-.017.554c.057.188.16.316.307.384l7.284 3.65a.405.405 0 00.179.12.83.83 0 00.179.017c.068 0 .125-.003.17-.009a.2.2 0 00.12-.06l7.284-3.633a.614.614 0 00.358-.4.685.685 0 00-.069-.555.641.641 0 00-.392-.367c-.182-.062-.34-.06-.477.009z" />
      </svg>
    );
  }
}

ContentIcon.displayName = "IconContent";

export default ContentIcon;
