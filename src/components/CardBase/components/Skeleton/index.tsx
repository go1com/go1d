import * as React from "react";
import Skeleton from "../../../Skeleton";
import View, { ViewProps } from "../../../View";

const CardSkeleton = (props: ViewProps) => (
  <View height="100%" width="100%" padding={4} {...props}>
    <Skeleton
      alignItems="center"
      justifyContent="center"
      backgroundColor="delicate"
      borderRadius={5}
      border={2}
      borderColor="transparent"
      width="100%"
      css={{
        overflow: "hidden",
        maxWidth: "100%",
        paddingTop: "100%",
      }}
    />
    <Skeleton
      backgroundColor="delicate"
      borderRadius={3}
      height={24}
      marginTop={4}
    />
    <Skeleton
      backgroundColor="delicate"
      borderRadius={3}
      height={24}
      marginTop={4}
    />
  </View>
);

export default CardSkeleton;
