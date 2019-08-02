import * as React from "react";

import formatDuration from "../../utils/durationFormatter";
import Icon from "../Icon";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface LessonProps extends ViewProps {
  title?: string;
  type?: string;
  duration?: number;
  author?: string;
}

export const typeIconDic = {
  activities: "Activity",
  attendance: "UserTick",
  assignment: "Assignment",
  document: "Document",
  h5p: "Videoplay",
  iframe: "Link",
  interactive: "Interactive",
  question: "Checkbox",
  quiz: "Quiz",
  resource: "Text",
  link: "Link",
  text: "Text",
  video: "Video",
  workshop: "Course",
  course: "Course",
  award: "Award",
  lti: "Lti",
  event: "Calendar",
};

const Lesson: React.SFC<LessonProps> = ({
  title,
  type,
  duration,
  author,
  children,
  ...props
}: LessonProps) => (
  <View
    backgroundColor="background"
    borderBottom={1}
    borderColor="soft"
    {...props}
  >
    <View
      flexDirection="row"
      overflow="hidden"
      flexShrink={children ? 1 : undefined}
    >
      <View paddingBottom={5} paddingTop={6} justifyContent="flex-start">
        {type && (
          <Icon
            name={
              typeIconDic[type.toLowerCase()]
                ? typeIconDic[type.toLowerCase()]
                : "Course"
            }
          />
        )}
      </View>
      <View paddingY={5} paddingX={4} flexGrow={1}>
        {title && (
          <Text fontSize={2} marginBottom={1}>
            {title}
          </Text>
        )}
        <Text
          color="subtle"
          fontSize={1}
          fontWeight="semibold"
          textTransform="uppercase"
        >
          {[type, author, !!duration && formatDuration(duration)]
            .filter(val => val)
            .join(" • ")}
        </Text>
      </View>
    </View>
    <View paddingY={3} flexDirection="row" overflow="hidden">
      {children}
    </View>
  </View>
);

export default Lesson;
