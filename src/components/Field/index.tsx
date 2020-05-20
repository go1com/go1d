import { connect, FieldAttributes, FormikContext, getIn } from "formik";
import { get } from "lodash";
import * as React from "react";
import { autobind } from "../../utils/decorators";
import firstDefined from "../../utils/firstDefined";
import safeInvoke from "../../utils/safeInvoke";
import { IconProps } from "../IconBase";
import Label from "../Label";
import Text from "../Text";
import View, { ViewProps } from "../View";

function shallowCompare(newObj, prevObj) {
  if (Object.keys(newObj).length !== Object.keys(prevObj).length) {
    return true;
  }

  for (const key in newObj) {
    if (newObj[key] !== prevObj[key]) {
      return true;
    }
  }
  return false;
}
export interface FieldProps extends ViewProps {
  label?: string;
  id?: string;
  name: string;
  value?: any;
  required?: boolean;
  disabled?: boolean;
  description?: React.ReactNode;
  inputRef?: (instance: any) => void;
  statusText?: string;
  invalidText?: string;
  requiredText?: string;
  statusColor?: string;
  statusIcon?: React.ComponentType<IconProps>;
  errorFormat?: (errorMessage: string) => React.ReactNode | string;
  suppressError?: boolean;
  errorForLabel?: boolean;
  component?: string | React.ComponentType<any> | React.ComponentType<void>;
}

class Field extends React.Component<
  FieldProps & {
    formik: FormikContext<any>;
  }
> {
  public componentDidMount() {
    // Register the Field with the parent Formik. Parent will cycle through
    // registered Field's validate fns right prior to submit
    this.props.formik.registerField(this.props.name, this);
  }

  public componentDidUpdate(
    prevProps: FieldAttributes<FieldProps> & { formik: FormikContext<any[]> }
  ) {
    if (this.props.name !== prevProps.name) {
      this.props.formik.unregisterField(prevProps.name);
      this.props.formik.registerField(this.props.name, this);
    }

    if (this.props.validate !== prevProps.validate) {
      this.props.formik.registerField(this.props.name, this);
    }
  }

  public shouldComponentUpdate(prevProps) {
    const { formik, ...props } = this.props;
    const { formik: oldFormik, ...oldProps } = prevProps;

    return (
      shallowCompare(props, oldProps) ||
      shallowCompare(
        {
          ...formik,
          values: get(formik.values, props.name),
          errors: get(formik.errors, props.name),
          touched: get(formik.touched, props.name),
        },
        {
          ...oldFormik,
          values: get(oldFormik.values, props.name),
          errors: get(oldFormik.errors, props.name),
          touched: get(oldFormik.touched, props.name),
        }
      )
    );
  }

  public componentWillUnmount() {
    this.props.formik.unregisterField(this.props.name);
  }

  @autobind
  public onChange(evt: any) {
    safeInvoke(this.props.formik.handleChange, evt);
    return safeInvoke(this.props.onChange, evt);
  }

  @autobind
  public onBlur(evt: any) {
    safeInvoke(this.props.formik.handleBlur, evt);
    return safeInvoke(this.props.onBlur, evt);
  }

  public render() {
    const {
      component,
      children,
      description,
      label,
      id,
      required,
      disabled,
      name,
      inputRef,
      invalidText = "Invalid",
      requiredText = "Required",
      validate,
      errorMessage,
      errorFormat,
      hideStatus,
      hideLabel,
      value: suppliedValue,
      onChange,
      suppressError,
      errorForLabel,
      formik,
      ...letProps
    } = this.props;

    let {
      statusText = !required && "Optional",
      statusIcon,
      statusColor = "subtle",
      // tslint:disable-next-line:prefer-const
      ...props
    } = letProps;

    let message = null;

    let value = getIn(formik.values, name);
    if (typeof value === "undefined") {
      value = "";
    }

    if (
      formik.errors &&
      get(formik.errors, name) &&
      get(formik.touched, name) && // Only show error for touched fields //
      !suppressError
    ) {
      message = get(formik.errors, name);
    }
    if (errorMessage) {
      message = errorMessage;
    }
    message =
      message && (errorFormat ? safeInvoke(errorFormat, message) : message);
    // component can get into a recursive state where a previous error prevents the status from being updated, check for that here
    if (
      (statusText === invalidText || statusText === requiredText) &&
      !get(formik.errors, name)
    ) {
      statusText = "";
    }

    // this is not an unnecessary check of touched. Otherwise the status text won't get updated. //
    if (!statusText || get(formik.touched, name)) {
      if (
        (formik.errors &&
          get(formik.errors, name) &&
          get(formik.touched, name) &&
          !suppressError) ||
        errorMessage
      ) {
        statusIcon = statusIcon ? statusIcon : null;
        statusColor = "danger";
        // only redeclare statusText if not already provided
        if (!statusText) {
          statusText =
            required && (value === "" || value.length === 0) // we should show Required only if it is empty, otherwise show invalid //
              ? requiredText
              : invalidText;
        }
      } else {
        // only remove if not declared upscope
        if (!statusText) {
          statusColor = statusColor ? statusColor : "subtle";
          statusText = !required ? "Optional" : ""; // Once error has been corrected for required fields, remove status text //
        }
      }
    }

    const Component: any = component;

    return (
      <View paddingBottom={2}>
        {!hideLabel && (
          <Label
            htmlFor={id || name}
            statusText={hideStatus ? null : statusText}
            statusColor={statusColor}
            statusIcon={statusIcon}
            color={errorForLabel && !!message ? "danger" : null}
            whiteSpace="pre-wrap"
          >
            {label}
          </Label>
        )}
        <View paddingBottom={2} flexGrow={1}>
          {component && (
            <Component
              ref={inputRef}
              name={name}
              // use "initialValues" provided through Form, default to value attribute, if none is provided use empty string to avoid "A component is changing an uncontrolled input of type number to be controlled" errors //
              value={firstDefined(value, "")}
              disabled={disabled || formik.status === "disabled"}
              id={id || name}
              children={children}
              error={!!message}
              onChange={this.onChange}
              onBlur={this.onBlur}
              label={hideLabel && label}
              {...props}
            />
          )}
        </View>
        {message && (
          <View paddingBottom={2}>
            <Text color="danger">{message}</Text>
          </View>
        )}
        {description && (
          <View paddingBottom={2}>
            <Text color="subtle">{description}</Text>
          </View>
        )}
      </View>
    );
  }
}

export default connect<FieldProps>(Field);
