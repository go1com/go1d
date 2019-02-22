import * as React from "react";
import { autobind } from "../../utils/decorators";
import ButtonMinimal from "../ButtonMinimal";
import SelectDropdown, { SelectDropdownItem } from "../SelectDropdown";

import { TextInput } from "../..";
import safeInvoke from "../../utils/safeInvoke";
import Text from "../Text";
import View, { ViewProps } from "../View";

interface State {
  value: string[];
  isFocused: boolean;
  search: string;
  randomId: string;
}

export interface TagSelectorProps extends ViewProps {
  optionRenderer?: (option: SelectDropdownItem) => React.ReactNode;

  /**
   * The selected elements of the component.
   */
  value?: string[];
  options: string[];

  onInputChange?: (evt: React.SyntheticEvent<HTMLInputElement>) => void;

  onChange?: (evt: any) => void;

  /**
   * Optional function to call when a new option is created. Returns a promise to allow for asynchronous actions to finish before continuing
   */
  onCreate?: (option: string) => Promise<any>;

  /**
   * Whether new options may be created. Defaults to true
   */
  createable?: boolean;

  placeholder?: string;
}

class TagSelector extends React.Component<TagSelectorProps, State> {
  public static defaultProps = {
    createable: true,
  };

  public state: State = {
    value: [],
    isFocused: false,
    search: "",
    randomId: `Tag_${Math.random()}`,
  };

  private inputRef: React.RefObject<any> = React.createRef();

  @autobind
  public inputChange(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      search: evt.currentTarget.value || "",
    });
  }

  @autobind
  public removeItem(evt: React.SyntheticEvent<HTMLButtonElement>) {
    const value = this.props.value || this.state.value || [];
    const newValue = value.filter(v => v !== evt.currentTarget.dataset.value);

    this.setState({
      value: newValue,
    });

    safeInvoke(this.props.onChange, {
      target: { value: newValue, name: this.props.name, id: this.props.id },
    });
  }

  @autobind
  public onChange(evt) {
    this.setState({
      value: evt.target.value,
      search: "",
    });

    safeInvoke(this.props.onChange, evt);
  }

  @autobind
  public onCreate() {
    this.onChange({
      target: {
        value: [
          ...(this.props.value || this.state.value || []),
          this.state.search.toString(),
        ],
        name: this.props.name,
        id: this.props.id,
      },
    });
  }

  public getBorderColor() {
    const { isFocused } = this.state;
    const { error, borderColor } = this.props;

    if (error) {
      return "danger";
    }
    if (isFocused) {
      return "accent";
    }

    return borderColor ? borderColor : "soft";
  }

  @autobind
  public handleFocus(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ isFocused: true });
    safeInvoke(this.props.onFocus, evt);
  }

  @autobind
  public handleBlur(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ isFocused: false });
    safeInvoke(this.props.onBlur, evt);
  }

  @autobind
  public renderCreate() {
    return <Text>{`Create new tag "${this.state.search}"`}</Text>;
  }

  @autobind
  public renderOption(item: SelectDropdownItem) {
    return <Text>{item.label}</Text>;
  }

  public render() {
    const {
      value = this.props.value || this.state.value || [],
      optionRenderer = this.renderOption,
      options = [],
      id,
      disabled,
      onChange,
      createable,
      borderRadius = 2,
      onFocus,
      onBlur,
      ...props
    } = this.props;

    const formattedOptions = options
      .filter(
        option =>
          !value.includes(option.toString()) &&
          option
            .toString()
            .toLowerCase()
            .includes(this.state.search.trim().toLowerCase())
      )
      .map(option => {
        return {
          label: option,
          value: option.toString(),
        };
      });

    const renderCreate =
      createable &&
      this.state.search &&
      !options.find(
        v =>
          v.toString().toLowerCase() === this.state.search.trim().toLowerCase()
      ) &&
      !value.find(
        v =>
          v.toString().toLowerCase() === this.state.search.trim().toLowerCase()
      );

    return (
      <SelectDropdown
        {...props}
        value={value}
        placeholder={value && value.length ? "" : "Type to create a tag"}
        options={formattedOptions}
        isMulti={true}
        onChange={this.onChange}
        renderCreateOption={renderCreate ? this.renderCreate : null}
        optionRenderer={optionRenderer}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        container={this.inputRef}
        searchTerm={this.state.search}
        onCreate={this.onCreate}
        isOpen={this.state.isFocused === true}
      >
        {({ ref, openMenu, getInputProps }) => (
          <View innerRef={this.inputRef}>
            <View
              element="label"
              position="relative"
              flexDirection="row"
              flexWrap="wrap"
              borderRadius={borderRadius}
              backgroundColor="background"
              paddingX={4}
              minHeight={45}
              paddingY={0}
              border={1}
              borderColor={this.getBorderColor()}
              boxShadow="inner"
              alignItems="center"
              width="100%"
              padding={0}
              htmlFor={id || this.state.randomId}
              innerRef={ref}
              opacity={disabled ? "disabled" : null}
            >
              {value.map((v, i) => (
                <View
                  key={i}
                  flexDirection="row"
                  alignItems="center"
                  borderRadius={borderRadius}
                  borderColor={this.props.borderColor || "soft"}
                  backgroundColor="background"
                  paddingX={4}
                  paddingY={3}
                  marginRight={2}
                  border={1}
                  boxShadow="crisp"
                >
                  <Text fontSize={1} color="inherit" marginRight={2}>
                    {v}
                  </Text>
                  <ButtonMinimal
                    marginLeft={2}
                    iconName="Close"
                    size="sm"
                    width={16}
                    height={16}
                    paddingY={0}
                    round={true}
                    data-value={v}
                    onClick={this.removeItem}
                    disabled={disabled}
                  />
                </View>
              ))}
              <TextInput
                {...getInputProps({
                  onFocus: openMenu,
                })}
                id={id || this.state.randomId}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
                width="100%"
                placeholder={value.length ? "" : "Type to create a Tag"}
                value={this.state.search}
                onChange={this.inputChange}
                borderColor="transparent"
                boxShadow="none"
                disabled={disabled}
                viewCss={{
                  flexGrow: 1,
                  flexShrink: 1,
                  boxShadow: "none",
                  border: 0,
                }}
                {...props}
              />
            </View>
          </View>
        )}
      </SelectDropdown>
    );
  }
}

export default TagSelector;
