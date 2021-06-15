import Downshift, {
  DownshiftProps as DownshiftPropsOriginal,
  GetItemPropsOptions,
} from "downshift";
import * as React from "react";
import { Manager, Popper, Reference, RefHandler } from "react-popper";
import { IconProps } from "../IconBase";
import Portal from "../Portal";
import View, { ViewProps } from "../View";
import DropdownItem from "./DropdownItem";

type GetItemProps<T> = (options: GetItemPropsOptions<T>) => any;

type OnInputValueChange = (inputValue: string, stateAndHelpers: object) => void;

type RenderMenu<T> = (
  ref: RefHandler,
  style: React.CSSProperties,
  getItemProps: GetItemProps<T>,
  downshiftParams: any
) => React.ReactNode;

type RenderItem<T> = (
  item: T,
  index: number,
  getItemProps: GetItemProps<T>,
  downshiftParams: any
) => React.ReactNode;

export interface DropdownProps extends ViewProps {
  /** Children needs to be a function that returns React elements that are meant to open the dropdown, taking in a reference and adding it as a prop. Note that the ref is required, if you do not have it the dropdown will not render. */
  children: (params: any) => React.ReactNode;
  itemList?: any[];
  renderMenu?: RenderMenu<any>;
  /** The render function takes in an item, and index value and the getItemProps found in Downshift. This will return a React elements. Each React element needs to also have the result from getItemProps destructured onto it, with getItemProps having the key, item and index passed to it. */
  renderFunction?: RenderItem<any>;
  initialInputValue?: string;
  onInputValueChange?: OnInputValueChange;
  onOuterClick?: () => void;
  onStateChange?: DownshiftPropsOriginal<any>["onStateChange"];
  itemToString: (item: any) => string;
  placement?:
    | "auto-start"
    | "auto"
    | "auto-end"
    | "top-start"
    | "top"
    | "top-end"
    | "right-start"
    | "right"
    | "right-end"
    | "bottom-end"
    | "bottom"
    | "bottom-start"
    | "left-end"
    | "left"
    | "left-start";
  /** Offset can be used to customize the placement of the dropdown, for the syntax please see the popper.js docs */
  offset?: string | number;
  labelId?: string;
}

function defaultRenderFunction(
  item: {
    title: string;
    description: string;
    icon?: React.ComponentType<IconProps>;
    href?: any;
    onClick?: (evt: React.SyntheticEvent<any>) => void;
  },
  index: number,
  getItemProps: (options: any) => any
) {
  return <DropdownItem item={item} getItemProps={getItemProps} index={index} />;
}

/**
 * This component renders a dropdown list of items, which can be used with multiple other components. It can be used with menus, searches and selects. The child is the element that triggers the dropdown (e.g. button or text input), with the renderFunction taking in the list of items and displaying them as defined.
 */
const Dropdown: React.SFC<DropdownProps> = ({
  children,
  itemList,
  renderMenu,
  renderFunction = defaultRenderFunction,
  initialInputValue,
  onInputValueChange,
  onOuterClick,
  onStateChange,
  css,
  itemToString,
  placement,
  offset,
  onSelect,
  isOpen,
  labelId,
  ...props
}: DropdownProps) => (
  <Downshift
    itemToString={itemToString}
    onSelect={onSelect}
    initialInputValue={initialInputValue}
    onInputValueChange={onInputValueChange}
    onOuterClick={onOuterClick}
    isOpen={isOpen}
    labelId={labelId}
    onStateChange={onStateChange}
  >
    {({
      getItemProps,
      getMenuProps,
      getRootProps,
      isOpen: isOpenInternal,
      ...downshiftParams
    }) => (
      <View {...getRootProps({ refKey: "innerRef" })}>
        <Manager>
          <Reference>
            {({ ref }) =>
              children({
                ref,
                isOpen: isOpenInternal,
                ...downshiftParams,
              })
            }
          </Reference>
          {isOpenInternal && (
            <Portal>
              <Popper
                placement={placement}
                modifiers={offset && { offset: { offset } }}
              >
                {({ ref, style }) => (
                  <View
                    {...getMenuProps({
                      refKey: "innerRef",
                    })}
                  >
                    {renderMenu &&
                      renderMenu(ref, style, getItemProps, downshiftParams)}
                    {!renderMenu && (
                      <View
                        backgroundColor="background"
                        boxShadow="strong"
                        borderRadius={2}
                        border={1}
                        borderColor="delicate"
                        style={style}
                        innerRef={ref}
                        transition="none"
                        paddingY={3}
                        zIndex="dropdown"
                        {...props}
                      >
                        {itemList.map((item, i) =>
                          renderFunction(item, i, getItemProps, downshiftParams)
                        )}
                      </View>
                    )}
                  </View>
                )}
              </Popper>
            </Portal>
          )}
        </Manager>
      </View>
    )}
  </Downshift>
);

export default Dropdown;
