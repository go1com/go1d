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
  iframe: "Weblink",
  interactive: "Interactive",
  question: "Checkbox",
  quiz: "Quiz",
  resource: "Content",
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
    flexDirection="row"
    overflow="hidden"
    borderBottom={1}
    borderColor="soft"
    {...props}
  >
    <View paddingY={5} justifyContent="center">
      {type && <Icon name={typeIconDic[type] ? typeIconDic[type] : "Course"} />}
    </View>
    <View paddingY={5} paddingX={4}>
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
      {children}
    </View>
  </View>
);

export default Lesson;
