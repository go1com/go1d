import * as React from "react";

import formatDuration from "../../utils/durationFormatter";
import Text from "../Text";
import View, { ViewProps } from "../View";

import IconActivity from "../Icons/Activity";
import IconAssignment from "../Icons/Assignment";
import IconAudio from "../Icons/Audio";
import IconAward from "../Icons/Award";
import IconCalendar from "../Icons/Calendar";
import IconCheckbox from "../Icons/Checkbox";
import IconCourse from "../Icons/Course";
import IconDocument from "../Icons/Document";
import IconInteractive from "../Icons/Interactive";
import IconLink from "../Icons/Link";
import IconLti from "../Icons/Lti";
import IconQuiz from "../Icons/Quiz";
import IconText from "../Icons/Text";
import IconUserTick from "../Icons/UserTick";
import IconVideo from "../Icons/Video";
import IconVideoplay from "../Icons/Videoplay";

export const typeIconDic = {
  activities: IconActivity,
  attendance: IconUserTick,
  assignment: IconAssignment,
  document: IconDocument,
  h5p: IconVideoplay,
  iframe: IconLink,
  interactive: IconInteractive,
  question: IconCheckbox,
  quiz: IconQuiz,
  resource: IconText,
  link: IconLink,
  text: IconText,
  video: IconVideo,
  workshop: IconCourse,
  course: IconCourse,
  award: IconAward,
  lti: IconLti,
  event: IconCalendar,
  audio: IconAudio,
};

export interface LessonProps extends ViewProps {
  title?: string;
  type?: string;
  duration?: number;
  author?: string;
  typeLabel?: string | JSX.Element;
}

const Lesson: React.SFC<LessonProps> = ({
  title,
  type = "",
  duration,
  author,
  typeLabel,
  children,
  ...props
}: LessonProps) => {
  const TypeIconElement = typeIconDic[type.toLowerCase()]
    ? typeIconDic[type.toLowerCase()]
    : IconCourse;
  return (
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
          {typeof TypeIconElement === "function" && <TypeIconElement />}
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
            {typeLabel || type}
            {[author, !!duration && formatDuration(duration)]
              .filter(val => val)
              .map(val => " • " + val)}
          </Text>
        </View>
      </View>
      <View paddingY={3} flexDirection="row" overflow="hidden">
        {children}
      </View>
    </View>
  );
};

export default Lesson;
