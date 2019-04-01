import * as React from "react";
import Notification from "./Notification";

export interface Props {
  notifications: any[];
  removeFromQueue?: (evt: React.SyntheticEvent) => void;
}

class Notifications extends React.Component<Props, any> {
  public static defaultProps = {
    notifications: [],
  };

  public handleRemove = notification => () => {
    const { removeFromQueue } = this.props;
    if (removeFromQueue) {
      removeFromQueue(notification);
    }
  };

  public render() {
    const { notifications } = this.props;
    return (
      <div>
        {notifications.map((notification, i) => {
          const key = notification.id || new Date().getTime();
          const { message, type, lifetime } = notification;
          return (
            <Notification
              key={key}
              id={key}
              message={message}
              type={type}
              onClose={this.handleRemove(notification)}
              onDie={this.handleRemove(notification)}
              lifetime={lifetime}
              isOpen={true}
              offset={i}
            />
          );
        })}
      </div>
    );
  }
}

export default Notifications;
