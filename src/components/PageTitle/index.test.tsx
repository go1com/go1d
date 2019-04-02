import { css } from "emotion";
import * as React from "react";
import { render } from "react-testing-library";
import PageTitle from "./index";

it("renders without crashing without any optional props", () => {
  render(<PageTitle title="Test" />);
});

it("renders without crashing with all props", () => {
  const styles = css`
    border-radius: 10px;
  `;

  render(
    <PageTitle
      element="h2"
      fontWeight="bold"
      fontFamily="Georgia, serif"
      fontStyle="italic"
      fontSize={3}
      color="subtle"
      css={styles}
      title="Test"
    />
  );
});
