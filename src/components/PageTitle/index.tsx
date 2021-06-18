import * as React from "react";

import Text from "../Text";
import View, { ViewProps } from "../View";

export interface PageTitleProps extends ViewProps {
  title: string;
}

/**
 * A page title for use in standard content.
 */
const PageTitle: React.SFC<PageTitleProps> = ({
  title,
  children,
  ...props
}: PageTitleProps) => (
  <View
    display="flex"
    flexDirection="row"
    alignItems="center"
    marginBottom={4}
    {...props}
  >
    <Text
      element="h1"
      fontWeight="semibold"
      fontSize={5}
      display="block"
      marginRight={4}
    >
      {title}
    </Text>
    {children}
  </View>
);

export default PageTitle;
