import * as React from "react";
import ButtonMinimal, { ButtonMinimalProps } from "../../ButtonMinimal";
import Text from "../../Text";

export interface Item extends ButtonMinimalProps {
  title: string;
  href?: any;
  iconName?: string;
  color?: string;
  iconColor?: string;
  onClick?: ((evt: React.SyntheticEvent) => void);
}

const DropdownMenu = (item: Item, index: number, getItemProps) => {
  // destructuring so its not passed through
  const { onClick, ...props } = item;

  return (
    <ButtonMinimal
      key={index}
      href={item.href}
      {...getItemProps({
        key: index,
        item,
        index,
        onClick: e => {
          e.stopPropagation();
        },
      })}
      iconColor={item.iconColor || "subtle"}
      color={item.color || "default"}
      justifyContent="flex-start"
      paddingTop={3}
      paddingRight={4}
      paddingBottom={3}
      paddingLeft={4}
      borderRadius={0}
      {...props}
    >
      <Text>{item.title}</Text>
    </ButtonMinimal>
  );
};

export default DropdownMenu;
