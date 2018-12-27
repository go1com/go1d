import * as React from "react";

import safeInvoke from "../../utils/safeInvoke";
import ButtonMinimal from "../ButtonMinimal";
import TextInput, { TextInputProps } from "../TextInput";

export interface SearchInputProps extends TextInputProps {
  element?: any;
  onSubmit: ((
    search: string,
    event: React.SyntheticEvent<HTMLElement>
  ) => void);
  clearable?: boolean;
}

class SearchInput extends React.Component<SearchInputProps, any> {
  public state = {
    value: "",
  };

  public componentDidMount() {
    const { value } = this.props;
    if (value) {
      this.setState({ value });
    }
  }

  public componentDidUpdate() {
    const { value } = this.props;
    if (value !== this.state.value) {
      this.setState({ value });
    }
  }

  public handleChange = (event: React.ChangeEvent<any>) => {
    const { onChange } = this.props;
    this.setState({ value: event.target.value });
    safeInvoke(onChange, event);
  };

  public handleOnKeyDown = event => {
    const { onSubmit, onKeyDown } = this.props;
    const Key = event.key;
    switch (Key) {
      case "Enter":
        event.target.blur();
        safeInvoke(onSubmit, this.state.value, event);
        event.preventDefault();
        break;
    }
    safeInvoke(onKeyDown, event);
  };

  public handleClear = event => {
    const { onSubmit } = this.props;
    this.setState({ value: "" });
    safeInvoke(onSubmit, "", event);
  };

  public render() {
    const {
      element, // prevent it from being passed down to the child
      onChange, // prevent it from being passed down to the child
      onKeyDown, // prevent it from being passed down to the child
      value, // prevent it from being passed down to the child
      defaultValue, // prevent it from being passed down to the child
      clearable = true,
      ...props
    } = this.props;
    return (
      <TextInput
        iconName="Search"
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleOnKeyDown}
        aria-label="Search Field"
        suffixNode={
          <ButtonMinimal
            iconName="Cross"
            color="accent"
            data-testid="clearButton"
            aria-label="Clear Icon"
            display={clearable && this.state.value ? "block" : "none"}
            onClick={this.handleClear}
          />
        }
        {...props}
      />
    );
  }
}

export default SearchInput;
