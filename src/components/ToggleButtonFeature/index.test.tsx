import { css } from "emotion";
import * as React from "react";
import { render } from "react-testing-library";
import ToggleButtonFeature from "./index";

const mock = jest.fn();

it("renders without crashing without any optional props", () => {
  render(<ToggleButtonFeature onClick={mock}>Button text</ToggleButtonFeature>);
});

it("renders without crashing with all props", () => {
  const styles = css`
    border-radius: 10px;
  `;

  render(
    <ToggleButtonFeature
      backgroundColor="lightest"
      color="subtle"
      css={styles}
      padding={3}
      onClick={mock}
    >
      Button text
    </ToggleButtonFeature>
  );
});
