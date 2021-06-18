import * as React from "react";

import View, { ViewProps } from "../View";
import TR from "./TR";

export interface TableProps extends ViewProps {
  header?: React.ReactNodeArray;
  rows: React.ReactNodeArray;
}

/**
 * The `table` component takes in two props, rows, and headers, and then automatically applies styling. There are a number of defined table components listed, such as `TH`, `TR`, and `TD`, that should be used with Go1d.
 */
const Table: React.SFC<TableProps> = ({
  header,
  rows,
  css,
  ...props
}: TableProps) => (
  <View
    element="div"
    display="block"
    paddingY={4}
    boxShadow="crisp"
    borderRadius={5}
    width="100%"
    css={[
      {
        borderCollapse: "collapse",
      },
      css,
    ]}
    {...props}
  >
    {header && <TR>{header}</TR>}
    <View element="div">{rows}</View>
  </View>
);

export default Table;
