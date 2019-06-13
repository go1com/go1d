import * as React from "react";

import Container from "../Container";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface ErrorStateProps extends ViewProps {
  title?: string;
  description?: string;
}

const ErrorState: React.SFC<ErrorStateProps> = ({
  title,
  description,
  children,
  ...props
}: ErrorStateProps) => (
  <Container contain="full">
    <View
      backgroundColor="background"
      justifyContent="center"
      alignItems="center"
      padding={7}
      {...props}
    >
      <Text element="h1" fontSize={6} fontWeight="semibold">
        {title}
      </Text>

      {(children || description) && (
        <Text color="subtle" fontSize={3} lineHeight="paragraph">
          {children || description}
        </Text>
      )}
    </View>
  </Container>
);

ErrorState.displayName = "ErrorState";

export default ErrorState;
