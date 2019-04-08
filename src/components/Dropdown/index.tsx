import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import Portal from "../Portal";
import View, { ViewProps } from "../View";
import DropdownItem from "./DropdownItem";

export interface DropdownProps extends ViewProps {
  children: (params: any) => React.ReactNode;
  itemList: any;
  renderFunction?: (
    item: any,
    index: number,
    getItemProps: (options: any) => any
  ) => any;
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
  renderFunction = defaultRenderFunction,
  css,
  itemToString,
  placement,
  offset,
  onSelect,
  ...props
}: DropdownProps) => (
  <Downshift itemToString={itemToString} onSelect={onSelect}>
    {({
      getItemProps,
      getMenuProps,
      getRootProps,
      isOpen,
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
          {isOpen && (
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
                        renderFunction(item, i, getItemProps)
                      )}
                    </View>
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
