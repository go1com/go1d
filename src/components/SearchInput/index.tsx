import * as React from "react";

import safeInvoke from "../../utils/safeInvoke";
import Button from "../Button";
import TextInput, { TextInputProps } from "../TextInput";

import IconClose from "../Icons/Close";
import IconSearch from "../Icons/Search";

export interface SearchInputProps extends TextInputProps {
  element?: any;
  onSubmit: (search: string, event: React.SyntheticEvent<HTMLElement>) => void;
  clearable?: boolean;
  onClear?: (event: React.SyntheticEvent<HTMLElement>) => void;
}

class SearchInput extends React.Component<SearchInputProps, any> {
  public state = {
    value: "",
    lastSearchedValue: "",
  };
  private ref: React.RefObject<HTMLInputElement> = React.createRef();

  public componentDidMount() {
    const { value, defaultValue } = this.props;
    if (value) {
      this.setState({
        value,
      });
    } else if (defaultValue) {
      this.setState({
        value: defaultValue,
      });
    }
  }

  public componentDidUpdate(prevProps, prevState) {
    if (this.state.value === prevState.value) {
      const { value } = this.props;

      if (typeof prevProps.value !== "undefined" && value !== prevProps.value) {
        this.setState({
          value,
        });
      }
    }
  }

  public handleChange = (event: React.ChangeEvent<any>) => {
    const { onChange } = this.props;
    this.setState({ value: event.target.value });
    safeInvoke(onChange, event);
  };

  public handleOnKeyDown = event => {
    const { onSubmit, onKeyDown, innerRef } = this.props;
    const { value } = this.state;
    const Key = event.key;
    const Ref = innerRef ? innerRef : this.ref;

    switch (Key) {
      case "Enter":
        this.setState(
          {
            lastSearchedValue: value,
          },
          () => {
            if (Ref.current) {
              Ref.current.blur();
            }
            safeInvoke(onSubmit, value, event);
          }
        );
        event.preventDefault();
        break;
    }
    safeInvoke(onKeyDown, event);
  };

  public handleClear = event => {
    const { onClear, innerRef } = this.props;

    this.setState({
      value: "",
      lastSearchedValue: "",
    });

    const Ref = innerRef ? innerRef : this.ref;
    if (Ref.current) {
      Ref.current.focus();
    }

    if (onClear) {
      safeInvoke(onClear, "", event);
    }
  };

  public handleBlur = event => {
    const { onBlur } = this.props;
    const { value, lastSearchedValue } = this.state;

    if (value !== lastSearchedValue) {
      this.setState({ value: lastSearchedValue });
    }

    if (onBlur) {
      safeInvoke(onBlur, "", event);
    }
  };

  public render() {
    const {
      element, // prevent it from being passed down to the child
      onChange, // prevent it from being passed down to the child
      onClear, // prevent it from being passed down to the child
      onKeyDown, // prevent it from being passed down to the child
      onBlur, // prevent it from being passed down to the child
      value, // prevent it from being passed down to the child
      defaultValue, // prevent it from being passed down to the child
      clearable = true,
      innerRef,
      size,
      ...props
    } = this.props;

    return (
      <TextInput
        icon={IconSearch}
        value={this.state.value}
        size={size}
        onChange={this.handleChange}
        onKeyDown={this.handleOnKeyDown}
        onBlur={this.handleBlur}
        aria-label="Search Field"
        innerRef={innerRef ? innerRef : this.ref}
        suffixNode={
          <Button
            icon={IconClose}
            color="muted"
            size={size}
            data-testid="clearButton"
            aria-label="Clear Icon"
            display={clearable && this.state.value ? "flex" : "none"}
            onClick={this.handleClear}
            backgroundColor="transparent"
          />
        }
        {...props}
      />
    );
  }
}

export default SearchInput;
