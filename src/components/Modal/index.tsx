import * as React from "react";

import { css } from "emotion";
import foundations from "../../foundations";
import { autobind } from "../../utils/decorators";
import ButtonFilled from "../ButtonFilled";
import ButtonMinimal from "../ButtonMinimal";
import MoreMenu from "../MoreMenu";
import Portal from "../Portal";
import Text from "../Text";
import View, { ViewProps } from "../View";

import { IconProps } from "../IconBase";
import IconCross from "../Icons/Cross";

export interface ModalProps extends ViewProps {
  title?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onRequestClose?: () => void;
  disableKeyBindings?: boolean;
  disableBackgroundClose?: boolean;
  headerIcon?: React.ComponentType<IconProps>;
  headerAction?: () => void;
  moreMenu?: MoreMenu;
  contentPadding?: number | number[];
}

const modalOpenClassName = css`
  overflow: hidden;
`;

class Modal extends React.Component<ModalProps, any> {
  private dialog: HTMLElement;
  private mouseDownElement: EventTarget;

  constructor(props: ModalProps) {
    super(props);

    if (props.isOpen) {
      this.init();
    }
  }

  public componentDidMount() {
    if (this.props.onRequestClose && this.props.disableKeyBindings !== true) {
      document.addEventListener("keydown", this.detectEscape);
    }
  }

  public componentWillUnmount() {
    document.removeEventListener("keydown", this.detectEscape);
    this.destroy();
  }

  public detectEscape = event => {
    if (this.props.isOpen) {
      if (event.keyCode === 27) {
        this.props.onRequestClose();
      }
    }
  };

  public handleBackgroundClick = () => {
    if (
      this.props.onRequestClose &&
      this.props.disableBackgroundClose !== true
    ) {
      this.props.onRequestClose();
      this.destroy();
    }
  };

  public init() {
    document.body.classList.add(modalOpenClassName);
  }

  public componentWillUpdate(nextProps: ModalProps) {
    if (nextProps.isOpen) {
      this.init();
    } else {
      this.destroy();
    }
  }

  public destroy() {
    document.body.classList.remove(modalOpenClassName);
  }

  @autobind
  public handleBackdropMouseDown(e: React.SyntheticEvent) {
    this.mouseDownElement = e.target;
  }

  @autobind
  public handleBackdropClick(e: React.SyntheticEvent<HTMLElement>) {
    if (e.target === this.mouseDownElement) {
      e.stopPropagation();

      const container = this.dialog;

      if (
        e.target &&
        container &&
        container.contains &&
        !container.contains(e.target as any)
      ) {
        this.handleBackgroundClick();
      }
    }
  }

  @autobind
  public onClose() {
    this.destroy();
    this.props.onRequestClose();
  }

  public render() {
    if (!this.props.isOpen) {
      return null;
    }

    const {
      title,
      isOpen,
      onRequestClose,
      disableBackgroundClose,
      disableKeyBindings,
      children,
      headerIcon,
      headerAction,
      moreMenu,
      contentPadding = 5,
      ...viewProps
    } = this.props;

    const modalAttributes = {
      onClick: this.handleBackdropClick,
      onMouseDown: this.handleBackdropMouseDown,
      role: "dialog",
      tabIndex: "-1",
    };

    const innerRef = c => {
      this.dialog = c;
    };

    const HeaderIconElement = headerIcon || IconCross;

    return (
      <Portal>
        <View
          position="fixed"
          backgroundColor="default"
          backgroundOpacity="modal"
          css={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          data-testid="backgroundOverlay"
          zIndex="modalBackdrop"
          onClick={this.handleBackgroundClick}
        />
        <View
          {...modalAttributes}
          data-testid="modal"
          position="fixed"
          zIndex="modal"
          css={{
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            "overflow-y": "scroll",
            "overflow-x": "hidden",
          }}
        >
          <View
            position="relative"
            maxWidth={600}
            width="100%"
            minHeight={300}
            borderRadius={4}
            backgroundColor="background"
            boxShadow="distant"
            marginX="auto"
            css={{
              "margin-top": "5rem",
              "margin-bottom": "5rem",
            }}
            innerRef={innerRef}
            {...viewProps}
          >
            {title && (
              <View
                paddingY={4}
                flexDirection="row"
                alignItems="center"
                borderColor="divide"
                borderBottom={1}
              >
                {(headerAction || onRequestClose) && (
                  <ButtonMinimal
                    onClick={headerAction || this.onClose}
                    icon={HeaderIconElement}
                    marginLeft={4}
                    data-testid="button-close"
                  />
                )}
                <View css={{ flex: 1 }}>
                  <Text
                    element="h1"
                    textAlign="center"
                    fontSize={3}
                    paddingX={5}
                    ellipsis={true}
                    css={{
                      wordWrap: "break-word",
                      maxWidth: onRequestClose
                        ? `calc(100% - ${foundations.spacing[5] * 2 + 18}px)`
                        : "100%",
                    }}
                  >
                    {title}
                  </Text>
                </View>
                <View marginRight={4}>{moreMenu}</View>
              </View>
            )}
            {!title && (
              <View
                mode="dark"
                position="absolute"
                css={{ top: 0, left: 0 }}
                padding={4}
                backgroundColor="transparent"
              >
                <ButtonFilled
                  icon={HeaderIconElement}
                  color="soft"
                  opacity="modal"
                  round={true}
                  onClick={headerAction || this.onClose}
                  data-testid="button-close"
                />
              </View>
            )}
            <View padding={contentPadding} flexGrow={1}>
              {children}
            </View>
          </View>
        </View>
      </Portal>
    );
  }
}

export default Modal;
