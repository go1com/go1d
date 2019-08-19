import * as React from "react";

import Icon from "../Icon";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface EnrolmentStatusProps {
  type: "unpublished" | "enrolled" | "inProgress" | "completed" | "failed";
  text?: string;
  overDue?: boolean;
}

interface EnrolmentStatusComponentProps extends ViewProps {
  status: EnrolmentStatusProps;
}

interface StatusStyle {
  textColor?: string;
  iconName?: string;
  iconColor?: string;
}

const EnrolmentStatus: React.SFC<EnrolmentStatusComponentProps> = ({
  status,
  ...props
}) => {
  if (!status) {
    return null;
  }

  const { type, text, overDue } = status;

  const defaultStatusStyleMapping = {
    textColor: overDue || type === "failed" ? "danger" : "default",
  };
  const statusStyleMapping: { [key: string]: StatusStyle } = {
    unpublished: {
      iconName: "Lock",
    },
    enrolled: {
      iconName: "Enrolled",
      iconColor: overDue ? "danger" : "accent",
    },
    inProgress: {
      iconName: "InProgress",
      iconColor: overDue ? "danger" : "accent",
    },
    completed: {
      iconName: "Passed",
      iconColor: "success",
    },
    failed: {
      iconName: "NotPassed",
      iconColor: "danger",
    },
  };
  const statusStyle: StatusStyle = {
    ...(statusStyleMapping[type] || {}),
    ...defaultStatusStyleMapping,
  };
  return (
    <View flexDirection="row" {...props}>
      <Icon
        name={statusStyle.iconName}
        size={1}
        color={statusStyle.iconColor}
        marginTop={1}
        marginRight={2}
      />
      {text && (
        <Text color={statusStyle.textColor} fontSize={1} fontWeight="semibold">
          {text}
        </Text>
      )}
    </View>
  );
};

export default EnrolmentStatus;
