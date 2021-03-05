import * as React from "react";
import { cleanup, render } from "react-testing-library";
import ButtonFilled from "../ButtonFilled";
import View from "../View";
import Popover from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  const handleRenderer = (ref, handleProps) => (
    <ButtonFilled innerRef={ref} color="accent" {...handleProps}>
      Hover me
    </ButtonFilled>
  );
  const contentRenderer = (ref, contentProps) => (
    <View
      innerRef={ref}
      {...contentProps}
      border={1}
      borderColor="subtle"
      borderRadius={3}
      padding={5}
    >
      Popover content
    </View>
  );
  render(
    <Popover
      handleRenderer={handleRenderer}
      contentRenderer={contentRenderer}
    />
  );
});
