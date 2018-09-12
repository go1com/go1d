import * as React from "react";
import foundations, { generateTheme } from "../../foundations";

const Theme = React.createContext(foundations);

const DarkMode = props => (
  <Theme.Provider value={generateTheme({ darkMode: true })} {...props} />
);

export { DarkMode };

export default Theme;