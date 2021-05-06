import * as React from "react";
import Skeleton from "../../../Skeleton";
import View, { ViewProps } from "../../../View";

const CardSkeleton = (props: ViewProps) => (
  <View height="100%" width="100%" css={{ textDecoration: "none" }} {...props}>
    <View
      alignItems="center"
      justifyContent="center"
      backgroundColor="delicate"
      borderRadius={5}
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
      marginTop={3}
    />
  </View>
);

export default CardSkeleton;
