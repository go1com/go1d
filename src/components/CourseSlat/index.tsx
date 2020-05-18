import * as React from "react";
import foundations from "../../foundations";
import formatDuration from "../../utils/durationFormatter";
import formatPrice from "../../utils/priceFormatter";
import Avatar from "../Avatar";
import EnrolmentStatus from "../EnrolmentStatus";
import Pill from "../Pill";
import Skeleton from "../SlatSkeleton";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

import { IconProps } from "../IconBase";
import ClockIcon from "../Icons/Clock";
import EmptyIcon from "../Icons/Empty";

interface EnrollmentProps {
  status?: string;
  pass?: number;
  dueDate?: string;
}

export interface CourseSlatProps extends ViewProps {
  actionRender?: () => React.ReactChild; // Deprecated
  actionRenderer?: () => React.ReactChild;
  author?: string | (() => React.ReactChild);
  authorAvatar?: string;
  contentRender?: () => React.ReactChild; // Deprecated
  contentRenderer?: () => React.ReactChild;
  courseImage?: string;
  currency?: string;
  description?: string;
  enrollment?: EnrollmentProps;
  duration?: number;
  passive?: boolean;
  price?: number;
  title?: string;
  type?: string;
  typeIcon?: React.ComponentType<IconProps>;
  tax?: {
    amount?: number;
    included?: boolean;
  };
  premium?: boolean;
  rating?: number;
  ratingRenderer?: (rating: number) => React.ReactNode;
  imageOverlayRenderer?: () => React.ReactNode;
}

const interactiveStyle = (colors, passive) => {
  let styles = { background: `${colors.background}` };
  if (!passive) {
    styles = Object.assign(styles, foundations.hoverStyle);
  }
  return styles;
};

export function dueDateFormatter(dueDateStr: string) {
  let overDue = false;
  let readingDay = "";
  if (dueDateStr && !isNaN(Date.parse(dueDateStr))) {
    const dueDate = new Date(dueDateStr);
    const diff = dueDate.getTime() - new Date().getTime();
    if (diff < 0) {
      overDue = true;
    }
    let diffDays = Math.abs(diff) / 1000 / 3600 / 24;
    diffDays = overDue ? Math.floor(diffDays) : Math.ceil(diffDays);
    if (diffDays === 0) {
      readingDay = "today";
    } else if (diffDays === 1) {
      readingDay = overDue ? "yesterday" : "tomorrow";
    } else if (diffDays > 13) {
      readingDay = `${dueDate.toLocaleDateString(
        typeof window !== "undefined"
          ? (window.navigator as any).userLanguage || window.navigator.language
          : "en-us",
        {
          day: "numeric",
          month: "short",
        }
      )} ${
        new Date().getFullYear() !== dueDate.getFullYear()
          ? dueDate.getFullYear()
          : ""
      }`;
    } else {
      readingDay = `${overDue ? "" : "in "}${diffDays} days${
        overDue ? " ago" : ""
      }`;
    }
    readingDay = `Due ${readingDay}`;
  }
  return { dueDateText: readingDay, overDue };
}

const enrollmentProgressRenderer = (enrolment: EnrollmentProps) => {
  const { dueDate } = enrolment;
  const { overDue, dueDateText } = dueDateFormatter(dueDate);
  const mappedStatus = getStatus(enrolment) as any;
  const statusProps = {
    overDue,
    type: mappedStatus,
    text: getStatusText(mappedStatus, dueDateText),
  };

  return <EnrolmentStatus status={statusProps} />;
};

const getStatus = (enrolment: EnrollmentProps): string => {
  const { status, pass } = enrolment;

  if (status === "in_progress" || status === "in-progress") {
    return "inProgress";
  }

  if (status === "completed" && pass === 0) {
    return "failed";
  }

  return status;
};

const getStatusText = (status: string, dueDateText?: string): string => {
  if (status === "completed" || status === "failed") {
    return "Completed";
  }

  if (status === "enrolled") {
    return dueDateText || "Enrolled";
  }

  if (status === "inProgress" || status === "in-progress") {
    return dueDateText || "In progress";
  }

  return "";
};

const CourseSlat: React.SFC<CourseSlatProps> = ({
  actionRender, // Deprecated
  actionRenderer,
  author,
  authorAvatar,
  contentRender, // Deprecated
  contentRenderer,
  courseImage,
  css,
  currency,
  description,
  enrollment,
  duration,
  passive,
  price,
  title,
  type,
  typeIcon: TypeIconElement,
  tax,
  skeleton = false,
  premium = false,
  rating,
  ratingRenderer,
  imageOverlayRenderer,
  ...props
}: CourseSlatProps) => {
  if (skeleton) {
    return <Skeleton />;
  }

  return (
    <Theme.Consumer>
      {({ spacing, breakpoints, colors }) => {
        return (
          <View
            borderRadius={2}
            boxShadow="crisp"
            flexDirection="row"
            marginBottom={4}
            color="default"
            css={[
              css,
              {
                overflow: "hidden",
                textDecoration: "none",
              },
              interactiveStyle(colors, passive),
            ]}
            {...props}
          >
            <View
              padding={3}
              alignItems="start"
              backgroundColor="default"
              backgroundOpacity={courseImage ? "none" : "emptyBackground"}
              css={{
                overflow: "hidden",
                backgroundImage: courseImage
                  ? `url(${courseImage})`
                  : undefined,
                backgroundSize: "cover",
                position: "relative",
                height: 142,
                width: 221,
                [breakpoints.sm]: {
                  height: 130,
                  width: 130,
                },
              }}
            >
              {!courseImage && (
                <View
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                  width="100%"
                  opacity="emptyIcon"
                >
                  <EmptyIcon size={7} color="default" />
                </View>
              )}
              {(type || TypeIconElement) && (
                <View
                  flexDirection="row"
                  padding={2}
                  borderRadius={1}
                  color="background"
                  backgroundColor="contrast"
                  css={{
                    position: "absolute",
                    bottom: 10,
                    left: 10,
                  }}
                >
                  {TypeIconElement && (
                    <View paddingRight={2}>
                      <TypeIconElement />
                    </View>
                  )}
                  {type && (
                    <Text color="background" fontSize={1}>
                      {type.toUpperCase()}
                    </Text>
                  )}
                </View>
              )}
              {imageOverlayRenderer && imageOverlayRenderer()}
            </View>
            <View
              paddingY={4}
              paddingX={5}
              flexShrink={1}
              flexGrow={1}
              width="100%"
              flexDirection="column"
              justifyContent="space-between"
            >
              <View>
                {title && (
                  <Text
                    fontSize={3}
                    fontWeight="semibold"
                    css={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      [foundations.breakpoints.sm]: {
                        wordWrap: "break-word",
                        whiteSpace: "initial",
                        lineHeight: 1.2,
                        maxHeight: "2.4rem",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        display: "-webkit-box",
                        fontSize: foundations.type.scale.sm[2],
                      },
                    }}
                  >
                    {title}
                  </Text>
                )}
                {(duration || author) && (
                  <View flexDirection="row" marginTop={3} flexWrap="wrap">
                    {authorAvatar && (
                      <View paddingRight={3}>
                        <Avatar src={authorAvatar} size={1} />
                      </View>
                    )}
                    {author && (
                      <View paddingRight={3}>
                        {typeof author === "string" ? (
                          <Text color="subtle" fontSize={1}>
                            {author}
                          </Text>
                        ) : (
                          author()
                        )}
                      </View>
                    )}
                    {!!duration && (
                      <View
                        flexDirection="row"
                        css={{
                          [foundations.breakpoints.sm]: {
                            display: "none",
                          },
                        }}
                      >
                        <ClockIcon
                          size={1}
                          color="muted"
                          marginRight={2}
                          marginTop={1}
                        />
                        <Text color="subtle" fontSize={1}>
                          {formatDuration(duration)}
                        </Text>
                      </View>
                    )}
                  </View>
                )}
              </View>
              <View>
                <View flexDirection="row" alignItems="center">
                  {currency && !enrollment && price > 0 && (
                    <React.Fragment>
                      <Text
                        color="accent"
                        fontWeight="semibold"
                        marginRight={3}
                      >
                        {formatPrice(currency, price, tax)}
                      </Text>
                      {premium && (
                        <Text fontSize={1} marginRight={3} color="subtle">
                          or
                        </Text>
                      )}
                    </React.Fragment>
                  )}
                  {premium && !enrollment && (
                    <Pill
                      fontSize={1}
                      marginRight={2}
                      paddingY={1}
                      color="accent"
                    >
                      Premium
                    </Pill>
                  )}
                  {ratingRenderer && ratingRenderer(rating)}
                </View>

                {enrollment && enrollmentProgressRenderer(enrollment)}
                {contentRender && contentRender()}
                {contentRenderer && contentRenderer()}
                {description && (
                  <Text
                    color="subtle"
                    marginTop={3}
                    css={{
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      [foundations.breakpoints.sm]: {
                        display: "none",
                      },
                    }}
                  >
                    {description}
                  </Text>
                )}
              </View>
            </View>
            {(actionRender || actionRenderer) && (
              <View
                css={{
                  padding: spacing[5],
                  paddingLeft: spacing[7],
                  [breakpoints.sm]: {
                    padding: spacing[4],
                  },
                }}
              >
                {actionRender && actionRender()}
                {actionRenderer && actionRenderer()}
              </View>
            )}
          </View>
        );
      }}
    </Theme.Consumer>
  );
};

export default CourseSlat;
