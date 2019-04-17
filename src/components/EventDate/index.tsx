import * as React from "react";
import foundations from "../../foundations";
import Icon from "../Icon";
import Link from "../Link";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface SessionProps extends ViewProps {
  start: Date | string;
  end?: Date | string;
  onClick?: (evt: React.SyntheticEvent) => void;
  active?: boolean;
  location: {
    title: string;
    thoroughfare?: string;
    administrative_area?: string;
    locality?: string;
    country?: string;
    latitude?: number;
    longitude?: number;
  };
  bigDate?: boolean;
  showAttendees?: boolean;
  availableSeats?: number;
  limit?: number;
  mapLink?: boolean;
}

const formatTime = timestamp => {
  const time = new Date(timestamp);
  const min = time.getMinutes();
  const hours = time.getHours();
  if (hours > 12) {
    return `${hours - 12}:${min > 9 ? `${min}PM` : `0${min}PM`}`;
  }
  return `${hours}:${min > 9 ? `${min}AM` : `0${min}AM`}`;
};

const EventDate: React.SFC<SessionProps> = ({
  start,
  end,
  location,
  onClick,
  active,
  bigDate,
  showAttendees,
  availableSeats,
  limit,
  mapLink,
  ...props
}: SessionProps) => {
  const locationString = `${location.thoroughfare &&
    `${location.thoroughfare}, `} ${location.locality &&
    `${location.locality}, `} ${location.administrative_area &&
    `${location.administrative_area}, `} ${location.country &&
    `${location.country}`}`;
  const date = new Date(start);
  const day = date.getDate();
  const month = date.toLocaleDateString("en-us", { month: "short" });
  const year = date.getFullYear();
  const startTime = formatTime(start);
  const endTime = formatTime(end);
  return (
    <React.Fragment>
      {mapLink &&
        location.latitude && (
          <Link
            target="_blank"
            href={`https://www.google.com/maps/?q=${location.latitude},${
              location.longitude
            }`}
            css={{
              fontSize: "13px",
              textAlign: "right",
              display: "block",
              marginBottom: foundations.spacing[3],
              color: foundations.colors.accent,
              "&:hover, &:active": {
                textDecoration: "underline",
              },
            }}
          >
            View map
          </Link>
        )}
      <View
        backgroundColor="background"
        overflow="hidden"
        borderRadius={2}
        boxShadow="crisp"
        color="default"
        flexDirection="row"
        marginX={1}
        marginBottom={3}
        flexGrow={1}
        onClick={onClick}
        borderColor={active ? "accent" : "transparent"}
        border={1}
        css={{
          cursor: onClick && "pointer",
        }}
        {...props}
      >
        {bigDate && (
          <View
            flexDirection="column"
            width="30%"
            maxWidth={80}
            alignItems="center"
            justifyContent="center"
            padding={3}
          >
            <Text color="accent" fontSize={3}>
              {day}
            </Text>
            <Text fontSize={3}>{month.toUpperCase()}</Text>
          </View>
        )}
        <View
          flexGrow={1}
          flexDirection="column"
          paddingY={3}
          width={bigDate ? "70%" : "100%"}
        >
          <View
            flexDirection="row"
            paddingTop={1}
            paddingLeft={bigDate ? 0 : 4}
          >
            <View width="15%" maxWidth={25} minWidth={20}>
              <Icon
                name="MapPin"
                display="inline"
                color="faded"
                marginRight={3}
              />
            </View>
            <View width="85%">
              <Text fontSize={1} ellipsis={true}>
                {location.title}
              </Text>
              <Text fontSize={1} color="subtle" ellipsis={true}>
                {locationString}
              </Text>
            </View>
          </View>
          <View
            flexDirection="row"
            paddingTop={1}
            paddingLeft={bigDate ? 0 : 4}
          >
            <View width="15%" maxWidth={25} minWidth={20}>
              <Icon
                name="Clock"
                display="inline"
                color="faded"
                marginRight={3}
              />
            </View>
            <View width="85%">
              <Text fontSize={1} ellipsis={true}>
                {day} {month} {year} {" • "} {startTime}
                {endTime && ` - ${endTime}`}
              </Text>
            </View>
          </View>
          {showAttendees &&
            availableSeats !== null && (
              <View
                borderTop={1}
                borderColor="soft"
                marginTop={3}
                paddingY={3}
                paddingX={4}
                flexDirection="row"
                alignItems="center"
              >
                <View
                  backgroundColor="soft"
                  borderRadius={10}
                  padding={2}
                  marginRight={3}
                >
                  <Icon name="AddUser" color="muted" />
                </View>
                {availableSeats > 0 &&
                  limit && (
                    <Text fontSize={1} color="subtle">
                      {limit - availableSeats}
                      {limit && `/${limit}`} attendees
                    </Text>
                  )}
                {availableSeats === 0 && <Text>SOLD OUT</Text>}
              </View>
            )}
        </View>
      </View>
    </React.Fragment>
  );
};

export default EventDate;
