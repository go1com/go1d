import * as React from "react";
import Skeleton from "../../Skeleton";
import Theme from "../../Theme";
import View from "../../View";

export default () => (
  <Theme.Consumer>
    {({ radius }) => (
      <View
        borderRadius={4}
        boxShadow="crisp"
        color="default"
        height="100%"
        width={221}
        css={{
          textDecoration: "none",
        }}
      >
        <Skeleton
          padding={3}
          alignItems="start"
          height={128}
          width={221}
          css={{
            borderRadius: `${radius[4]}px ${radius[4]}px 0 0`,
          }}
        />
        <View padding={4}>
          <View
            flexDirection="column"
            justifyContent="space-between"
            paddingBottom={2}
          >
            <Skeleton
              fontSize={3}
              maxWidth={450}
              width="85%"
              marginBottom={4}
            />
            <Skeleton
              backgroundColor="faded"
              fontSize={1}
              maxWidth={250}
              width="50%"
              marginBottom={3}
            />
            <Skeleton
              backgroundColor="faded"
              fontSize={1}
              maxWidth={215}
              width="45%"
            />
          </View>
        </View>
      </View>
    )}
  </Theme.Consumer>
);
