import * as React from "react";
import { generateTheme } from "../../foundations";
import { GenerateThemeInput } from "../../foundations/foundation-types";
import Theme from "../Theme";

export interface ProviderProps extends GenerateThemeInput {
  linkComponent?: React.ReactNode;
  children?: React.ReactNode;
  rootComponent?: HTMLElement;
}

export const LinkContext = React.createContext(null);
export const RootContext = React.createContext(null);

const LinkContextWrapper = ({ linkComponent, children }) =>
  linkComponent !== undefined ? (
    <LinkContext.Provider value={linkComponent}>
      {children}
    </LinkContext.Provider>
  ) : (
    children
  );

const RootContextWrapper = ({ rootComponent, children }) =>
  rootComponent !== undefined ? (
    <RootContext.Provider value={rootComponent}>
      {children}
    </RootContext.Provider>
  ) : (
    children
  );

/**
 * The Provider is an extension of the `Theme` component that allows for custom links to be passed in as well as setting the color mode.
 *
 * The `Provider` component lets you specify custom `LinkComponent` attributes and whether the child components are either light or dark mode. It should be used when you do not just want to return an anchor tags when using Link components, such as use with `ReactRouter`.
 */
class Provider extends React.PureComponent<ProviderProps> {
  public render() {
    const {
      linkComponent,
      mode,
      accent,
      theme,
      children,
      logo,
      emotion,
      rootComponent,
    } = this.props;
    return !!emotion ||
      !!mode ||
      !!accent ||
      !!theme ||
      !!linkComponent ||
      !!rootComponent ||
      !!logo ? (
      <Theme.Consumer>
        {({ colors, mode: currentMode, logo: currentLogo }) => (
          <Theme.Provider
            value={generateTheme({
              mode: mode || currentMode,
              accent: accent || colors.accent,
              theme,
              logo: logo || currentLogo,
              emotion,
            })}
          >
            <LinkContextWrapper linkComponent={linkComponent}>
              <RootContextWrapper rootComponent={rootComponent}>
                {children}
              </RootContextWrapper>
            </LinkContextWrapper>
          </Theme.Provider>
        )}
      </Theme.Consumer>
    ) : (
      children
    );
  }
}

export default Provider;

export const withRootContextProvider = WrappedComponent => props => (
  <RootContext.Consumer>
    {value => <WrappedComponent {...props} rootContext={value || undefined} />}
  </RootContext.Consumer>
);
