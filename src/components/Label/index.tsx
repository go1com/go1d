import * as React from "react";
import Icon from "../Icon";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface LabelProps extends ViewProps {
  htmlFor?: string;
  statusText?: string;
  statusColor?: string;
  statusIcon?: string;
}

const Label: React.SFC<LabelProps> = ({
  htmlFor,
  children,
  statusText,
  statusColor = "subtle",
  statusIcon,
  ...props
}: any) => {
  return (
    <View
      flexDirection="row"
      justifyContent="space-between"
      alignItems="flex-end"
      paddingBottom={2}
      {...props}
    >
      <Text element="label" fontWeight="semibold" htmlFor={htmlFor}>
        {children}
      </Text>
      {statusText && (
        <View flexDirection="row" alignItems="center">
          {statusIcon && (
            <Icon
              size={1}
              name={statusIcon}
              color={statusColor}
              marginRight={2}
            />
          )}
          <Text
            fontSize={1}
            color={statusColor}
            css={{ textTransform: "uppercase" }}
          >
            {statusText}
          </Text>
        </View>
      )}
    </View>
  );
};

Label.displayName = "Label";

export default Label;
