import * as React from "react";
import ButtonMinimal from "../ButtonMinimal";
import Eye from "../Icons/Eye";
import EyeOff from "../Icons/Eyeoff";
import Text from "../Text";
import TextInput, { TextInputProps } from "../TextInput";

export interface PasswordInputProps extends TextInputProps {
  useIconVisibility?: boolean;
  toggleableDisplay?: boolean;
}

interface State {
  maskedInput: boolean;
}

/**
 * The PasswordInput uses the TextInput component and adds password masking
 */
class PasswordInput extends React.Component<PasswordInputProps, State> {
  public static displayName = "PasswordInput";
  public static defaultProps = {
    toggleableDisplay: true,
  };

  public state = {
    maskedInput: true,
  };

  public toggleMaskState = () =>
    this.setState(prevState => ({
      maskedInput: !prevState.maskedInput,
    }));

  public render() {
    const { toggleableDisplay, useIconVisibility, ...props } = this.props;
    const { maskedInput } = this.state;

    return (
      <TextInput
        type={maskedInput ? "password" : "text"}
        suffixNode={
          toggleableDisplay && (
            <ButtonMinimal
              onClick={this.toggleMaskState}
              color="accent"
              data-testid="ToggleButton"
              backgroundColor="transparent"
            >
              {useIconVisibility ? (
                maskedInput ? (
                  <Eye />
                ) : (
                  <EyeOff />
                )
              ) : (
                <Text fontSize={1}>{maskedInput ? "SHOW" : "HIDE"}</Text>
              )}
            </ButtonMinimal>
          )
        }
        viewCss={{
          paddingRight: 0,
        }}
        {...props}
      />
    );
  }
}

export default PasswordInput;
