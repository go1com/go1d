import * as React from "react";
import Skeleton from "../Skeleton";
import View from "../View";

export default () => (
  <View
    borderRadius={2}
    flexDirection="row"
    marginBottom={4}
    color="default"
    width="100%"
    overflow="hidden"
  >
    <Skeleton padding={3} height={64} width={64} borderRadius={2} />
    <View padding={4} flexGrow={1}>
      <Skeleton height={10} width="50%" maxWidth={250} marginBottom={3} />
      <Skeleton
        backgroundColor="faded"
        maxWidth={215}
        height={10}
        width="45%"
      />
    </View>
  </View>
);
