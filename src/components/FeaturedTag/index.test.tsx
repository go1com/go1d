import * as React from "react";
import { cleanup, render } from "react-testing-library";
import IconCheck from "../Icons/Check";
import FeaturedTag from "./index";

afterEach(cleanup);

it("renders without crashing without any props", () => {
  render(<FeaturedTag>Hello World!</FeaturedTag>);
});

it("renders without crashing with all props passed to it", () => {
  const ActionMock = () => null;
  render(
    <FeaturedTag
      size="md"
      color="danger"
      iconColor="default"
      backgroundColor="accent"
      icon={IconCheck}
      onClick={ActionMock}
      passive={false}
    >
      Hello World!
    </FeaturedTag>
  );
});
