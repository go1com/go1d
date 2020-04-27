import * as React from "react";
import foundations from "../../foundations";
import formatDuration from "../../utils/durationFormatter";
import formatPrice from "../../utils/priceFormatter";
import EnrolmentStatus, { EnrolmentStatusProps } from "../EnrolmentStatus";
import Icon from "../Icon";
import MoreMenu from "../MoreMenu";
import { Item as DropdownItem } from "../MoreMenu/DropdownMenuItem";
import Pill from "../Pill";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";
import Skeleton from "./Skeleton";

interface MetaItem {
  icon?: string;
  text: string;
}

export interface CourseCardProps extends ViewProps {
  courseImage?: string;
  title?: string;
  author?: string | (() => React.ReactChild);
  duration?: number;
  type?: string;
  typeIcon?: string;
  passive?: boolean;
  itemList?: DropdownItem[];
  metaList?: MetaItem[];
  price?: number;
  currency?: string;
  status?: EnrolmentStatusProps | null;
  premium?: boolean;
  imageOverlayRenderer?: () => React.ReactNode;
}

const interactiveStyle = (colors, passive) => {
  let styles = { background: `${colors.background}` };
  if (!passive) {
    styles = Object.assign(styles, foundations.hoverStyle);
  }
  return styles;
};

const CourseCard: React.SFC<CourseCardProps> = ({
  author,
  courseImage,
  css,
  children,
  duration,
  passive = true,
  itemList,
  metaList = [],
  title,
  type,
  typeIcon,
  price,
  currency,
  status,
  skeleton = false,
  premium = false,
  tax,
  imageOverlayRenderer,
  ...props
}: CourseCardProps) => {
  if (skeleton) {
    return <Skeleton />;
  }

  const lineList: MetaItem[] = [...metaList];
  if (duration) {
    lineList.unshift({ icon: "Clock", text: formatDuration(duration) });
  }

  return (
    <Theme.Consumer>
      {({ spacing, colors }) => {
        return (
          <View
            borderRadius={2}
            boxShadow="crisp"
            color="default"
            height="100%"
            width={221}
            css={[
              css,
              {
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
                borderRadius: `${spacing[2]}px ${spacing[2]}px 0 0`,
                overflow: "hidden",
                backgroundImage: courseImage
                  ? `url(${courseImage})`
                  : undefined,
                backgroundSize: "cover",
                position: "relative",
                height: 128,
                width: 221,
                maxWidth: "100%",
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
              {status &&
                (status.type === "enrolled" ||
                  status.type === "inProgress") && (
                  <View
                    flexDirection="row"
                    padding={2}
                    borderRadius={1}
                    color="background"
                    css={{ position: "absolute", bottom: 8, left: 10 }}
                  >
                    <Icon name="Play" size={[7, 6, 5]} />
                  </View>
                )}
              {imageOverlayRenderer && (
                <View
                  css={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                  }}
                >
                  {imageOverlayRenderer()}
                </View>
              )}
            </View>
            <View padding={4} flexGrow={1}>
              <View
                flexDirection="row"
                justifyContent="space-between"
                paddingBottom={2}
              >
                {author && (
                  <View paddingBottom={2}>
                    <Text fontSize={1} color="subtle" lineClamp={1}>
                      {author}
                    </Text>
                  </View>
                )}
                {itemList && itemList.length > 0 && (
                  <MoreMenu
                    itemList={itemList}
                    isButtonFilled={false}
                    width={20}
                    height={20}
                    paddingY={0}
                    backgroundColor="transparent"
                    css={{
                      ":hover, :focus": {
                        background: "none",
                        svg: {
                          color: colors.subtle,
                        },
                      },
                      paddingRight: 0,
                    }}
                  />
                )}
              </View>
              {title && (
                <Text fontWeight="semibold" paddingRight={3} lineClamp={2}>
                  {title}
                </Text>
              )}
              {lineList.map((item, index) => (
                <View
                  flexDirection="row"
                  marginTop={index === 0 ? 3 : 1}
                  key={index}
                >
                  {item.icon && (
                    <Icon
                      name={item.icon}
                      size={1}
                      color="muted"
                      marginTop={1}
                      marginRight={2}
                    />
                  )}
                  {type && index === 0 && (
                    <Text color="subtle" fontSize={1} lineClamp={1}>
                      {item.text} ･ {type}
                    </Text>
                  )}
                  {index > 0 && (
                    <Text color="subtle" fontSize={1} lineClamp={1}>
                      {item.text}
                    </Text>
                  )}
                </View>
              ))}
              {children && <Text lineClamp={1}>{children}</Text>}
              {((currency && price > 0) || premium) && (
                <View
                  flexDirection="row"
                  alignItems="center"
                  marginTop="auto"
                  paddingTop={3}
                >
                  {currency && price > 0 && (
                    <React.Fragment>
                      <Text color="accent" fontWeight="semibold" lineClamp={1}>
                        {formatPrice(currency, price, tax)}
                      </Text>
                      {premium && (
                        <Text
                          fontSize={1}
                          marginLeft={3}
                          marginRight={3}
                          color="subtle"
                          lineClamp={1}
                        >
                          or
                        </Text>
                      )}
                    </React.Fragment>
                  )}
                  {premium && (
                    <Pill fontSize={1} paddingY={1} color="accent">
                      Premium
                    </Pill>
                  )}
                </View>
              )}
              <EnrolmentStatus
                status={status}
                marginTop="auto"
                paddingTop={3}
              />
            </View>
          </View>
        );
      }}
    </Theme.Consumer>
  );
};

export default CourseCard;
