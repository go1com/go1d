import * as React from "react";
import { createPortal } from "react-dom";

export interface Props {
  children?: React.ReactNode;
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

    this.portalNode = document.createElement("div");
    this.portalNode.setAttribute("data-portal-id", Unique());
    document.body.appendChild(this.portalNode);
  }

  public componentWillUnmount() {
    if (this.portalNode) {
      document.body.removeChild(this.portalNode);
    }
  }

  public render() {
    if (isServer) {
      return <React.Fragment />;
    }

    return createPortal(this.props.children, this.portalNode);
  }
}

export default Portal;
