import * as React from "react";

import ButtonFilled from "../ButtonFilled";
import Container from "../Container";
import Text from "../Text";
import View, { ViewProps } from "../View";

export interface EmptyStateProps extends ViewProps {
  title?: string;
  description?: string;
  actionText?: string;
  action?: (evt: React.SyntheticEvent) => void;
}

const EmptyState: React.SFC<EmptyStateProps> = ({
  title,
  description,
  actionText,
  action,
  children,
  ...props
}: EmptyStateProps) => (
  <Container>
    <View
      backgroundColor="background"
      alignItems="center"
      padding={7}
      borderRadius={2}
      {...props}
    >
      <Text element="h1" fontSize={4} fontWeight="semibold">
        {title}
      </Text>
      <View textAlign="center" marginY={6}>
        <Text color="subtle">{children || description}</Text>
      </View>
      {actionText &&
        action && (
          <ButtonFilled
            maxWidth={380}
            width="100%"
            justifyContent="center"
            onClick={action}
            size="lg"
            color="accent"
          >
            {actionText}
          </ButtonFilled>
        )}
    </View>
  </Container>
);

EmptyState.displayName = "Empty State";

export default EmptyState;
