import * as React from "react";

import formatDuration from "../../utils/durationFormatter";
import Text from "../Text";
import View, { ViewProps } from "../View";

import IconChevronDown from "../Icons/ChevronDown";
import IconChevronUp from "../Icons/ChevronUp";
import IconClock from "../Icons/Clock";

export interface CourseModuleProps extends ViewProps {
  title: string;
  duration?: number;
  collapsible?: boolean;
  defaultOpen?: boolean;
}

/**
 * A component that wraps lessons.
 */
class CourseModule extends React.Component<CourseModuleProps, any> {
  public static defaultProps = {
    defaultOpen: true,
    collapsible: true,
  };
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.defaultOpen,
    };
  }

  public toggleHidden = () =>
    this.setState(OldState => ({
      isOpen: !OldState.isOpen,
    }));

  public render() {
    const {
      title,
      children,
      duration,
      collapsible,
      defaultOpen,
      ...props
    } = this.props;

    const { isOpen } = this.state;
    const ChevronIcon = isOpen ? IconChevronUp : IconChevronDown;

    return (
      <View paddingX={4} {...props}>
        <View flexDirection="row" justifyContent="space-between">
          <Text fontSize={3} fontWeight="semibold">
            {title}
          </Text>
          <View flexDirection="row" alignItems="center">
            {duration && (
              <View flexDirection="row" alignItems="center">
                <View paddingRight={2}>
                  <IconClock size={1} color="muted" />
                </View>
                <Text fontSize={2}>{formatDuration(duration)}</Text>
              </View>
            )}
            {collapsible && (
              <View
                marginLeft={4}
                onClick={this.toggleHidden}
                data-testid="ToggleButton"
                css={{
                  cursor: "pointer",
                }}
              >
                <ChevronIcon color="subtle" size={1} />
              </View>
            )}
          </View>
        </View>
        {isOpen && <View data-testid="collapsibleSegment">{children}</View>}
      </View>
    );
  }
}

export default CourseModule;
