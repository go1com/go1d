import * as React from "react";
import ButtonMinimal from "../../ButtonMinimal";
import Popover from "../../Popover";
import View from "../../View";
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

  const handleRenderer: React.ComponentProps<
    typeof Popover
  >["handleRenderer"] = (ref, handleProps) => (
    <FormatButton ref={ref} onClick={handleClick} {...props} {...handleProps} />
  );

  const contentRenderer: React.ComponentProps<
    typeof Popover
  >["contentRenderer"] = (ref, contentProps, _) => {
    return (
      <View
        innerRef={ref}
        {...contentProps}
        border={1}
        borderRadius={1}
        borderColor="faded"
        padding={3}
        flexDirection="column"
        backgroundColor="background"
      >
        {dynamicValues.map(({ label, value }, index) => (
          <ButtonMinimal
            key={`dynamic-value-${value}`}
            height={30}
            onClick={handleClick.bind(null, value)}
            marginBottom={index !== dynamicValues.length - 1 ? 2 : 0}
            justifyContent="flex-start"
            fontWeight="normal"
          >
            {label}
          </ButtonMinimal>
        ))}
      </View>
    );
  };

  return (
    <Popover
      triggerEvent="onClick"
      placement="bottom-start"
      handleRenderer={handleRenderer}
      contentRenderer={contentRenderer}
    />
  );
};
