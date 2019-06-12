import * as React from "react";
import { Icon, IconProps, Text, View, ViewProps } from "../..";

export type CollapseProps = {
  isOpen: boolean;
  reverseCollapse?: boolean;
  headerProps?: ViewProps;
  iconProps?: IconProps;
  header?: () => React.ReactNode | string;
  onCollapse?: () => void;
} & ViewProps;

export interface CollapseState {
  heightContent: number | "auto";
  heightHeader: number | "auto";
}

export class Collapse extends React.Component<CollapseProps, CollapseState> {
  public static defaultProps: CollapseProps = {
    isOpen: false,
    reverseCollapse: false,
  };
  public refContent: any;
  public refHeader: any;

  constructor(props: CollapseProps) {
    super(props);
    this.state = {
      heightContent: -1,
      heightHeader: -1,
    };
  }

  public componentDidMount() {
    if (this.refContent) {
      this.setState({
        heightContent: this.refContent.clientHeight,
      });
    } else {
      this.setState({
        heightContent: "auto",
      });
    }
    if (this.refHeader) {
      this.setState({
        heightHeader: this.refHeader.clientHeight,
      });
    } else {
      this.setState({
        heightHeader: "auto",
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
      ...containerProps
    } = this.props;
    const { heightContent, heightHeader } = this.state;
    const height = isOpen ? this.getHeight(heightContent) : `0px`;
    const overflow = isOpen ? "visible" : "hidden";
    const iconClose = reverseCollapse ? "ChevronUp" : "ChevronDown";
    const icon = iconClose;
    const cssRotate = isOpen
      ? {
          transform: "rotate(180deg)",
        }
      : {};
    const stylesContainer = reverseCollapse
      ? {
          justifyContent: "flex-end",
          height: this.getHeight(heightHeader),
        }
      : {};
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
              {typeof header !== "string" && header()}
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
        <View height={height} overflow={overflow} transition="subtle">
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

  private getHeight(heightContent: number | string) {
    if (heightContent === "auto") {
      return heightContent;
    }
    if (heightContent === -1) {
      return "auto";
    }
    return `${heightContent}px`;
  }
}
