import * as React from "react";
import Icon from "../Icon";
import Spinner from "../Spinner";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface LabelProps extends ViewProps {
  htmlFor?: string;
  statusText?: string;
  statusColor?: string;
  statusIcon?: string;
}

class Label extends React.PureComponent<LabelProps> {
  public static displayName = "Label";

  public render() {
    const {
      htmlFor,
      children,
      statusText,
      statusColor = "subtle",
      statusIcon,
      whiteSpace,
      ...props
    } = this.props;
    return (
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        paddingBottom={2}
        whiteSpace={whiteSpace}
        {...props}
      >
        <Text
          element="label"
          fontWeight="semibold"
          color="default"
          htmlFor={htmlFor}
        >
          {children}
        </Text>
        {statusText && (
          <View flexDirection="row" alignItems="center">
            {statusIcon &&
              (statusIcon === "Spinner" ? (
                <Spinner borderColor="accent" size={1} marginRight={2} />
              ) : (
                <Icon
                  size={1}
                  name={statusIcon}
                  color={statusColor}
                  marginRight={2}
                />
              ))}
            <Text
              fontSize={1}
              color={statusColor}
              fontWeight="semibold"
              textTransform="uppercase"
            >
              {statusText}
            </Text>
          </View>
        )}
      </View>
    );
  }
}

export default Label;
