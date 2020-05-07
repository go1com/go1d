import isFunction = require("lodash/isFunction");
import * as React from "react";
import ButtonMinimal from "../ButtonMinimal";
import Text from "../Text";
import TextInput from "../TextInput";
import Theme from "../Theme";
import View, { ViewProps } from "../View";
import CrossIcon from "../Icons/Cross";

interface Options {
  label: string;
  value: any;
  [key: string]: any;
}

interface AutocompleteProps extends ViewProps {
  lookupMethod: (evt: any) => void;
  options: Options[];
  onSelectOption: (evt: any) => void;
  defaultText?: string;
  defaultSelected?: boolean;
  optionRenderer?: (option: Options) => React.ReactNode;
  optionFormatter?: (option: any) => Options;
  showStatus?: boolean;
  statusRenderer?: () => React.ReactNode;
}

class Autocomplete extends React.Component<AutocompleteProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      text: props.defaultText || "",
      value: null,
      options: [],
      showDropdown: true,
      selected: props.defaultSelected || false,
    };
  }

  public handleOnChange = event => {
    const text = (event.target as any).value;
    let newState: any = {
      text,
      showDropdown: true,
    };
    if (!text.length) {
      newState = { ...newState, value: null };
    }
    this.setState(newState, () => {
      this.props.lookupMethod(this.state.text);
      if (!text.length) {
        this.props.onSelectOption(null);
      }
    });
  };

  public handleOnClick = () =>
    this.setState({
      selected: false,
    });

  public selectOption = selection => () => {
    this.setState(
      {
        text: selection.label,
        value: selection.value,
        showDropdown: false,
        selected: true,
      },
      () => {
        this.props.onSelectOption(selection);
      }
    );
  };

  public clear = () => {
    this.setState(
      {
        text: "",
        value: null,
        selected: false,
        showDropdown: true,
      },
      () => {
        this.props.onSelectOption(null);
      }
    );
  };

  public getBorderColor(colors) {
    const { selected } = this.state;
    const { error, inputProps } = this.props;
    const borderColor =
      inputProps && inputProps.css ? inputProps.css.borderColor : null;

    if (error) {
      return colors.danger;
    }

    return selected ? colors.accent : borderColor ? borderColor : colors.soft;
  }

  public render() {
    const {
      id,
      options,
      inputProps,
      dropdownProps,
      size = "md",
      labelProps,
      optionRenderer,
      optionFormatter,
      showStatus,
      statusRenderer,
      onSelectOption, // Do not pass down
      lookupMethod, // Do not pass down
      defaultSelected, // Do not pass down
      defaultText, // Do not pass down
      ...props
    } = this.props;

    const { text, showDropdown, selected } = this.state;

    const formattedOptions = options
      ? options.map(option => {
          if (isFunction(optionFormatter)) {
            return optionFormatter(option);
          }
          return option;
        })
      : [];

    return (
      <Theme.Consumer>
        {({ colors, spacing, shadows }) => (
          <View {...props}>
            <TextInput
              id={id}
              onChange={this.handleOnChange}
              onClick={this.handleOnClick}
              value={text}
              size={size}
              color={selected ? colors.background : colors.default}
              data-testid="inputElement"
              fontSize={2}
              ellipsis={true}
              viewCss={{
                backgroundColor: selected ? colors.accent : colors.background,
                borderColor: this.getBorderColor(colors),
                boxShadow: selected ? "none" : shadows.inner,
                ...(inputProps && inputProps.css),
              }}
              suffixNode={
                selected ? (
                  <ButtonMinimal
                    borderRadius={10}
                    boxShadow="none"
                    size={size}
                    onClick={this.clear}
                    data-testid="close"
                    paddingX={1}
                    paddingY={1}
                    marginRight={4}
                    iconColor={colors.background}
                    css={{
                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}
                    backgroundColor={colors.accent}
                    color={colors.background}
                  >
                    <CrossIcon />
                  </ButtonMinimal>
                ) : null
              }
              {...inputProps}
            />
            {options && text && showDropdown && (
              <View position="relative">
                <View
                  backgroundColor="background"
                  borderRadius={1}
                  boxShadow="strong"
                  top="40px"
                  position="absolute"
                  zIndex={1001}
                  maxWidth={["none", "none", "320px"]}
                  paddingY={3}
                  marginTop={2}
                  {...dropdownProps}
                >
                  {showStatus && isFunction(statusRenderer) && statusRenderer()}
                  {!showStatus &&
                    formattedOptions.map(o => {
                      const key = `${Math.random()}_${o.label}_option`;
                      const wrappingStyles = {
                        cursor: "pointer",
                        "&:hover, &:active": {
                          backgroundColor: colors.highlight,
                        },
                      };
                      if (optionRenderer) {
                        return (
                          <View
                            css={wrappingStyles}
                            key={key}
                            onClick={this.selectOption(o)}
                            padding={4}
                          >
                            {optionRenderer(o)}
                          </View>
                        );
                      }
                      return (
                        <Text
                          ellipsis={true}
                          onClick={this.selectOption(o)}
                          paddingY={4}
                          paddingX={4}
                          data-testid="locationElement"
                          key={key}
                          color="default"
                          {...labelProps}
                          css={wrappingStyles}
                        >
                          {o.label}
                        </Text>
                      );
                    })}
                </View>
              </View>
            )}
          </View>
        )}
      </Theme.Consumer>
    );
  }
}

export default Autocomplete;
