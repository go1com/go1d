import * as React from "react";
import { createPortal } from "react-dom";
import { withRootContextProvider } from "../Provider";

export interface Props {
  children?: React.ReactNode;
  rootContext?: HTMLElement;
}

export const isServer =
  typeof window === "undefined" || typeof document === "undefined";

const Unique = () =>
  Math.random()
    .toString(36)
    .substring(2) + new Date().getTime().toString(36);

class Portal extends React.PureComponent<Props, never> {
  private portalNode: HTMLElement;

  constructor(props) {
    super(props);

    if (isServer) {
      return;
    }

    const { rootContext = document.body } = props;
    this.portalNode = document.createElement("div");
    this.portalNode.setAttribute("data-portal-id", Unique());
    rootContext.appendChild(this.portalNode);
  }

  public componentWillUnmount() {
    const { rootContext = document.body } = this.props;
    if (this.portalNode) {
      rootContext.removeChild(this.portalNode);
    }
  }

  public render() {
    if (isServer) {
      return <React.Fragment />;
    }

    return createPortal(this.props.children, this.portalNode);
  }
}

export default withRootContextProvider(Portal);
