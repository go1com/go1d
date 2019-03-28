import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";
import { List } from "react-virtualized";
import safeInvoke from "../../utils/safeInvoke";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Icon from "../Icon";
import Portal from "../Portal";
import SearchInput from "../SearchInput";
import Text from "../Text";
import Theme from "../Theme";

import MultiSelectDownshift from "./components/MultiSelectDownshift";

import View, { ViewProps } from "../View";

export interface MultiSelectProps extends ViewProps {
  options?: Array<{
    value?: string;
    label: string;
    optgroup?: boolean;
    values?: Array<{ value: string; label: string }>;
  }>;
  closeOnSelect?: boolean;
  disabled?: boolean;
  placeholder?: string;
  defaultValue?: any;
  value?: any;
  onChange?: ({ target }) => void;
  name?: string;
  size?: "sm" | "md";
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

class MultiSelect extends React.PureComponent<MultiSelectProps, any> {
  public static defaultProps = {
    size: "md",
  };

  public state = {
    selectedItems: [],
  };

  public OptionToString(Option) {
    if (Option) {
      return Option.value;
    }
  }

  /* istanbul ignore next */
  public renderSelectRow({
    options,
    getItemProps,
    highlightedIndex,
    selectedOptions,
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
            height={55}
            width="100%"
            paddingY={4}
            paddingX={4}
            flexDirection="row"
            data-testid="select-option"
            {...getItemProps({
              index: Option.selectableIndex,
              item: Option,
              style: {
                cursor: "pointer",
                backgroundColor:
                  highlightedIndex === Option.selectableIndex
                    ? colors.highlight
                    : colors.background,
              },
            })}
          >
            <Checkbox
              isStatic={true}
              value={selectedOptions[Option.value] === true}
            />
            <Text
              fontSize={Sizes[this.props.size].fontSize}
              css={{
                transition: "none",
              }}
              color={"default"}
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
      options,
      disabled,
      size,
      defaultValue,
      value,
      label = "",
      defaultText = "Please Select", // Deprecated - use placeholder
      placeholder,
      searchable,
      id,
      closeOnSelect,
      ...remainingProps
    } = this.props;

    const { flattenedOptions, selectableCount } = this.flattenOptions(options);

    const DefaultOption = defaultValue
      ? defaultValue.map(Entry => flattenedOptions.find(x => x.value === Entry))
      : null;

    const selectedOption = Array.isArray(value)
      ? value.map(Entry =>
          flattenedOptions.find(x => {
            if (typeof Entry !== "object") {
              return x.value === Entry;
            }

            return x.value === Entry.value;
          })
        )
      : value;

    return (
      <Theme.Consumer>
        {({ colors }) => (
          <MultiSelectDownshift
            onChange={this.handleOnChange}
            itemToString={this.OptionToString}
            itemCount={selectableCount}
            closeOnSelect={closeOnSelect}
            initialSelectedItems={DefaultOption}
            selectedItems={selectedOption}
          >
            {({
              getToggleButtonProps,
              getItemProps,
              getRootProps,
              getMenuProps,
              getInputProps,
              isOpen,
              inputValue,
              selectedItems,
              highlightedIndex,
              clearSelection,
            }) => {
              const filteredOptions = searchable
                ? this.filterOptions(flattenedOptions, inputValue)
                : flattenedOptions;

              const selectedOptions = selectedItems.reduce(
                (sum, entry) => ({
                  ...sum,
                  [entry.value]: true,
                }),
                {}
              );

              return (
                <View
                  {...remainingProps}
                  {...getRootProps({ refKey: "innerRef" })}
                >
                  <View flexDirection="row">
                    {label && (
                      <View paddingRight={4} paddingBottom={3}>
                        {typeof label === "string" ? (
                          <Text element="label" htmlFor={id}>
                            {label}
                          </Text>
                        ) : (
                          label
                        )}
                      </View>
                    )}
                    <View
                      flexDirection="row-reverse"
                      flexGrow={2}
                      flexWrap="wrap"
                      css={{
                        flexShrink: "initial",
                      }}
                    >
                      {selectedItems.length > 0 && (
                        <View
                          display="inline-flex"
                          backgroundColor="accent"
                          backgroundOpacity="pill"
                          borderRadius={2}
                          flexDirection="row"
                          css={{ overflow: "hidden" }}
                          marginLeft={3}
                          marginBottom={3}
                        >
                          <View
                            backgroundColor="accent"
                            paddingX={3}
                            paddingY={1}
                            justifyContent="center"
                          >
                            <Text color="background" fontSize={1}>
                              {selectedItems.length}
                            </Text>
                          </View>
                          <Button
                            padding={0}
                            color="subtle"
                            justifyContent="center"
                            height="100%"
                            onClick={this.handleSelectionClear(clearSelection)}
                            data-testid="clearSelectionButton"
                            borderRadius={3}
                            iconName="Cross"
                            size="sm"
                            width={20}
                            css={{
                              backgroundColor: "transparent",
                              "&:hover": {
                                color: colors.default,
                                cursor: "pointer",
                              },
                            }}
                          />
                        </View>
                      )}
                    </View>
                  </View>
                  <View>
                    <Manager>
                      <Reference>
                        {({ ref }) => (
                          <button
                            ref={ref}
                            type="button"
                            {...getToggleButtonProps({
                              disabled,
                            })}
                            data-testid="select-dropdown-trigger"
                            style={{
                              cursor: disabled ? "initial" : "pointer",
                            }}
                          >
                            <View
                              borderRadius={2}
                              paddingX={4}
                              border={1}
                              opacity={disabled && "disabled"}
                              borderColor={isOpen ? "accent" : "soft"}
                              position="relative"
                              boxShadow={isOpen ? "strong" : "soft"}
                              backgroundColor={
                                selectedItems.length > 0
                                  ? "accent"
                                  : "background"
                              }
                            >
                              <View
                                paddingY={3}
                                css={{
                                  overflow: "hidden",
                                }}
                              >
                                <Text
                                  fontSize={Sizes[size].fontSize}
                                  css={{
                                    whiteSpace: "nowrap",
                                  }}
                                  color={
                                    selectedItems.length > 0
                                      ? "background"
                                      : "default"
                                  }
                                >
                                  {selectedItems.length > 0
                                    ? selectedItems.map(x => x.label).join(", ")
                                    : placeholder || defaultText}
                                </Text>
                              </View>
                              <View
                                css={{
                                  position: "absolute",
                                  right: 12,
                                  top: 3,
                                  alignItems: "center",
                                  justifyContent: "center",
                                  paddingRight: 0,
                                  backgroundColor:
                                    selectedItems.length > 0
                                      ? colors.accent
                                      : colors.background,
                                }}
                                height="calc(100% - 3px)"
                                paddingLeft={3}
                              >
                                <Icon
                                  name="ChevronDown"
                                  size={2}
                                  color={
                                    selectedItems.length > 0
                                      ? "background"
                                      : "muted"
                                  }
                                />
                              </View>
                            </View>
                          </button>
                        )}
                      </Reference>
                      {isOpen && (
                        <Portal>
                          <Popper placement="bottom-start">
                            {({ ref, style }) => (
                              <View
                                {...getMenuProps({
                                  refKey: "innerRef",
                                })}
                              >
                                <View
                                  backgroundColor="background"
                                  boxShadow="strong"
                                  borderRadius={3}
                                  overflow="hidden"
                                  style={style}
                                  innerRef={ref}
                                  transition="none"
                                  zIndex="dropdown"
                                  marginY={2}
                                >
                                  {searchable && (
                                    <View paddingX={4} paddingY={3}>
                                      <SearchInput
                                        id={`SearchInput__${id}`}
                                        onSubmit={null}
                                        clearable={false}
                                        size={size}
                                        data-testid="inputElement"
                                        {...getInputProps()}
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
                                      selectedOptions,
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
                </View>
              );
            }}
          </MultiSelectDownshift>
        )}
      </Theme.Consumer>
    );
  }

  private handleOnChange = event => {
    const { onChange } = this.props;

    if (onChange) {
      safeInvoke(onChange, {
        target: {
          value: event,
        },
      });
    }
  };

  private handleSelectionClear = clearFunction => {
    const { onChange } = this.props;

    return () => {
      clearFunction();
      if (onChange) {
        safeInvoke(onChange, {
          target: {
            value: [],
          },
        });
      }
    };
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

    if (searchable) {
      if (longestString * averageCharacterPX < 275) {
        return 275;
      }
    }

    if (longestString * averageCharacterPX < 200) {
      return 200;
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

        return 50;
      }

      return baseOptionHeight;
    };
  }
}

export default MultiSelect;
