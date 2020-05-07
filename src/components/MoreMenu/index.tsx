import { ControllerStateAndHelpers } from "downshift";
import * as React from "react";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import { ButtonProps } from "../Button";
import ButtonFilled from "../ButtonFilled";
import ButtonMinimal from "../ButtonMinimal";
import Dropdown from "../Dropdown";
import Theme from "../Theme";
import View from "../View";
import DropdownMenuItem, { Item as DropdownItem } from "./DropdownMenuItem";

import EllipsisIcon from "../Icons/Ellipsis";

export interface MoreMenuProps extends ButtonProps {
  itemList: DropdownItem[];
  loading?: boolean;
  loader?: React.ReactElement<any>;
  isButtonFilled?: boolean;
}

interface State {
  showMenu: boolean;
}

const itemToString = (item: DropdownItem) => (item ? item.title : "");

class MoreMenu extends React.Component<MoreMenuProps, State> {
  public static defaultProps = {
    isButtonFilled: true,
  };

  constructor(props: any) {
    super(props);
    this.state = { showMenu: false };
  }

  @autobind
  public onSelect(
    selectedItem: any,
    stateAndHelpers: ControllerStateAndHelpers<any>
  ) {
    if (selectedItem) {
      safeInvoke(selectedItem.onClick, selectedItem);
      safeInvoke(this.props.onSelect, selectedItem, stateAndHelpers);
    }
  }

  public render() {
    const {
      loading = false,
      loader,
      isButtonFilled,
      itemList,
      size,
      onSelect,
      ...props
    } = this.props;

    const buttonProps = {
      "aria-label": "open menu",
      size,
      marginLeft: "auto",
    };

    const Loader = () => (
      <View key={1} paddingX={4} paddingY={3}>
        {loader}
      </View>
    );

    return (
      <Theme.Consumer>
        {({ spacing }) => (
          <Dropdown
            itemList={loading ? [{ title: "loader" }] : itemList}
            renderFunction={loading ? Loader : DropdownMenuItem}
            itemToString={itemToString}
            placement="bottom-end"
            offset={`0, ${spacing[2]}, 0, 0`}
            onSelect={this.onSelect}
          >
            {({ ref, getToggleButtonProps }) => {
              const toggleButtonProps = getToggleButtonProps({
                onClick: e => {
                  e.stopPropagation();
                },
              });
              return isButtonFilled ? (
                <ButtonFilled
                  icon={EllipsisIcon}
                  {...buttonProps}
                  {...toggleButtonProps}
                  innerRef={ref}
                  {...props}
                />
              ) : (
                <ButtonMinimal
                  data-testid="toggle"
                  icon={EllipsisIcon}
                  innerRef={ref}
                  {...buttonProps}
                  {...toggleButtonProps}
                  {...props}
                />
              );
            }}
          </Dropdown>
        )}
      </Theme.Consumer>
    );
  }
}

export default MoreMenu;
