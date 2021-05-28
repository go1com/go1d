import * as React from "react";
import Skeleton from "../Skeleton";
import View from "../View";

export default () => (
  <View flexDirection="row" width="100%" overflow="hidden">
    <View paddingRight={3} flexGrow={1} flexShrink={1}>
      <Skeleton
        borderRadius={2}
        height={24}
        width="100%"
        marginBottom={4}
        backgroundColor="delicate"
      />
      <Skeleton
        borderRadius={2}
        backgroundColor="delicate"
        width="100%"
        marginBottom={4}
        height={24}
      />
      <View width="40%" flexDirection="row" alignItems="center">
        <Skeleton
          borderRadius={1}
          backgroundColor="delicate"
          height={48}
          width={48}
        />
        <View paddingLeft={3}>
          <Skeleton
            borderRadius={1}
            backgroundColor="delicate"
            width={100}
            height={20}
            marginBottom={3}
          />
          <Skeleton
            borderRadius={1}
            backgroundColor="delicate"
            width={100}
            height={20}
          />
        </View>
      </View>
    </View>
    <Skeleton
      backgroundColor="delicate"
      borderRadius={[4, 5, 5]}
      height={[80, 128, 128]}
      width={[80, 128, 128]}
    />
  </View>
);
