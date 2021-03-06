import * as React from "react";
import { IconProps } from "../IconBase";
import Spinner from "../Spinner";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface LabelProps extends ViewProps {
  htmlFor?: string;
  statusText?: string;
  statusColor?: string;
  statusIcon?: React.ComponentType<IconProps>;
  spinnerIcon?: boolean;
  color?: string;
  labelSuffix?: React.ReactNode;
}

class Label extends React.PureComponent<LabelProps> {
  public static displayName = "Label";

  public render() {
    const {
      htmlFor,
      children,
      statusText,
      statusColor = "subtle",
      statusIcon: StatusIcon,
      spinnerIcon,
      whiteSpace,
      color = "default",
      labelSuffix,
      ...props
    } = this.props;
    return (
      <View
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-end"
        whiteSpace={whiteSpace}
        paddingBottom={2}
        {...props}
      >
        <Text
          element="label"
          fontWeight="semibold"
          color={color}
          htmlFor={htmlFor}
        >
          {children}
        </Text>
        {(statusText || labelSuffix) && (
          <View flexDirection="row" alignItems="flex-end">
            <View flexDirection="row">
              {(StatusIcon || spinnerIcon) &&
                (spinnerIcon ? (
                  <Spinner borderColor="accent" size={1} marginRight={2} />
                ) : (
                  <StatusIcon size={1} color={statusColor} marginRight={2} />
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
            {labelSuffix && <View paddingLeft={4}>{labelSuffix}</View>}
          </View>
        )}
      </View>
    );
  }
}

export default Label;
