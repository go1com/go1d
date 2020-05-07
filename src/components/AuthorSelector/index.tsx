import * as React from "react";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import Avatar from "../Avatar";
import ButtonMinimal from "../ButtonMinimal";
import SelectDropdown, { SelectDropdownItemProps } from "../SelectDropdown";
import Text from "../Text";
import TextInput from "../TextInput";
import View, { ViewProps } from "../View";

import CrossIcon from "../Icons/Cross";
import PlusCircleIcon from "../Icons/PlusCircle";

export interface AuthorSelectorProps extends ViewProps {
  optionRenderer?: (item: SelectDropdownItemProps) => React.ReactNode;

  /**
   * The selected elements of the component. These will be the email addresses of the users.
   */
  value?: string[];

  /**
   * The options of the component. These will be the email addresses of the users.
   */
  options: string[];

  /**
   * Function to map an email address to it's corresponding user.
   */
  mapEmailToAuthor: (
    author: string
  ) => {
    firstName: string;
    lastName: string;
    avatar?: string;
    mail: string;
    [key: string]: any;
  };

  onInputChange?: (evt: React.SyntheticEvent<HTMLInputElement>) => void;

  onChange?: (value: string | string[]) => void;

  /**
   * Optional function to call when a new option is created. Returns a promise to allow for asynchronous actions to finish before continuing
   */
  onCreate?: (
    evt: React.SyntheticEvent<HTMLButtonElement>
  ) => Promise<any> | void;

  /**
   * Whether new options may be created. Defaults to true
   */
  createable?: boolean;

  placeholder?: string;
  createableText?: string;
}

interface State {
  value: string[];
  isFocused: boolean;
  search: string;
}

const filterAndMap = (options, search, value, mapEmailToAuthor) =>
  options
    .filter(
      option =>
        !value.includes(option) && option.includes(search.trim().toLowerCase())
    )
    .map(option => {
      const author = mapEmailToAuthor(option);
      return {
        label: `${author.firstName} ${author.lastName}`,
        value: author.mail,
      };
    });

class AuthorSelector extends React.PureComponent<AuthorSelectorProps, State> {
  public static defaultProps = {
    placeholder: "Type to select an Author",
    createableText: "Create",
  };

  public state: State = {
    value: [],
    isFocused: false,
    search: "",
  };
  private inputRef: React.RefObject<any> = React.createRef();

  @autobind
  public onChange(evt: { target: { value } }) {
    this.setState({
      value: evt.target.value,
      search: "",
    });

    this.inputRef.current.blur();

    safeInvoke(this.props.onChange, evt);
  }

  @autobind
  public onInputChange(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({
      search: evt.currentTarget.value,
    });
    safeInvoke(this.props.onInputChange, evt);
  }

  @autobind
  public handleFocus(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ isFocused: true });
  }

  @autobind
  public handleBlur(evt: React.SyntheticEvent<HTMLInputElement>) {
    this.setState({ isFocused: false });
  }

  @autobind
  public createNewValue(evt: React.SyntheticEvent<HTMLButtonElement>) {
    const promise = safeInvoke(this.props.onCreate, evt.currentTarget.value);

    const value = evt.currentTarget.value;

    if (promise) {
      promise.then(
        (ret?: any) => {
          this.onChange({
            target: {
              name: this.props.name,
              value: [...(this.props.value || this.state.value), ret || value],
            },
          } as any);
        },
        (rej?: any) => {
          if (rej === true) {
            this.setState({
              search: "",
            });
          }
        }
      );
    } else {
      this.onChange({
        target: {
          name: this.props.name,
          value: [...(this.props.value || this.state.value), value],
        },
      } as any);
    }
  }

  @autobind
  public selectValue(evt: React.SyntheticEvent<HTMLButtonElement>) {
    const value = this.props.value || this.state.value;

    this.setState({
      value: [...value, evt.currentTarget.value.trim()],
      search: "",
    });

    safeInvoke(this.props.onChange, {
      target: {
        name: this.props.name,
        value: [...value, evt.currentTarget.value.trim()],
      },
    });
  }

  @autobind
  public renderOption(item: SelectDropdownItemProps) {
    const author = this.props.mapEmailToAuthor(String(item.value));

    return (
      <View paddingY={3} paddingX={4} flexDirection="row" key={item.value}>
        <Avatar
          marginY="auto"
          fullName={author ? `${author.label}` : "Full Name"}
          avatarType="circle"
          src={author && author.avatar}
          size={3}
          color="background"
          backgroundColor="muted"
        />

        <View marginLeft={4}>
          <Text>{author && `${author.firstName} ${author.lastName}`}</Text>
          <Text fontSize={1}>{author && author.mail}</Text>
        </View>
      </View>
    );
  }

  @autobind
  public handleDelete(evt: React.SyntheticEvent<HTMLButtonElement>) {
    const value = this.props.value || this.state.value;
    const valueToDelete = evt.currentTarget.dataset.value;

    const newValue = value.filter(v => v !== valueToDelete);

    this.setState({ value: newValue });

    safeInvoke(this.props.onChange, {
      target: {
        name: this.props.name,
        value: newValue,
      },
    });
  }

  @autobind
  public renderCreate() {
    return (
      <View flexDirection="row">
        <View flexDirection="row" width={31}>
          <PlusCircleIcon name="PlusCircle" marginX="auto" size={3} />
        </View>
        <View marginLeft={4}>
          <Text>{`${this.props.createableText} "${this.state.search}"`}</Text>
        </View>
      </View>
    );
  }

  public render() {
    const {
      value = this.props.value || this.state.value || [],
      optionRenderer = this.renderOption,
      options = [],
      onInputChange,
      borderRadius,
      id,
      disabled,
      onChange,
      onCreate,
      mapEmailToAuthor,
      placeholder,
      createable,
      createableText,
      ...props
    } = this.props;

    const formattedOptions = filterAndMap(
      options,
      this.state.search,
      value,
      mapEmailToAuthor
    );

    return (
      <React.Fragment>
        <View marginY={2}>
          {value.map(v => {
            const author = mapEmailToAuthor(v);
            return (
              <View flexDirection="row" key={author.value} marginBottom={4}>
                <Avatar
                  fullName={`${author.firstName} ${author.lastName}`}
                  avatarType="circle"
                  src={author && author.avatar}
                  color="background"
                  backgroundColor="muted"
                  marginRight={4}
                  size={4}
                />
                <View>
                  <Text
                    fontSize={2}
                  >{`${author.firstName} ${author.lastName}`}</Text>
                  <Text fontSize={1}>{author.mail}</Text>
                </View>
                <ButtonMinimal
                  disabled={disabled}
                  marginLeft="auto"
                  marginY="auto"
                  icon={CrossIcon}
                  size="sm"
                  width={16}
                  height={16}
                  paddingY={0}
                  round={true}
                  data-value={v}
                  onClick={this.handleDelete}
                />
              </View>
            );
          })}
        </View>
        <SelectDropdown
          {...props}
          value={value}
          options={formattedOptions}
          onChange={this.onChange}
          onCreate={this.createNewValue}
          optionRenderer={optionRenderer}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          closeOnSelection={true}
          selectedColor="highlight"
          disabled={disabled}
          isMulti={true}
          renderCreateOption={this.props.createable && this.renderCreate}
          searchTerm={this.state.search}
          container={this.inputRef}
        >
          {({ ref, openMenu, getInputProps }) => (
            <View innerRef={ref}>
              <TextInput
                {...getInputProps({
                  onFocus: openMenu,
                })}
                innerRef={this.inputRef}
                placeholder={placeholder}
                value={this.state.search}
                onChange={this.onInputChange}
                disabled={disabled}
                paddingX={4}
                {...props}
              />
            </View>
          )}
        </SelectDropdown>
      </React.Fragment>
    );
  }
}

export default AuthorSelector;
