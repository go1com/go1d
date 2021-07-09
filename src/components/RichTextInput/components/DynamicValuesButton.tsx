import * as React from "react";
import ButtonMinimal from "../../ButtonMinimal";
import Dropdown from "../../Dropdown";
import { FormatButton, FormatButtonProps } from "./FormatButton";

export interface DynamicValue {
  label: string;
  value: string;
}

interface DynamicValuesButtonProps extends Omit<FormatButtonProps, "onClick"> {
  onTextInsert?: (text: string) => void;
  dynamicValues?: DynamicValue[];
}

export const DynamicValuesButton = ({
  onTextInsert,
  dynamicValues = [],
  ...props
}: DynamicValuesButtonProps) => {
  const handleClick = (text: string) => {
    onTextInsert?.(text);
  };

  const itemToString = (item: DynamicValue) => (item ? item.label : "");

  const buttonRenderer = ({ ref, getToggleButtonProps }) => (
    <FormatButton {...getToggleButtonProps()} innerRef={ref} {...props} />
  );

  const renderFunction: React.ComponentProps<
    typeof Dropdown
  >["renderFunction"] = (item, index, getItemProps) => {
    return (
      <ButtonMinimal
        key={index}
        {...getItemProps({
          key: index,
          item,
          index,
        })}
        height={30}
        onClick={handleClick.bind(null, item.value)}
        marginBottom={index !== dynamicValues.length - 1 ? 2 : 0}
        marginX={3}
        justifyContent="flex-start"
        fontWeight="normal"
      >
        {item.label}
      </ButtonMinimal>
    );
  };

  return (
    <Dropdown
      itemToString={itemToString}
      renderFunction={renderFunction}
      itemList={dynamicValues}
      placement="bottom-start"
    >
      {buttonRenderer}
    </Dropdown>
  );
};
