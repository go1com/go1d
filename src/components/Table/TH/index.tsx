import * as React from "react";

import ButtonMinimal from "../../ButtonMinimal";
import Icon from "../../Icon";
import Text from "../../Text";
import View, { Props as ViewProps } from "../../View";

interface Props extends ViewProps {
  text: string;

  /** The sort keyword that is currently ineffect. Used to determine whether to show the sort chevron */
  currentSort?: string;

  /** The sort keyword that this header sorts by */
  sort?: string;

  /** The current sort direction */
  direction?: "up" | "down";

  /** the action to take when the header is selected. The sort value is passed as data-sort on the event target */
  sortAction?: (evt: React.SyntheticEvent<HTMLButtonElement>) => void;
}

const TableHeaderCell: React.SFC<Props> = ({
  text,
  css,
  sort,
  direction,
  currentSort,
  sortAction,
  ...props
}: Props) => {
  const { width, ...otherProps } = props;
  return (
    <View
      element="div"
      display="block"
      alignItems="center"
      paddingY={3}
      paddingX={3}
      flexBasis={width || 0}
      flexGrow={1}
      flexShrink={1}
      borderBottom={1}
      borderColor="divide"
      {...otherProps}
    >
      <HeaderWrapper sort={sort} onClick={sortAction}>
        <View flexDirection="row" alignItems="center">
          <Text textTransform="uppercase" color="subtle">
            {text}
          </Text>
          {sort &&
            sort === currentSort && (
              <Icon
                name={direction === "up" ? "ChevronUp" : "ChevronDown"}
                marginLeft={2}
                color="subtle"
              />
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
