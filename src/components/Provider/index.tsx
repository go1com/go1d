import * as React from "react";
import { generateTheme } from "../../foundations";
import { GenerateThemeInput } from "../../foundations/foundation-types";
import Theme from "../Theme";

export interface ProviderProps extends GenerateThemeInput {
  linkComponent?: React.ReactNode;
  children?: React.ReactNode;
}

export const LinkContext = React.createContext(null);

class Provider extends React.PureComponent<ProviderProps> {
  public render() {
    const { linkComponent, mode, accent, theme, children, logo } = this.props;
    return !!mode || !!accent || !!theme || !!linkComponent || !!logo ? (
      <Theme.Consumer>
        {({ colors, mode: currentMode, logo: currentLogo }) => (
          <Theme.Provider
            value={generateTheme({
              mode: mode || currentMode,
              accent: accent || colors.accent,
              theme,
              logo: logo || currentLogo,
            })}
          >
            {linkComponent !== undefined ? (
              <LinkContext.Provider value={linkComponent}>
                {children}
              </LinkContext.Provider>
            ) : (
              children
            )}
          </Theme.Provider>
        )}
      </Theme.Consumer>
    ) : (
      children
    );
  }
}

export default Provider;
