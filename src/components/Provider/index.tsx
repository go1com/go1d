import * as React from "react";
import { generateTheme } from "../../foundations";
import Theme from "../Theme";

interface Props {
  LinkComponent?: React.ReactNode;
  children?: React.ReactNode;
}

const Provider = ({ LinkComponent, children, ...props }: Props) => (
  <Theme.Provider value={{ ...generateTheme(props), LinkComponent }}>
    {children}
  </Theme.Provider>
);
export default Provider;
