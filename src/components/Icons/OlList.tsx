import * as React from "react";
import IconBase from "../IconBase";

class IconOlList extends IconBase {
  getIconComponent(props) {
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
          d="M4.466 12.867c0 .36-.123.645-.369.852-.246.207-.551.311-.916.311-.478 0-.866-.149-1.164-.446l.386-.596c.221.203.46.305.717.305a.597.597 0 00.341-.098.326.326 0 00.146-.288c0-.288-.237-.415-.71-.378l-.176-.379c.036-.045.109-.143.22-.295a4.129 4.129 0 01.537-.625v-.007c-.072 0-.181.002-.328.007a14.4 14.4 0 01-.328.007v.358h-.717v-1.028h2.253v.595l-.643.778c.23.054.413.165.548.331a.92.92 0 01.203.596zm.013-4.241v1.075H2.031a2.458 2.458 0 01-.041-.365c0-.23.053-.44.159-.629.106-.19.233-.343.382-.46.149-.117.298-.224.447-.321.149-.097.276-.195.382-.295.106-.099.159-.2.159-.304 0-.113-.033-.2-.098-.26a.378.378 0 00-.267-.092c-.208 0-.39.131-.548.393l-.575-.4c.108-.229.269-.409.483-.537.215-.129.452-.193.714-.193.329 0 .606.094.832.281.225.187.338.44.338.761a.953.953 0 01-.23.619 1.792 1.792 0 01-.507.436 3.848 3.848 0 00-.511.341c-.155.124-.235.243-.24.356h.859v-.406h.71zm9.531 2.157v1.299a.21.21 0 01-.064.152.21.21 0 01-.153.065H5.568a.209.209 0 01-.152-.065.206.206 0 01-.064-.152v-1.299a.207.207 0 01.216-.216h8.225c.059 0 .11.021.153.064a.212.212 0 01.064.152zm-9.524-6.08v.669H2.22v-.669h.724l.003-.822c.003-.363.004-.637.004-.822v-.081h-.014c-.036.076-.149.198-.338.365l-.48-.514.92-.859h.717v2.733h.73zM14.01 7.32v1.299a.21.21 0 01-.064.152.209.209 0 01-.153.064H5.568a.208.208 0 01-.152-.064.206.206 0 01-.064-.152V7.32a.207.207 0 01.216-.216h8.225c.059 0 .11.021.153.064a.212.212 0 01.064.152zm0-3.463v1.299a.212.212 0 01-.064.152.209.209 0 01-.153.064H5.568a.208.208 0 01-.152-.064.208.208 0 01-.064-.152V3.857c0-.059.021-.109.064-.152a.208.208 0 01.152-.064h8.225c.059 0 .11.021.153.064a.21.21 0 01.064.152z"
        />
      </svg>
    );
  }
}

IconOlList.displayName = "IconOlList";

export default IconOlList;
