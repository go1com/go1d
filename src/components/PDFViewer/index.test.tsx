import * as React from "react";
import { cleanup, render } from "react-testing-library";
import { PDFViewer } from "./index";

afterEach(cleanup);

it("renders without crashing without any optional props", () => {
  render(
    <PDFViewer url="https://res.cloudinary.com/go1vn/raw/upload/v1562213629/p8awhdl5btkrayrwt23u.pdf" />
  );
});
