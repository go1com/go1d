import * as React from "react";

import { autobind } from "../../utils/decorators";
import Field, { FieldProps } from "../Field";
import IconNotPassed from "../Icons/NotPassed";
import IconPassed from "../Icons/Passed";
import InputSuffix from "../InputSuffix";
import Text from "../Text";

export interface PortalUrlFieldProps extends FieldProps {
  isAvailable?: boolean;
  suffixValue?: string;
}

class PortalUrlField extends React.Component<PortalUrlFieldProps, any> {
  public static displayName = "PortalUrlField";

  @autobind
  public getStatusText() {
    if (this.props.isAvailable) {
      return "Available";
    } else if (this.props.isAvailable === false) {
      return "Not Available";
    }
    return "";
  }

  @autobind
  public getStatusColor() {
    if (this.props.isAvailable) {
      return "success";
    } else if (this.props.isAvailable === false) {
      return "danger";
    }
    return "";
  }

  @autobind
  public getStatusIcon() {
    if (this.props.isAvailable) {
      return IconPassed;
    } else if (this.props.isAvailable === false) {
      return IconNotPassed;
    }
    return undefined;
  }

  public render() {
    const { suffixValue, isAvailable, ...props } = this.props;

    return (
      <Field
        statusText={this.getStatusText()}
        statusColor={this.getStatusColor()}
        statusIcon={this.getStatusIcon()}
        component={InputSuffix}
        suffixValue={<Text>{suffixValue}</Text>}
        {...props}
      />
    );
  }
}

export default PortalUrlField;
