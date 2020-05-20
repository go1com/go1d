import * as React from "react";
import { render } from "react-testing-library";
import MenuItem from "./index";

import IconHome from "../Icons/Home";

it("renders without crashing without any optional props", () => {
  render(
    <MenuItem icon={IconHome} href="test">
      here
    </MenuItem>
  );
});

it("renders without crashing with all props", () => {
  render(
    <MenuItem icon={IconHome} href="test" collapsed={false}>
      Button text
    </MenuItem>
  );
});
