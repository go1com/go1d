import * as React from "react";

import ButtonMinimal from "../../ButtonMinimal";
import Text from "../../Text";
import View, { ViewProps } from "../../View";

import IconChevronDown from "../../Icons/ChevronDown";
import IconChevronUp from "../../Icons/ChevronUp";

interface TableHeaderCellProps extends ViewProps {
  text: React.ReactNode;

  /** The sort keyword that is currently ineffect. Used to determine whether to show the sort chevron */
  currentSort?: string;

  /** The sort keyword that this header sorts by */
  sort?: string;

  /** The current sort direction */
  direction?: "ASC" | "DESC";

  /** the action to take when the header is selected. The sort value is passed as data-sort on the event target */
  sortAction?: (evt: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const TableHeaderCell: React.SFC<TableHeaderCellProps> = ({
  text,
  sort,
  direction,
  currentSort,
  sortAction,
  ...props
}: TableHeaderCellProps) => {
  const {
    width = "100%",
    flexShrink = typeof width === "string" && width.substr(-1) === "%" ? 1 : 0,
    ...otherProps
  } = props;

  const SortIconElement = direction === "ASC" ? IconChevronUp : IconChevronDown;

  return (
    <View
      element="div"
      flexDirection="row"
      alignItems="center"
      paddingY={3}
      paddingX={3}
      flexBasis={width || 0}
      flexGrow={0}
      flexShrink={flexShrink}
      borderBottom={1}
      borderColor="divide"
      {...otherProps}
    >
      <HeaderWrapper sort={sort} onClick={sortAction}>
        <View flexDirection="row" alignItems="center">
          <Text textTransform="uppercase" color="subtle">
            {text}
          </Text>
          {sort && sort === currentSort && (
            <SortIconElement marginLeft={2} color="subtle" />
          )}
        </View>
      </HeaderWrapper>
    </View>
  );
};

export default TableHeaderCell;

const HeaderWrapper: React.SFC<any> = ({ sort, onClick, children }) => {
  if (sort) {
    return (
      <ButtonMinimal
        data-sort={sort}
        fontWeight="normal"
        paddingX={0}
        paddingY={0}
        onClick={onClick}
      >
        {children}
      </ButtonMinimal>
    );
  }

  return <React.Fragment>{children}</React.Fragment>;
};
