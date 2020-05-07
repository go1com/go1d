import * as React from "react";
import Text from "../Text";
import View, { ViewProps } from "../View";

import CalendarIcon from "../Icons/Calendar";
import CourseIcon from "../Icons/Course";

export interface ContentTypeProps extends ViewProps {
  type?: string;
  text?: string;
  background?: string;
}

const ContentType: React.SFC<ContentTypeProps> = ({
  background = "background",
  type = "Course",
  text,
  ...props
}: ContentTypeProps) => {
  const typeIcons = {
    event: CalendarIcon,
    course: CourseIcon,
  };

  const IconElement = typeIcons[String(type).toLowerCase()] || typeIcons.course;

  return (
    <View
      flexDirection="row"
      padding={2}
      borderRadius={1}
      color={background === "background" ? "contrast" : "background"}
      backgroundColor={background}
      {...props}
    >
      <View paddingRight={!!text ? 2 : 0}>
        <IconElement />
      </View>

      {text && (
        <Text
          color={background === "background" ? "contrast" : "background"}
          fontSize={1}
        >
          {text && text.toUpperCase()}
        </Text>
      )}
    </View>
  );
};

export default ContentType;
