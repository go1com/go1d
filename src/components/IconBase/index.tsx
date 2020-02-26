import * as React from "react";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface IconProps extends ViewProps {
  color?: string;
  size?: number | number[];
}

class IconBase extends React.PureComponent<IconProps> {
  public static displayName = "Icon";

  // To be extended by Parent
  public getIconComponent(props) {
    return null;
  }

  public render() {
    const { size = 2, css, ...remainingProps } = this.props;

    return (
      <Theme.Consumer>
        {({ type, breakpoints }) => (
          <View
            element={this.getIconComponent}
            {...remainingProps}
            css={[
              {
                ...Object.keys(breakpoints).reduce(
                  (acc, bpKey, Index) => ({
                    ...acc,
                    [breakpoints[bpKey]]: {
                      width: type.scale[bpKey][size[Index] || size] || "1em",
                      height: type.scale[bpKey][size[Index] || size] || "1em",
                    },
                  }),
                  {}
                ),
              },
              css,
            ]}
          />
        )}
      </Theme.Consumer>
    );
  }
}

export default IconBase;
