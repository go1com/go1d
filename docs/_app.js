// _app.js
import React from "react";
import {
  // SidebarLayout,
  ScopeProvider,
} from "@compositor/x0/components";
import { Flipflop } from "libreact/lib/Flipflop";
import { Provider as RebassProvider } from "rebass";
import { Link } from "react-router-dom";
import groupBy from "lodash/groupBy";
import * as systemScope from "../src";
import * as docsScope from "./_src/components";
import * as docsVariables from './_src'
import foundations from "../src/foundations";
import globalCSS from "../src/foundations/globalCSS";
import SidebarLayout from "./_src/components/SidebarLayout";
import RoutesContext from "./_src/components/RoutesProvider";
import Provider from "../src/components/Provider";
import Theme from "../src/components/Theme";

globalCSS();

const navOrder = ["/brand", "/design", "/writing", "/components"];

const scope = {
  Flipflop,
  ...systemScope,
  ...docsScope,
  ...docsVariables,
};

const createNav = routes => {
  const navGrouped = groupBy(routes, r => r.dirname);
  const nav = navOrder.reduce(
    (navItems, item) => [...navItems, ...navGrouped[item]],
    []
  );

  return nav.map(
    item =>
      !item.props.menuTitle && !item.props.title
        ? item
        : { ...item, name: item.props.menuTitle || item.props.title }
  );
};

const LinkComponent = ({ href, children, ...props }) => (
  <Theme.Consumer>
    {({ colors }) => (
      <Link to={href} {...props}>
        {children}
      </Link>
    )}
  </Theme.Consumer>
);

const App = ({ routes, ...props }) => (
  <Provider linkComponent={LinkComponent}>
    <RoutesContext.Provider value={routes}>
      <ScopeProvider scope={scope}>
        <RebassProvider
          theme={{
            fonts: {
              sans: foundations.type.family.sansSerif,
              mono: foundations.type.family.mono,
            },
            fontSizes: foundations.type.scale.lg,
            fontWeights: foundations.type.weight,
            space: foundations.spacing.map(s => s + "px"),
            colors: {
              black: foundations.colors.default,
              blue: foundations.colors.accent,
              gray: foundations.colors.soft,
            },
          }}
        >
          <SidebarLayout routes={createNav(routes)} {...props} title="GO1D" />
        </RebassProvider>
      </ScopeProvider>
    </RoutesContext.Provider>
  </Provider>
);

export default App;
