import * as React from "react";

import formatDuration from "../../utils/durationFormatter";
import Text from "../Text";
import View, { ViewProps } from "../View";

import ActivityIcon from "../Icons/Activity";
import AssignmentIcon from "../Icons/Assignment";
import AudioIcon from "../Icons/Audio";
import AwardIcon from "../Icons/Award";
import CalendarIcon from "../Icons/Calendar";
import CheckboxIcon from "../Icons/Checkbox";
import CourseIcon from "../Icons/Course";
import DocumentIcon from "../Icons/Document";
import InteractiveIcon from "../Icons/Interactive";
import LinkIcon from "../Icons/Link";
import LtiIcon from "../Icons/Lti";
import QuizIcon from "../Icons/Quiz";
import TextIcon from "../Icons/Text";
import UserTickIcon from "../Icons/UserTick";
import VideoIcon from "../Icons/Video";
import VideoplayIcon from "../Icons/Videoplay";

export const typeIconDic = {
  activities: ActivityIcon,
  attendance: UserTickIcon,
  assignment: AssignmentIcon,
  document: DocumentIcon,
  h5p: VideoplayIcon,
  iframe: LinkIcon,
  interactive: InteractiveIcon,
  question: CheckboxIcon,
  quiz: QuizIcon,
  resource: TextIcon,
  link: LinkIcon,
  text: TextIcon,
  video: VideoIcon,
  workshop: CourseIcon,
  course: CourseIcon,
  award: AwardIcon,
  lti: LtiIcon,
  event: CalendarIcon,
  audio: AudioIcon,
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
    : CourseIcon;
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
