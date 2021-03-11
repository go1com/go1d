import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import { List } from "react-virtualized";
import { FontWeight } from "../../foundations/foundation-types";
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
  options?: SelectOptionItem[];
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: any;
  value?: any;
  onChange?: ({ target }) => void;
  name?: string;
  size?: "sm" | "md";
  fontWeight?: FontWeight;
  clearable?: boolean;
  popperModifiers?: any;
  onClear?: () => void;
}

const Sizes = {
  sm: {
    fontSize: 1,
  },
  md: {
    fontSize: 2,
  },
  lg: {
    fontSize: 3,
  },
};

class Select extends React.PureComponent<SelectProps, any> {
  public static defaultProps = {
    size: "md",
    options: [],
  };
  public static displayName = "Select";
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
                    ? colors.highlight
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

  public render() {
    const {
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

    return (
      <Theme.Consumer>
        {({ colors }) => (
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
              return (
                <View flexGrow={1} {...getRootProps({ refKey: "innerRef" })}>
                  <Manager>
                    <Reference>
                      {({ ref }) => (
                        <button
                          ref={ref}
                          type="button"
                          {...getToggleButtonProps({
                            disabled,
                          })}
                          data-testid="primarySection"
                          style={{
                            cursor: disabled ? "initial" : "pointer",
                          }}
                        >
                          <View
                            borderRadius={2}
                            paddingX={4}
                            border={1}
                            opacity={disabled && "disabled"}
                            borderColor={isOpen ? "accent" : "delicate"}
                            position="relative"
                            backgroundColor="background"
                            flexDirection="row"
                            justifyContent="space-between"
                            {...remainingProps}
                          >
                            <View
                              flexGrow={1}
                              flexShrink={1}
                              paddingY={3}
                              overflow="hidden"
                            >
                              <Text
                                ellipsis={true}
                                fontSize={Sizes[size].fontSize}
                                fontWeight={fontWeight ? fontWeight : "normal"}
                                css={{
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {selectedItem
                                  ? selectedItem.labelSelected ||
                                    selectedItem.label
                                  : placeholder || defaultText}
                              </Text>
                            </View>
                            <View
                              alignItems="center"
                              justifyContent="center"
                              paddingLeft={3}
                              css={{
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
                        </button>
                      )}
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
                                borderRadius={2}
                                border={1}
                                borderColor="delicate"
                                overflow="hidden"
                                style={style}
                                innerRef={ref}
                                transition="none"
                                zIndex="dropdown"
                                marginTop={2}
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
                                  width={this.calculateListWidth(
                                    filteredOptions
                                  )}
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

  private calculateListWidth(Options) {
    const { searchable } = this.props;
    const minWidth = searchable ? 275 : 200;
    const averageCharacterPX = 10;
    const longestString = Options.reduce((largest, Entry) => {
      if (Entry.label.length > largest) {
        return Entry.label.length;
      }

      return largest;
    }, 0);

    if (longestString * averageCharacterPX > 350) {
      return 350;
    }

    if (longestString * averageCharacterPX < minWidth) {
      return minWidth;
    }

    return longestString * averageCharacterPX;
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
