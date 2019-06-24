import * as React from "react";
import { Icon, IconProps, Text, View, ViewProps } from "../..";

export type CollapseProps = {
  isOpen: boolean;
  reverseCollapse?: boolean;
  headerProps?: ViewProps;
  iconProps?: IconProps;
  contentProps?: ViewProps;
  header?: () => React.ReactNode | string;
  onCollapse?: () => void;
} & ViewProps;

enum Status {
  IDLING = "IDLING",
  RESIZING = "RESIZING",
}

interface CollapseState {
  heightWrapper: number;
  currentState: Status;
}

export class Collapse extends React.Component<CollapseProps, CollapseState> {
  public static defaultProps: CollapseProps = {
    isOpen: false,
    reverseCollapse: false,
  };

  public refHeader: HTMLElement;
  public refContent: HTMLElement;

  constructor(props: CollapseProps) {
    super(props);
    this.state = {
      heightWrapper: 0,
      currentState: Status.IDLING,
    };
  }

  public componentDidMount() {
    const { isOpen } = this.props;

    this.setState({
      heightWrapper: isOpen ? this.getHeightContent() : 0,
    });
  }

  public componentDidUpdate(_, prevState) {
    const { isOpen } = this.props;

    const heightWrapper = isOpen ? this.getHeightContent() : 0;

    if (prevState.heightWrapper !== heightWrapper) {
      this.setState({
        currentState: Status.RESIZING,
        heightWrapper,
      });

      return;
    }

    if (prevState.currentState === Status.RESIZING) {
      this.setState({
        currentState: Status.IDLING,
      });
    }
  }

  public render() {
    const {
      children,
      header,
      isOpen,
      onCollapse,
      reverseCollapse,
      headerProps,
      iconProps,
      contentProps,
      ...containerProps
    } = this.props;
    const { heightWrapper } = this.state;
    const overflow = isOpen ? "auto" : "hidden";
    const iconClose = reverseCollapse ? "ChevronUp" : "ChevronDown";
    const icon = iconClose;
    const cssRotate = isOpen
      ? {
          transform: "rotate(180deg)",
        }
      : {};
    const stylesContainer = {};
    return (
      <View {...stylesContainer} {...containerProps}>
        {header && (
          <View
            onClick={onCollapse}
            css={{
              cursor: "pointer",
            }}
          >
            <View
              // tslint:disable-next-line:jsx-no-lambda
              innerRef={e => (this.refHeader = e)}
              width="100%"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              {...headerProps}
            >
              {typeof header === "string" && (
                <Text
                  fontWeight="semibold"
                  fontSize={3}
                  color="default"
                  ellipsis={true}
                  paddingRight={1}
                >
                  {header}
                </Text>
              )}
              {typeof header !== "string" && (
                <View flexShrink={1} flexGrow={1} paddingRight={1}>
                  {header()}
                </View>
              )}
              <Icon
                name={icon}
                color="subtle"
                marginLeft={4}
                transition="subtle"
                css={{
                  ...cssRotate,
                }}
                {...iconProps}
              />
            </View>
          </View>
        )}
        <View
          height={heightWrapper}
          overflow={overflow}
          transition="subtle"
          {...contentProps}
        >
          <View
            // tslint:disable-next-line:jsx-no-lambda
            innerRef={e => (this.refContent = e)}
          >
            {children}
          </View>
        </View>
      </View>
    );
  }

  private getHeightContent = () => {
    return this.refContent.clientHeight;
  };
}
