import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import { List } from "react-virtualized";
import { FontWeight } from "../../foundations/foundation-types";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import IconChevronDown from "../Icons/ChevronDown";
import IconCross from "../Icons/Cross";
import Portal from "../Portal";
import SearchInput from "../SearchInput";
import Text from "../Text";
import Theme from "../Theme";

import View, { ViewProps } from "../View";

interface SelectOptionItem {
  value?: string;
  label: string;
  labelSelected?: string;
  optgroup?: boolean;
  values?: Array<{ value: string; label: string }>;
}

export interface SelectProps extends ViewProps {
  label?: string;
  options?: SelectOptionItem[];
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: any;
  value?: any;
  name?: string;
  size?: "sm" | "md" | "lg";
  fontWeight?: FontWeight;
  clearable?: boolean;
  popperModifiers?: any;
  widthOptionContainer?: number;
  onClear?: () => void;
  onChange?: ({ target }) => void;
}

const Sizes = {
  lg: {
    labelSize: 1,
    fontSize: 2,
  },
  md: {
    labelSize: 0,
    fontSize: 2,
  },
  sm: {
    labelSize: 0,
    fontSize: 1,
  },
};

interface State {
  selectElement: HTMLElement;
  isFocused: boolean;
}

class Select extends React.PureComponent<SelectProps, State> {
  public static defaultProps = {
    size: "md",
    options: [],
  };
  public static displayName = "Select";
  public state = {
    selectElement: null,
    isFocused: false,
  };
  public OptionToString(Option) {
    if (Option) {
      return Option.value;
    }
  }

  public renderSelectRow({
    options,
    getItemProps,
    highlightedIndex,
    selectedItem,
    colors,
  }) {
    return ({ key, index, style: virtualisedStyles }) => {
      const Option = options[index];

      if (Option.optgroup) {
        if (Option.label.trim() === "") {
          return (
            <View key={key} css={virtualisedStyles} backgroundColor="soft" />
          );
        }

        return (
          <View
            key={key}
            css={virtualisedStyles}
            backgroundColor="faint"
            padding={4}
          >
            <Text color="subtle">{Option.label}</Text>
          </View>
        );
      }

      return (
        <View key={key} css={virtualisedStyles}>
          <View
            width="100%"
            paddingY={4}
            paddingX={Option.childOption ? 6 : 4}
            {...getItemProps({
              index: Option.selectableIndex,
              item: Option,
              style: {
                cursor: "pointer",
                backgroundColor:
                  selectedItem === Option
                    ? colors.accent
                    : highlightedIndex === Option.selectableIndex
                    ? colors.noteHighest
                    : colors.background,
              },
            })}
          >
            <Text
              fontSize={Sizes[this.props.size].fontSize}
              css={{
                transition: "none",
              }}
              color={selectedItem === Option ? "background" : "default"}
              ellipsis={true}
              title={Option.label}
            >
              {Option.label}
            </Text>
          </View>
        </View>
      );
    };
  }

  @autobind
  public handleFocus(evt: React.FocusEvent<any>) {
    this.setState({
      isFocused: true,
    });
  }

  @autobind
  public handleBlur(evt: React.FocusEvent<any>) {
    this.setState({
      isFocused: false,
    });
  }

  @autobind
  public getBorderColor(isOpen: boolean) {
    const { isFocused } = this.state;
    const { error, borderColor } = this.props;

    if (isOpen) {
      return "accent";
    }
    if (error) {
      return "dangerLow";
    }
    if (isFocused) {
      return "accent";
    }

    return borderColor ? borderColor : "faded";
  }

  public render() {
    const {
      label,
      clearable,
      options,
      size,
      defaultText = "Please Select", // Deprecated
      name, // Do not pass to child
      onChange, // Do not pass to child
      onClear, // Do not pass to child
      placeholder,
      defaultValue,
      value,
      fontWeight,
      searchable,
      id,
      popperModifiers,
      ...remainingProps
    } = this.props;
    let { disabled } = this.props;

    if (!options || options.length === 0) {
      disabled = true;
    }

    const { flattenedOptions, selectableCount } = this.flattenOptions(options);

    const DefaultOption =
      defaultValue && Array.isArray(flattenedOptions)
        ? flattenedOptions.find(x => x.value === defaultValue)
        : null;

    const selectedOption =
      typeof value !== "undefined" && Array.isArray(flattenedOptions)
        ? value !== null
          ? flattenedOptions.find(x => x.value === value)
          : null
        : undefined;

    const { labelSize, fontSize } = Sizes[size];

    return (
      <Theme.Consumer>
        {({ colors, inputSizes, spacing }) => (
          <Downshift
            stateReducer={this.stateReducer}
            initialInputValue=""
            onChange={this.handleOnChange}
            itemToString={this.OptionToString}
            itemCount={selectableCount}
            initialSelectedItem={DefaultOption}
            selectedItem={selectedOption}
          >
            {({
              getToggleButtonProps,
              getItemProps,
              getRootProps,
              getMenuProps,
              getInputProps,
              isOpen,
              inputValue,
              selectedItem,
              highlightedIndex,
              clearSelection,
            }) => {
              const filteredOptions = searchable
                ? this.filterOptions(flattenedOptions, inputValue)
                : flattenedOptions;

              const elementHeight = inputSizes[size];
              return (
                <View flexGrow={1} {...getRootProps({ refKey: "innerRef" })}>
                  <Manager>
                    <Reference innerRef={this.setSelectElementRef}>
                      {({ ref }) => {
                        const isFloatingLabel =
                          label && (isOpen || selectedItem);

                        const shouldShowPlaceholder = !label || isFloatingLabel;

                        return (
                          <View
                            id={id}
                            element="button"
                            innerRef={ref}
                            type="button"
                            width="100%"
                            flexDirection="row"
                            {...getToggleButtonProps({
                              disabled,
                            })}
                            data-testid="primarySection"
                            aria-label={label}
                            onFocus={this.handleFocus}
                            onBlur={this.handleBlur}
                            css={{
                              cursor: disabled ? "initial" : "pointer",
                            }}
                          >
                            <View
                              data-testid="select-container"
                              width="100%"
                              borderRadius={2}
                              paddingX={4}
                              border={1}
                              opacity={disabled && "disabled"}
                              borderColor={this.getBorderColor(isOpen)}
                              position="relative"
                              backgroundColor="background"
                              flexDirection="row"
                              justifyContent="space-between"
                              alignItems="center"
                              height={elementHeight}
                              css={{
                                paddingTop:
                                  isFloatingLabel &&
                                  `${elementHeight / 2 + 1}px`,
                                paddingBottom:
                                  isFloatingLabel && `${spacing[3]}px`,
                              }}
                              {...remainingProps}
                            >
                              {label && (
                                <Text
                                  element="label"
                                  lineHeight="ui"
                                  htmlFor={id}
                                  display="flex"
                                  fontWeight="normal"
                                  color="subtle"
                                  marginRight={4} // make sure Icon doesn't overlap label
                                  fontSize={
                                    isFloatingLabel ? labelSize : fontSize
                                  }
                                  css={{
                                    position: isFloatingLabel
                                      ? "absolute"
                                      : undefined,
                                    alignItems: "center",
                                    height: `${elementHeight /
                                      (isFloatingLabel ? 2 : 1)}px`,
                                    top: 0,
                                    left: 16,
                                  }}
                                >
                                  {label}
                                </Text>
                              )}
                              <View
                                flexGrow={1}
                                flexShrink={1}
                                overflow="hidden"
                              >
                                <Text
                                  ellipsis={true}
                                  fontSize={fontSize}
                                  fontWeight={
                                    fontWeight ? fontWeight : "normal"
                                  }
                                  color={selectedItem ? "default" : "muted"}
                                  css={{
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {selectedItem
                                    ? selectedItem.labelSelected ||
                                      selectedItem.label
                                    : shouldShowPlaceholder
                                    ? placeholder || defaultText
                                    : ""}
                                </Text>
                              </View>
                              <View
                                position="absolute"
                                alignItems="center"
                                justifyContent="center"
                                height={elementHeight}
                                css={{
                                  top: 0,
                                  right: spacing[4],
                                  pointerEvents:
                                    selectedItem && clearable ? "auto" : "none",
                                }}
                              >
                                {selectedItem && clearable ? (
                                  <IconCross
                                    color="muted"
                                    size={2}
                                    onClick={this.handleSelectionClear(
                                      clearSelection
                                    )}
                                  />
                                ) : (
                                  <IconChevronDown color="muted" size={2} />
                                )}
                              </View>
                            </View>
                          </View>
                        );
                      }}
                    </Reference>
                    {isOpen && (
                      <Portal>
                        <Popper
                          placement="bottom-start"
                          modifiers={popperModifiers}
                        >
                          {({ ref, style, scheduleUpdate }) => (
                            <View
                              {...getMenuProps({
                                refKey: "innerRef",
                              })}
                            >
                              <View
                                backgroundColor="background"
                                boxShadow="strong"
                                borderRadius={4}
                                border={1}
                                borderColor="delicate"
                                overflow="hidden"
                                style={style}
                                innerRef={ref}
                                transition="none"
                                zIndex="dropdown"
                                marginTop={2}
                                width={
                                  this.props.widthOptionContainer ||
                                  this.state.selectElement.offsetWidth
                                }
                              >
                                {searchable && (
                                  <View paddingX={4} paddingY={3}>
                                    <SearchInput
                                      id={`SearchInput__${id}`}
                                      onSubmit={null}
                                      clearable={false}
                                      size={size}
                                      data-testid="searchFilterInput"
                                      {...(getInputProps({
                                        size,
                                        onChange: scheduleUpdate,
                                      }) as {})}
                                    />
                                  </View>
                                )}
                                <List
                                  data-testid="resultsList"
                                  width={
                                    this.props.widthOptionContainer ||
                                    this.state.selectElement.offsetWidth
                                  }
                                  height={this.calculateDropDownHeight(
                                    filteredOptions
                                  )}
                                  rowCount={filteredOptions.length}
                                  rowHeight={this.calculateOptionHeight(
                                    filteredOptions
                                  )}
                                  rowRenderer={this.renderSelectRow({
                                    options: filteredOptions,
                                    colors,
                                    getItemProps,
                                    highlightedIndex,
                                    selectedItem,
                                  })}
                                />
                              </View>
                            </View>
                          )}
                        </Popper>
                      </Portal>
                    )}
                  </Manager>
                </View>
              );
            }}
          </Downshift>
        )}
      </Theme.Consumer>
    );
  }

  private setSelectElementRef = element => {
    this.setState({
      selectElement: element,
    });
  };

  private handleOnChange = event => {
    const { onChange, name } = this.props;

    if (onChange) {
      safeInvoke(onChange, {
        target: {
          name,
          ...event,
        },
      });
    }
  };

  private handleSelectionClear(clearFunction) {
    const { onClear } = this.props;
    return () => {
      clearFunction();
      if (onClear) {
        safeInvoke(onClear);
      }
    };
  }

  private stateReducer = (state, changes) => {
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickButton:
        return {
          ...changes,
          inputValue: "",
        };
      case Downshift.stateChangeTypes.clickItem:
      case Downshift.stateChangeTypes.controlledPropUpdatedSelectedItem:
        return {
          ...changes,
          highlightedIndex: state.highlightedIndex,
          inputValue: "",
        };
      default:
        return changes;
    }
  };

  private flattenOptions(Options = []) {
    return Options.reduce((sum, Option) => {
      if (Option.optgroup) {
        return {
          selectableCount: (sum.selectableCount || 0) + Option.values.length,
          flattenedOptions: [
            ...(sum.flattenedOptions || []),
            {
              label: Option.label || "",
              optgroup: true,
            },
            ...(Option.values.map((SubOption, index) => ({
              ...SubOption,
              childOption: true,
              selectableIndex: (sum.selectableCount || 0) + index,
            })) || []),
          ],
        };
      }

      return {
        selectableCount: (sum.selectableCount || 0) + 1,
        flattenedOptions: [
          ...(sum.flattenedOptions || []),
          {
            ...Option,
            selectableIndex: sum.selectableCount || 0,
          },
        ],
      };
    }, {});
  }

  private filterOptions(Options, searchValue) {
    if (typeof searchValue === "string" && searchValue.trim() !== "") {
      return Options.filter(Entry => {
        return (
          !Entry.optgroup &&
          Entry.label &&
          Entry.label.toLowerCase().includes(searchValue.toLowerCase())
        );
      });
    }
    return Options;
  }

  private calculateDropDownHeight(Options) {
    const Height = Options.reduce((sum, Entry, index) => {
      return sum + this.calculateOptionHeight(Options)({ index });
    }, 0);

    return Height < 300 ? Height : 300;
  }

  private calculateOptionHeight(Options) {
    // Calculate the options for VirtualisedList
    return ({ index: OptionIndex }) => {
      const Option = Options[OptionIndex];
      const baseOptionHeight = 55;

      if (typeof Option === "undefined") {
        return 0;
      }

      if (Option.optgroup) {
        if (Option.label.trim() === "") {
          // If it is just a line break optGroup
          return 1;
        }

        return 55;
      }

      return baseOptionHeight;
    };
  }
}

export default Select;
