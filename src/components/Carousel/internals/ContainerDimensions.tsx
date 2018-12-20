import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as elementResizeDetectorMaker from 'element-resize-detector'
import * as invariant from 'invariant'

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

export default class ContainerDimensions extends React.Component<DimensionContainerProps, any> {
  static getDomNodeDimensions(node) {
    const { top, right, bottom, left, width, height } = node.getBoundingClientRect()
    return { top, right, bottom, left, width, height }
  }

  protected parentNode;
  protected elementResizeDetector;
  protected componentIsMounted;

  state = {
    initiated: false
  }

  componentDidMount() {
    this.parentNode = ReactDOM.findDOMNode(this).parentNode
    this.elementResizeDetector = elementResizeDetectorMaker({
      strategy: 'scroll',
      callOnAdd: false
    })
    this.elementResizeDetector.listenTo(this.parentNode, this.onResize)
    this.componentIsMounted = true
    this.onResize()
  }

  componentWillUnmount() {
    this.componentIsMounted = false
    this.elementResizeDetector.uninstall(this.parentNode)
  }

  onResize = () => {
    const clientRect = ContainerDimensions.getDomNodeDimensions(this.parentNode)
    if (this.componentIsMounted) {
      this.setState({
        initiated: true,
        ...clientRect
      })
    }
  }

  render() {
    invariant(this.props.children, 'Expected children to be one of function or React.Element')
    const { children } = this.props;
    
    if (typeof this.props.children === 'function') {
      const renderedChildren = this.props.children(this.state)
      return renderedChildren && React.Children.only(renderedChildren)
    }

    return React.Children.only(React.cloneElement((children as any), this.state))
  }
}