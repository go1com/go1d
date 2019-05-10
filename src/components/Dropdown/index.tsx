import Downshift, * as DownshiftType from "downshift";
import * as React from "react";
import { Manager, Popper, Reference, RefHandler } from "react-popper";
import Portal from "../Portal";
import View, { ViewProps } from "../View";
import DropdownItem from "./DropdownItem";

type GetItemProps<T> = (options: DownshiftType.GetItemPropsOptions<T>) => any;

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
  children: (params: any) => React.ReactNode;
  itemList?: any[];
  renderMenu?: RenderMenu<any>;
  renderFunction?: RenderItem<any>;
  onInputValueChange?: OnInputValueChange;
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
  offset?: string | number;
}

function defaultRenderFunction(
  item: {
    title: string;
    description: string;
    iconName?: string;
    href?: any;
    onClick?: (evt: React.SyntheticEvent<any>) => void;
  },
  index: number,
  getItemProps: (options: any) => any
) {
  return <DropdownItem item={item} getItemProps={getItemProps} index={index} />;
}

const Dropdown: React.SFC<DropdownProps> = ({
  children,
  itemList,
  renderMenu,
  renderFunction = defaultRenderFunction,
  onInputValueChange,
  css,
  itemToString,
  placement,
  offset,
  onSelect,
  isOpen,
  ...props
}: DropdownProps) => (
  <Downshift
    itemToString={itemToString}
    onSelect={onSelect}
    onInputValueChange={onInputValueChange}
    isOpen={isOpen}
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
                        borderRadius={3}
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
