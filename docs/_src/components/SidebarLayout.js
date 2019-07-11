import React from "react";
import PropTypes from "prop-types";
import { withReducer } from "recompose";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";
import { View, Text, Pill } from "../../../src/";
import Theme from "../../../src/components/Theme";

const unhyphenate = str => str.replace(/(\w)(-)(\w)/g, "$1 $3");
const upperFirst = str => str.charAt(0).toUpperCase() + str.slice(1);
const format = str => upperFirst(unhyphenate(str));
const depthPad = ({ to = "" }) =>
  (1 +
    to
      .split("/")
      .filter(s => s.length)
      .slice(1).length) *
  16;

const Layout = props => (
  <View
    {...props}
    css={{
      "@media (min-width: 760px)": {
        flexDirection: "row",
      },
    }}
  />
);

const Sidebar = props => (
  <Theme.Consumer>
    {({ breakpoints }) => (
      <View
        mode="dark"
        paddingY={4}
        backgroundColor="background"
        color="subtle"
        {...props}
        css={{
          [breakpoints.sm]: {
            width: "100%",
          },
          [breakpoints.md]: {
            minWidth: 280,
            position: "fixed",
            height: "100vh",
            overflow: "auto",
            overflowX: "hidden",
          },
        }}
      />
    )}
  </Theme.Consumer>
);

const Link = ({ children, ...props }) => (
  <Theme.Consumer>
    {({ colors, spacing }) => (
      <View
        {...props}
        element={RouterNavLink}
        flexDirection="row"
        alignItems="center"
        paddingRight={6}
        paddingY={3}
        css={{
          paddingLeft: depthPad(props) + 12,
          borderLeft: "4px solid",
          borderColor: "transparent",
          color: colors.subtle,
          "&::before": {
            content: '""',
            position: "absolute",
            height: spacing[3],
            width: spacing[3],
            borderRadius: spacing[2],
            marginLeft: `-${spacing[4]}`,
            backgroundColor: "transparent",
          },
          "&:hover": {
            backgroundColor: colors.soft,
            "&::before": {
              backgroundColor: colors.muted,
            },
          },
          "&.active, &:focus": {
            color: colors.contrast,
            outline: "none",
            "&::before": {
              backgroundColor: colors.accent,
            },
          },
        }}
      >
        <Text fontSize={3}>{children}</Text>
      </View>
    )}
  </Theme.Consumer>
);

const Nav = ({ routes = [], handleMenuToggle, menuOpen, ...props }) => (
  <View element="ul" {...props}>
    {routes
      .filter(
        route =>
          route.dirname !== "/components" ||
          (route.dirname === "/components" && route.props.status === "ready")
      )
      .map(route => (
        <View element="li" key={route.key}>
          {/^https?:\/\//.test(route.path) ? (
            <RouterNavLink pl={3} href={route.path}>
              {route.name}
            </RouterNavLink>
          ) : (
            <Link to={route.path} exact>
              {format(route.name)}
            </Link>
          )}
        </View>
      ))}
  </View>
);

const Main = props => (
  <Theme.Consumer>
    {({ breakpoints }) => (
      <View
        {...props}
        paddingLeft={280}
        width="100%"
        css={{
          [breakpoints.sm]: {
            paddingLeft: 0,
          },
        }}
      />
    )}
  </Theme.Consumer>
);

export const statuses = {
  "in-progress": {
    title: "In progress",
    color: "note",
  },
  "not-ready": {
    title: "Not ready",
    color: "danger",
  },
};

const Hero = ({ title = "", lead = "", status = "not-ready", ...props }) => (
  <View backgroundColor="soft">
    <View
      paddingTop={9}
      paddingBottom={8}
      paddingX={5}
      marginX="auto"
      width="100%"
      alignItems="flex-start"
      css={{
        maxWidth: 900,
      }}
    >
      <View marginBottom={4}>
        <Text
          element="h1"
          fontSize={7}
          fontWeight="semibold"
          color="default"
          lineHeight="ui"
        >
          {title}
        </Text>
      </View>
      {status !== "ready" && (
        <Pill marginBottom={4} color={statuses[status].color}>
          {statuses[status].title}
        </Pill>
      )}
      <Text element="p" fontSize={4} color="subtle" lineHeight="paragraph">
        {lead}
      </Text>
    </View>
  </View>
);

const MaxWidth = props => (
  <View
    {...props}
    element={RouterLink}
    to="/"
    width="100%"
    marginX="auto"
    paddingX={5}
    paddingBottom={6}
    css={{
      maxWidth: 900,
    }}
  />
);

const SidebarTitles = props => (
  <View
    {...props}
    element={RouterLink}
    to="/"
    paddingX={6}
    paddingTop={4}
    paddingBottom={6}
  />
);

const SidebarTitle = props => (
  <View marginBottom={3}>
    <Text
      element="h2"
      fontSize={5}
      fontWeight="semibold"
      color="contrast"
      lineHeight="ui"
    >
      GO1D
    </Text>
  </View>
);

const Content = props => (
  <Theme.Consumer>
    {({ colors, type }) => (
      <View
        paddingY={7}
        css={{
          color: colors.default,
          fontSize: type.scale[3],
        }}
        {...props}
      />
    )}
  </Theme.Consumer>
);

const PrevNextLink = ({ title, path, name = "" }) => (
  <View element={RouterLink} to={path}>
    <Text color="subtle" fontSize={2}>
      {title}
    </Text>
    <View marginTop={3}>
      <Text fontSize={3} fontWeight="semibold">
        {format(name)}
      </Text>
    </View>
  </View>
);

const Pagination = ({ previous, next }) => (
  <View flexDirection="row" justifyContent="space-between">
    {previous && (
      <PrevNextLink
        title="Previous"
        path={previous.path}
        name={previous.name}
      />
    )}
    {next && <PrevNextLink title="Next" path={next.path} name={next.name} />}
  </View>
);

const SidebarLayout = ({
  routes = [],
  children,
  route,
  title = "GO1D",
  logo,
  menuOpen = false,
  handleMenuToggle,
  location = {},
}) => {
  const opts = route ? route.props : {};
  if (opts.layout === false) return children;
  const Wrapper = opts.fullWidth ? React.Fragment : MaxWidth;
  const index = routes.findIndex(r => r.path === route.path);
  const pagination = {
    previous: routes[index - 1],
    next: routes[index + 1],
  };
  const navRoutes = routes.filter(r => r.exact || r.dirname === route.dirname);

  return (
    <Layout>
      <Sidebar open={menuOpen} onClick={handleMenuToggle}>
        <SidebarTitles>
          <SidebarTitle>GO1D</SidebarTitle>
          <Text element="p" fontSize={2} color="subtle">
            Guidelines to create a<br />
            great customer experience
          </Text>
        </SidebarTitles>
        <Nav
          title={title}
          logo={logo}
          routes={navRoutes}
          handleMenuToggle={handleMenuToggle}
          menuOpen={menuOpen}
        />
      </Sidebar>
      <Main tabIndex={menuOpen ? -1 : undefined}>
        <Hero {...opts} />
        <Wrapper>
          <Content>{children}</Content>
          {!opts.hidePagination && <Pagination {...pagination} />}
        </Wrapper>
      </Main>
    </Layout>
  );
};

SidebarLayout.propTypes = {
  routes: PropTypes.array.isRequired,
};

export default withReducer(
  "menuOpen",
  "handleMenuToggle",
  menuOpen => !menuOpen,
  false
)(SidebarLayout);
