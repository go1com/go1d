import * as React from "react";

import { IconProps } from "../IconBase";
import Text from "../Text";
import View, { ViewProps } from "../View";

import EnrolledIcon from "../Icons/Enrolled";
import InProgressIcon from "../Icons/InProgress";
import LockIcon from "../Icons/Lock";
import NotPassedIcon from "../Icons/NotPassed";
import PassedIcon from "../Icons/Passed";

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
  icon?: React.ComponentType<IconProps>;
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
      icon: LockIcon,
    },
    enrolled: {
      icon: EnrolledIcon,
      iconColor: overDue ? "danger" : "accent",
    },
    inProgress: {
      icon: InProgressIcon,
      iconColor: overDue ? "danger" : "accent",
    },
    completed: {
      icon: PassedIcon,
      iconColor: "success",
    },
    failed: {
      icon: NotPassedIcon,
      iconColor: "danger",
    },
  };

  const statusStyle: StatusStyle = {
    ...(statusStyleMapping[type] || {}),
    ...defaultStatusStyleMapping,
  };

  const IconElement = statusStyle.icon;

  return (
    <View flexDirection="row" {...props}>
      {IconElement && (
        <IconElement
          size={1}
          color={statusStyle.iconColor}
          marginTop={1}
          marginRight={2}
        />
      )}
      {text && (
        <Text color={statusStyle.textColor} fontSize={1} fontWeight="semibold">
          {text}
        </Text>
      )}
    </View>
  );
};

export default EnrolmentStatus;
