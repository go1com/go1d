import * as React from "react";
import { autobind } from "../../utils/decorators";
import priceFormatterUtil from "../../utils/priceFormatter";
import safeInvoke from "../../utils/safeInvoke";
import Icon from "../Icon";
import Text from "../Text";
import Theme from "../Theme";
import View, { ViewProps } from "../View";

export interface PackagePlanProps extends ViewProps {
  id: string;
  title?: string | React.ReactNode;
  selected?: boolean;
  interval: string;
  currency: string;
  price: number;
  showYearCalc?: boolean;
  onClick?: (id: number) => void;
  tax?: { amount: number; included: boolean };
}

class PackagePlan extends React.Component<PackagePlanProps, any> {
  @autobind
  public onClick() {
    safeInvoke(this.props.onClick, this.props.id);
  }
  public render() {
    const {
      selected,
      title,
      interval,
      currency,
      price,
      showYearCalc = true,
      tax = {},
      ...props
    } = this.props;
    const yearToMonth =
      showYearCalc &&
      interval === "year" &&
      price &&
      parseFloat((price / 12).toFixed(2));

    return (
      <Theme.Consumer>
        {({ spacing }) => {
          return (
            <View
              flexDirection="row"
              marginBottom={2}
              borderRadius={2}
              backgroundColor={selected ? "soft" : "background"}
              padding={spacing[1]}
              css={{
                cursor: "pointer",
              }}
              {...props}
              onClick={this.onClick}
            >
              <View
                padding={3}
                alignItems="start"
                height={spacing[7]}
                width={spacing[7]}
                overflow="hidden"
                position="relative"
              >
                <View
                  alignItems="center"
                  justifyContent="center"
                  height="100%"
                  width="100%"
                >
                  {selected && <Icon size={2} name="Check" color="accent" />}
                </View>
              </View>

              <View
                flexShrink={1}
                flexGrow={1}
                width="100%"
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <View flexGrow={1} flexShrink={1} flexBasis="100%">
                  <Text fontSize={2} lineClamp={2} textTransform="capitalize">
                    {title || interval}
                  </Text>
                </View>

                <View
                  flexDirection="column"
                  alignItems="flex-end"
                  marginRight={4}
                >
                  <Text fontWeight="semibold">
                    {priceFormatterUtil(currency, price, tax)} pp / {interval}
                  </Text>
                  {yearToMonth && yearToMonth > 0 && (
                    <Text fontSize={1} color="subtle">
                      {`${priceFormatterUtil(
                        currency,
                        yearToMonth,
                        tax
                      )} pp / month`}
                    </Text>
                  )}
                </View>
              </View>
            </View>
          );
        }}
      </Theme.Consumer>
    );
  }
}
export default PackagePlan;
