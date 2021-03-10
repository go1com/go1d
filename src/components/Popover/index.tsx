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

const Popover: React.FC<Props> = ({
  triggerEvent = "onMouseOver",
  placement = "auto",
  offset,
  handleRenderer,
  contentRenderer,
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const openPopover = () => {
    setIsOpen(true);
  };
  const closePopover = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setIsOpen(false);
  };
  const buildEventHandlers = () => {
    return {
      [triggerEvent]: openPopover,
      onFocus: openPopover,
    };
  };
  return (
    <Manager>
      <Reference>
        {({ ref }) => handleRenderer(ref, { ...buildEventHandlers() })}
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
                onClick={closePopover}
              >
                {contentRenderer(ref, { style }, closePopover)}
              </View>
            </Portal>
          )}
        </Popper>
      )}
    </Manager>
  );
};

export default Popover;
