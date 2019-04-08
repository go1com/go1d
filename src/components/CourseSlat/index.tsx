import * as React from "react";
import foundations from "../../foundations";
import formatDuration from "../../utils/durationFormatter";
import formatPrice from "../../utils/priceFormatter";
import Avatar from "../Avatar";
import Icon from "../Icon";
import Skeleton from "../SlatSkeleton";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

interface EnrollmentProps {
  status?: string;
  dueDate?: string;
}

export interface CourseSlatProps extends ViewProps {
  actionRender?: () => React.ReactChild;
  author?: string | (() => React.ReactChild);
  authorAvatar?: string;
  contentRender?: () => React.ReactChild;
  courseImage?: string;
  currency?: string;
  description?: string;
  enrollment?: EnrollmentProps;
  duration?: number;
  passive?: boolean;
  price?: number;
  title?: string;
  type?: string;
  typeIcon?: string;
  tax?: {
    amount?: number;
    included?: boolean;
  };
}

const interactiveStyle = (colors, passive) => {
  const styles = { background: `${colors.background}` };
  if (!passive) {
    styles["&:hover, &:focus"] = {
      boxShadow: foundations.shadows.strong,
      cursor: "pointer",
      transform: "translateY(-1px)",
    };
    styles["&:active"] = {
      boxShadow: foundations.shadows.crisp,
      transform: "translateY(1px)",
    };
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
        window
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
  const { status, dueDate } = enrolment;
  const { overDue, dueDateText } = dueDateFormatter(dueDate);
  return (
    <View flexDirection="row">
      <Icon
        name={
          status === "enrolled"
            ? "Enrolled"
            : status === "in_progress"
              ? "InProgress"
              : "Passed"
        }
        size={1}
        color={
          status === "completed" ? "success" : overDue ? "danger" : "accent"
        }
        marginRight={2}
        marginTop={1}
      />
      <Text
        color={overDue ? "danger" : "default"}
        fontSize={1}
        fontWeight="semibold"
      >
        {status === "enrolled"
          ? "Enrolled"
          : status === "in_progress"
            ? dueDateText
              ? dueDateText
              : "In progress"
            : status === "completed"
              ? "Completed"
              : ""}
      </Text>
    </View>
  );
};

const CourseSlat: React.SFC<CourseSlatProps> = ({
  actionRender,
  author,
  authorAvatar,
  contentRender,
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
  typeIcon,
  tax,
  skeleton = false,
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
                  <Icon size={7} name="Empty" color="default" />
                </View>
              )}
              {(type || typeIcon) && (
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
                  {typeIcon && (
                    <View paddingRight={2}>
                      <Icon name={typeIcon} />
                    </View>
                  )}
                  {type && (
                    <Text color="background" fontSize={1}>
                      {type.toUpperCase()}
                    </Text>
                  )}
                </View>
              )}
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
                        <Icon
                          name="Clock"
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
                {currency &&
                  !enrollment &&
                  price > 0 && (
                    <View flexDirection="row">
                      <Text color="accent" fontWeight="semibold">
                        {formatPrice(currency, price, tax)}
                      </Text>
                    </View>
                  )}
                {enrollment && enrollmentProgressRenderer(enrollment)}
                {contentRender && contentRender()}
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
            {actionRender && (
              <View
                css={{
                  padding: spacing[5],
                  paddingLeft: spacing[7],
                  [breakpoints.sm]: {
                    padding: spacing[4],
                  },
                }}
              >
                {actionRender()}
              </View>
            )}
          </View>
        );
      }}
    </Theme.Consumer>
  );
};

export default CourseSlat;
