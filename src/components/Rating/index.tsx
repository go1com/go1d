import * as React from "react";

import { Button, ButtonProps } from "../..";
import safeInvoke from "../../utils/safeInvoke";
import View from "../View";

export interface RatingProps extends ButtonProps {
  name?: string;
  iconName?: string;
  unselectedIconName?: string;
  value?: number;
  defaultValue?: number;
  selectedColor?: string;
  unselectedColor?: string;
  count?: number;
}

class Rating extends React.PureComponent<RatingProps> {
  public state = {
    value: this.props.defaultValue,
    hoverValue: null,
  };
  public onClick = event => {
    const { name, onChange, value: propValue } = this.props;
    const value = event.currentTarget.value || 0;

    if (propValue === undefined) {
      this.setState({
        value,
        hoverValue: null,
      });
    }
    safeInvoke(onChange, {
      target: {
        name,
        value,
      },
    });
  };

  public onMouseOver = event => {
    const { hoverValue } = this.state;
    const value = event.currentTarget.value;
    if (hoverValue !== value) {
      this.setState({
        hoverValue: value,
      });
    }
  };
  public onMouseOut = () => {
    const { hoverValue } = this.state;
    if (hoverValue) {
      this.setState({
        hoverValue: null,
      });
    }
  };

  public render() {
    const {
      iconName = "Star",
      selectedColor = "accent",
      unselectedColor = "muted",
      disabled = false,
      value: propValue,
      viewProps,
      unselectedIconName = iconName === "Star" ? "StarOutline" : iconName,
      count = 5,
      ...remainingProps
    } = this.props;

    const { hoverValue } = this.state;

    let selectedValue: number =
      propValue === undefined ? this.state.value : propValue;

    if (selectedValue > count) {
      selectedValue = count;
    }

    return (
      <View flexDirection="row" {...viewProps}>
        {Array.from({ length: Math.max(0, count) }).map((_, index) => {
          const val = index + 1;
          const selected = selectedValue >= val;
          const hover = hoverValue >= val;
          const icon = selected ? iconName : unselectedIconName;
          const color = selected || hover ? selectedColor : unselectedColor;

          return (
            <Button
              key={index}
              iconName={icon}
              color={color}
              onClick={this.onClick}
              value={val}
              disabled={disabled}
              width="auto"
              paddingRight={1}
              data-testid={`rating-btn-${index}`}
              onMouseOver={
                !selected || !disabled ? this.onMouseOver : undefined
              }
              onMouseOut={!selected || !disabled ? this.onMouseOut : undefined}
              onFocus={!selected || !disabled ? this.onMouseOver : undefined}
              onBlur={!selected || !disabled ? this.onMouseOut : undefined}
              {...remainingProps}
            />
          );
        })}
      </View>
    );
  }
}

export default Rating;
