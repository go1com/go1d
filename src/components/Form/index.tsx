import { Formik, FormikConfig } from "formik";
import { isEqual } from "lodash";
import * as React from "react";
import { autobind } from "../../utils/decorators";
import View, { ViewProps } from "../View";

interface InnerFormProps extends ViewProps {
  status: string;
  setStatus: (status?: any) => void;
  onReset: (a: any) => void;
  disabled?: boolean;
  onSubmit: (evt: React.SyntheticEvent) => void;
  onChange?: (data: any) => void;
  values?: any;
}

export interface FormProps extends FormikConfig<any> {
  children?: React.ReactNode;
  disabled?: boolean;
  formikRef?: any;
  onChange?: (data: any) => void;
  flexGrow?: number;
  formProps?: React.FormHTMLAttributes<HTMLFormElement>;
}

export class InternalForm extends React.Component<
  InnerFormProps & React.FormHTMLAttributes<HTMLFormElement>,
  any
> {
  public componentDidUpdate(prevProps: InnerFormProps) {
    const { status, setStatus, disabled } = this.props;

    if ((status === "disabled") !== !!disabled) {
      setStatus(disabled ? "disabled" : null);
    }
  }

  public componentDidMount() {
    const { status, setStatus, disabled } = this.props;

    if ((status === "disabled") !== !!disabled) {
      setStatus(disabled ? "disabled" : null);
    }
  }

  public componentWillReceiveProps(nextProps) {
    if (
      nextProps.onChange &&
      (!isEqual(nextProps.values, this.props.values) ||
        !isEqual(nextProps.errors, this.props.errors))
    ) {
      nextProps.onChange({
        values: nextProps.values,
        errors: nextProps.errors,
      });
    }
  }

  @autobind
  public handleSubmit(evt) {
    if (this.props.disabled) {
      evt.preventDefault();
      return false;
    }

    return this.props.onSubmit(evt);
  }

  @autobind
  public handleReset(evt) {
    if (this.props.disabled) {
      evt.preventDefault();
      return false;
    }

    return this.props.onReset(evt);
  }

  public render() {
    const {
      children,
      status,
      setStatus,
      onReset,
      disabled,
      onSubmit,
      onChange,
      values,
      errors,
      ...props
    } = this.props;
    return (
      <View
        element="form"
        {...props}
        onReset={this.handleReset}
        onSubmit={this.handleSubmit}
      >
        {children}
      </View>
    );
  }
}

/**
 * Form is an extension of Formik's Formik Component https://jaredpalmer.com/formik/docs/api/formik
 *
 * Form keeps track of your form's state and then exposes it plus a few reusable methods and event handlers (handleChange, handleBlur, and handleSubmit) to your form via props. handleChange and handleBlur work exactly as expected--they use a name or id attribute to figure out which field to update. If you are using the Form and Field components from Go1d, these methods are even mapped automatically.
 *
 * The form component renders a <form> dom node with no styling
 *
 * Helpful Resources
 *
 * - [Validation](https://jaredpalmer.com/formik/docs/guides/validation)
 * - [Nested Objects & Arrays](https://jaredpalmer.com/formik/docs/guides/arrays)
 * - [Form Submission](https://jaredpalmer.com/formik/docs/guides/form-submission)
 */
const Form: React.SFC<FormProps> = ({
  children,
  disabled,
  onChange,
  formikRef,
  flexGrow,
  formProps,
  ...props
}: FormProps) => {
  return (
    <Formik ref={formikRef} {...props}>
      {({
        handleSubmit,
        handleReset,
        status,
        values,
        setStatus,
        isSubmitting,
        errors,
      }) => (
        <InternalForm
          flexGrow={flexGrow}
          onReset={handleReset}
          onSubmit={handleSubmit}
          disabled={disabled || isSubmitting}
          status={status}
          setStatus={setStatus}
          onChange={onChange}
          values={values}
          errors={errors}
          {...formProps}
        >
          {children}
        </InternalForm>
      )}
    </Formik>
  );
};

Form.displayName = "Form";

export default Form;
