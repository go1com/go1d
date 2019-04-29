import * as elementResizeDetectorMaker from "element-resize-detector";
import * as invariant from "invariant";
import * as React from "react";
import * as ReactDOM from "react-dom";
import Base from "../../Base";

// Fork of https://github.com/okonet/react-container-dimensions with modifications for server side rendering

interface PassedParams {
  initiated: boolean;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  width?: number;
  height?: number;
}

interface DimensionContainerProps {
  children: (Params: PassedParams) => React.ReactNode | React.ReactNode;
}

export default class ContainerDimensions extends React.Component<
  DimensionContainerProps,
  any
> {
  public static getDomNodeDimensions(node) {
    const { width } = node.getBoundingClientRect();
    return { width };
  }

  public state = {
    width: 0,
    initiated: false,
  };

  protected parentNode;
  protected elementResizeDetector;
  protected componentIsMounted;

  public componentDidMount() {
    this.parentNode = (ReactDOM.findDOMNode(this) as any).parentNode;
    this.elementResizeDetector = elementResizeDetectorMaker({
      strategy: "scroll",
      callOnAdd: false,
    });
    this.elementResizeDetector.listenTo(this.parentNode, this.onResize);
    this.componentIsMounted = true;
    this.onResize();
  }

  public componentWillUnmount() {
    this.componentIsMounted = false;
    this.elementResizeDetector.uninstall(this.parentNode);
  }

  public onResize = () => {
    const { width } = this.state;
    const clientRect = ContainerDimensions.getDomNodeDimensions(
      this.parentNode
    );
    // only trigger rerender if width changed
    if (this.componentIsMounted && width !== clientRect.width) {
      this.setState({
        initiated: true,
        width: clientRect.width,
      });
    }
  };

  public render() {
    const { initiated } = this.state;
    // do not perform this optimization on server side or during testing
    if (
      !initiated &&
      typeof window !== "undefined" &&
      process.env.NODE_ENV !== "test"
    ) {
      return <Base />;
    }
    invariant(
      this.props.children,
      "Expected children to be one of function or React.Element"
    );
    const { children } = this.props;

    if (typeof this.props.children === "function") {
      const renderedChildren = this.props.children(this.state);
      return renderedChildren && React.Children.only(renderedChildren);
    }

    return React.Children.only(React.cloneElement(children as any, this.state));
  }
}
