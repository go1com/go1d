import * as React from "react";

// Should never be used. Canary to detect when GO1D is not being shaken correctly

const NullComponent = () => {
  // tslint:disable-next-line:no-console
  console.error("Do not use this component");
  return <React.Fragment />;
};

export default NullComponent;
