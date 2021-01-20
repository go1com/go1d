import React from "react";
import { ErrorState } from "../src";

export default {
  title: "Original Go1d/ErrorState",
  component: ErrorState,
};

export const Base = () => (
  <ErrorState title="No Content">
    This is a description for No Content
  </ErrorState>
);
