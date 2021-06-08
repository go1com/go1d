import { connect, FormikContext } from "formik";
import * as React from "react";
import ButtonFilled, { ButtonFilledProps } from "../ButtonFilled";

interface SubmitButtonProps extends ButtonFilledProps {
  disableOnFormError?: boolean;
}

class SubmitButton extends React.Component<
  SubmitButtonProps & { formik: FormikContext<any> }
> {
  public render() {
    const { disableOnFormError, formik, children, ...props } = this.props;
    const disabled =
      formik.status === "disabled" ||
      (disableOnFormError && Object.keys(formik.errors).length > 0);

    return (
      <ButtonFilled disabled={disabled} type="submit" color="accent" {...props}>
        {children}
      </ButtonFilled>
    );
  }
}

export default connect<ButtonFilledProps>(SubmitButton);
