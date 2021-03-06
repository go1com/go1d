import { ControllerStateAndHelpers, StateChangeOptions } from "downshift";
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

import IconEllipsis from "../Icons/Ellipsis";

export interface MoreMenuProps extends ButtonProps {
  itemList: DropdownItem[];
  loading?: boolean;
  loader?: React.ReactElement<any>;
  isButtonFilled?: boolean;
  onStateChange?: (showMenu: boolean) => void;
}

const itemToString = (item: DropdownItem) => (item ? item.title : "");

/**
 * The more menu is a dropdown for more actions, typically accessed in a bar of actions and always by a more button. It helps keep secondary actions accessible while reducing visual clutter.
 */
class MoreMenu extends React.Component<MoreMenuProps> {
  public static defaultProps = {
    isButtonFilled: true,
  };

  constructor(props: any) {
    super(props);
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

  @autobind
  public handleStateChange(
    options: StateChangeOptions<any>,
    _: ControllerStateAndHelpers<any>
  ) {
    safeInvoke(this.props.onStateChange, options.isOpen);
  }

  public render() {
    const {
      loading = false,
      loader,
      isButtonFilled,
      itemList,
      size,
      onSelect,
      onStateChange,
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
            onStateChange={this.handleStateChange}
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
                  role="combobox"
                  aria-label="combobox"
                  icon={IconEllipsis}
                  {...buttonProps}
                  {...toggleButtonProps}
                  innerRef={ref}
                  {...props}
                />
              ) : (
                <ButtonMinimal
                  role="combobox"
                  aria-label="combobox"
                  data-testid="toggle"
                  icon={IconEllipsis}
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
