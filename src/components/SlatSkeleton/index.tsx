import * as React from "react";
import Skeleton from "../Skeleton";
import View from "../View";

export default () => (
  <View
    borderRadius={2}
    boxShadow="crisp"
    flexDirection={["column", "row"]}
    marginBottom={4}
    color="default"
    backgroundColor="background"
    width="100%"
    overflow="hidden"
  >
    <Skeleton padding={3} height={[130, 142, 142]} width={["100%", 221, 221]} />
    <View padding={5} flexGrow={1}>
      <Skeleton fontSize={3} maxWidth={450} width="70%" marginBottom={4} />
      <Skeleton
        backgroundColor="faded"
        fontSize={1}
        maxWidth={250}
        width="50%"
        marginBottom={3}
        display={["none", "flex"]}
      />
      <Skeleton
        backgroundColor="faded"
        fontSize={1}
        maxWidth={215}
        width="45%"
      />
    </View>
  </View>
);
