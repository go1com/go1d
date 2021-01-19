import React from "react";
import { storiesOf } from "@storybook/react";
import { Rating } from "../src";
storiesOf("Original Go1d/rating", module)
  .add("Basic Rating", () => <Rating name="rating" />)
  .add("Rating with default value", () => (
    <Rating name="rating" defaultValue={3} />
  ))
  .add("Rating with large count", () => <Rating name="rating" defaultValue={3} count={37} />)
  .add("Rating with controlled value", () => <Rating name="rating" value={3} />);
