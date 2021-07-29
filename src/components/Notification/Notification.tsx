import * as React from "react";

import Banner from "../Banner";
import View, { ViewProps } from "../View";

export interface NotificationProps extends ViewProps {
  id: string;
  type: "success" | "warning" | "danger";
  message?: React.ReactChild;
  lifetime: number;
  isOpen: boolean;
  onClose?: (evt: React.SyntheticEvent) => void;
  onDie?: () => void;
  offset: number;
}

class Notification extends React.Component<NotificationProps, any> {
  public static defaultProps = {
    lifetime: 3000,
    offset: 0,
  };

  private closeTimer = null;
  private openTimer = null;

  constructor(props) {
    super(props);

    this.state = {
      alive: false,
      timerId: null,
    };

    this.close = this.close.bind(this);
  }

  public componentDidMount = () => {
    // wait before opening it, otherwise css transition won't work
    this.openTimer = setTimeout(() => {
      this.setState({ alive: true }, () => {
        this.closeTimer = setTimeout(() => {
          this.setState({ alive: false }, () => {
            if (this.props.onDie) {
              setTimeout(() => {
                this.props.onDie();
              }, 300);
            }
          });
        }, this.props.lifetime);
      });
    }, 50);
  };

  public componentWillUnmount() {
    clearTimeout(this.closeTimer);
    clearTimeout(this.openTimer);
  }

  public close = e => {
    this.setState({ alive: false }, () => {
      clearTimeout(this.state.timerId);
      if (this.props.onClose) {
        this.props.onClose(e);
      }
    });
  };

  public render() {
    const { message, type, offset } = this.props;
    return (
      <View
        css={{
          marginTop: this.state.alive
            ? `${10 + parseInt(offset as any, 10)}px`
            : "-58px",
          opacity: this.state.alive ? 1 : 0,
          transition: "all 300ms",
        }}
        justifyContent="center"
        flexDirection="row"
      >
        <Banner status={type} close={this.close} floating={true}>
          {message}
        </Banner>
      </View>
    );
  }
}

export default Notification;
