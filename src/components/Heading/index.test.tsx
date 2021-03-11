import { css } from "emotion";
import * as React from "react";
import { cleanup, render } from "react-testing-library";
import Heading from "./index";

afterEach(cleanup);

it("renders without crashing with all props", () => {
  const styles = css`
    color: "#ff1493";
  `;

  render(
    <Heading visualHeadingLevel="Heading 1" semanticElement="h1" css={styles}>
      Heading text
    </Heading>
  );
});
