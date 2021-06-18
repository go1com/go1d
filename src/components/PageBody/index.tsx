import * as React from "react";

import Container from "../Container";
import { ViewProps } from "../View";

export interface PageBodyProps extends ViewProps {
  backgroundColor?: string;
}

/**
 * A container for the main content of a page with a background pulled in either via specifying the background color or defaulting to the colors.background value
 */
const PageBody: React.SFC<PageBodyProps> = ({
  children,
  backgroundColor = "faint",
  ...props
}: PageBodyProps) => (
  <Container
    contain="full"
    backgroundColor={backgroundColor}
    paddingX={8}
    paddingY={6}
    flexGrow={1}
    {...props}
  >
    {children}
  </Container>
);

export default PageBody;
