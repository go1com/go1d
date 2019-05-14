import * as React from "react";
import Icon from "../Icon";
import Text from "../Text";
import View, { ViewProps } from "../View";

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
    event: "Calendar",
    course: "Course",
  };
  const iconName = typeIcons[String(type).toLowerCase()] || typeIcons.course;

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
        <Icon name={iconName} />
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
