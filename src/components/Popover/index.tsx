import { Placement } from "popper.js";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import Portal from "../Portal";
import View from "../View";

export interface Props {
  triggerEvent?: "onMouseOver" | "onClick";
  placement?: Placement;
  offset?: number | string;
  handleRenderer: (ref, handleProps) => React.ReactNode;
  contentRenderer: (ref, contentProps, closePopover) => React.ReactNode;
  disabled?: boolean;
}

class Popover extends React.Component<Props, { isOpen: boolean }> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  public openPopover = () => {
    this.setState({ isOpen: true });
  };

  public closePopover = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    this.setState({ isOpen: false });
  };

  public buildEventHandlers = event => {
    return {
      [event]: this.openPopover,
      onFocus: this.openPopover,
    };
  };

  public render() {
    const { isOpen } = this.state;
    const {
      triggerEvent = "onMouseOver",
      placement = "auto",
      offset,
      handleRenderer,
      contentRenderer,
      disabled,
    } = this.props;

    return (
      <Manager>
        <Reference>
          {({ ref }) =>
            handleRenderer(ref, this.buildEventHandlers(triggerEvent))
          }
        </Reference>
        {!disabled && isOpen && (
          <Popper
            placement={placement}
            modifiers={{ offset: { enabled: !!offset, offset } }}
          >
            {({ ref, style }) => (
              <Portal>
                <View
                  position="fixed"
                  css={{ top: 0, left: 0, bottom: 0, right: 0 }}
                  zIndex="modalBackdrop"
                  onClick={this.closePopover}
                >
                  {contentRenderer(ref, { style }, this.closePopover)}
                </View>
              </Portal>
            )}
          </Popper>
        )}
      </Manager>
    );
  }
}

export default Popover;
