import Downshift from "downshift";
import * as React from "react";
import { Manager, Popper, Reference } from "react-popper";

import { Placement } from "popper.js";
import { colors } from "../../foundations";
import { ZIndex } from "../../foundations/foundation-types";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import ButtonMinimal from "../ButtonMinimal";
import Portal from "../Portal";
import SearchInput from "../SearchInput";
import Text from "../Text";
import View, { ViewProps } from "../View";
import Options from "./Options";

export interface SelectDropdownItem {
  value: string | number;
  label: string;
  disabled?: boolean;
  [key: string]: any;
}

export interface SelectDropdownProps extends ViewProps {
  /**
   * The selected elements of the component. If an object is supplied as options, this will be the value key.
   */
  options: SelectDropdownItem[];

  /**
   * value is used to process the update and return to the parent
   */
  value?: string | string[];

  /**
   * Option rendered. Createable = true means the option is not in the list currently.
   */
  optionRenderer: (item: SelectDropdownItem) => React.ReactNode;

  /**
   * Searchbar renderer, search bar is shown if handleSearchChange is defined
   */
  handleSearchChange?: (
    search: string,
    evt: React.SyntheticEvent<HTMLElement>
  ) => void;
  searchTerm?: string;
  searchPlaceholder?: string;

  onChange?: (evt: any) => void;
  isMulti?: boolean;

  /**
   * Setting this to true forces the popup to close when a selection is made
   */
  closeOnSelection?: boolean;

  /**
   * Prompt that is displayed to show that a new option can be created
   */
  renderCreateOption?: () => React.ReactNode;
  /**
   * Whether showing status message defined by the statusRenderer. Defaults to false
   */
  showStatus?: boolean;

  /**
   * Used to render status like loading or not found
   */
  statusRenderer?: () => React.ReactNode;
  onCreate?: (
    evt: React.SyntheticEvent<HTMLButtonElement>
  ) => Promise<any> | void;

  children: (params: any) => React.ReactNode;

  selectedColor?: string;
  name?: string;
  container?: React.RefObject<any>;
  dropdownZindex?: ZIndex | number | "";
  popperPlacement?: Placement;
}

interface State {
  focused: boolean;
  forceClose: boolean;
  search?: string;
}

const filter = (list, filterText) =>
  list
    .filter(
      item =>
        item.value
          .toString()
          .toLowerCase()
          .includes(filterText) ||
        item.label
          .toString()
          .toLowerCase()
          .includes(filterText)
    )
    .filter((thing, index, self) => {
      return index === self.findIndex(t => t.value === thing.value);
    });

class SelectDropdown extends React.PureComponent<SelectDropdownProps, State> {
  public static defaultProps = {
    createable: true,
    closeOnSelection: false,
    searchTerm: "",
    options: [],
    popperPlacement: "bottom-start",
  };
  public state: State = {
    focused: false,
    forceClose: false,
  };

  @autobind
  public handleClickOuter(...args) {
    this.setState({
      focused: false,
    });
    this.handleSearchChange("");
  }

  @autobind
  public handleMultiValueChange(selection: string | number) {
    let existingValues = this.props.value;
    if (!Array.isArray(existingValues)) {
      existingValues = [existingValues];
    }

    const existingValueIndex = existingValues.findIndex(
      (existingValue: string) => existingValue === selection
    );

    if (existingValueIndex !== -1) {
      return existingValues.filter(
        (existingValue: string) => existingValue !== selection
      );
    } else {
      return [...existingValues, selection];
    }
  }

  @autobind
  public handleOptionClick(
    option: SelectDropdownItem | string,
    selectActions: any
  ) {
    if (!this.props.closeOnSelection && selectActions.openMenu) {
      selectActions.openMenu();
    }
    if (typeof option === "string") {
      this.create({
        target: { value: option, name: this.props.name, id: this.props.id },
        currentTarget: {
          value: option,
          name: this.props.name,
          id: this.props.id,
        },
      } as any);

      return;
    }
    this.setState({
      forceClose: this.props.closeOnSelection,
    });

    let returnValue: any = option ? option.value : "";

    if (this.props.isMulti) {
      returnValue = this.handleMultiValueChange(returnValue);
    }
    safeInvoke(this.props.onChange, {
      target: { name: this.props.name, value: returnValue },
    });
  }

  @autobind
  public create(evt: React.SyntheticEvent<HTMLButtonElement>) {
    this.setState({
      forceClose: this.props.closeOnSelection,
    });
    safeInvoke(this.props.onCreate, evt);
  }

  @autobind
  public optionRenderer(
    item: SelectDropdownItem,
    index: number,
    getItemProps: any
  ) {
    const { selectedColor = "faint" } = this.props;
    const { highlightedIndex, ...restGetItemProps } = getItemProps; // Do not pass highlightedIndex down
    return (
      <ButtonMinimal
        width="100%"
        height="auto"
        minHeight="40px"
        borderRadius={0}
        paddingY={this.props.isMulti ? 0 : undefined}
        css={{
          ":hover,:focus": {
            backgroundColor: colors[selectedColor],
          },
        }}
        backgroundColor={
          getItemProps.highlightedIndex === getItemProps.index
            ? selectedColor
            : undefined
        }
        key={item.value}
        data-value={item.value}
        justifyContent="flex-start"
        disabled={item.disabled}
        data-testid="select-option"
        {...restGetItemProps}
      >
        {safeInvoke(this.props.optionRenderer, item) || (
          <Text>{item.label}</Text>
        )}
      </ButtonMinimal>
    );
  }

  @autobind
  public handleSearchChange(evt: any) {
    let value = "";
    if (evt && evt !== "") {
      value = evt.target.value;
    }
    this.setState({
      search: value,
    });
    safeInvoke(this.props.handleSearchChange, value, evt);
  }

  @autobind
  public renderSearch(getItemProps: any) {
    const { value, onMouseDown, disabled, ...props } = getItemProps;
    return (
      <View {...props} marginX={3} marginBottom={3}>
        <SearchInput
          id="search"
          name="search"
          placeholder={this.props.searchPlaceholder || "Search..."}
          onSubmit={this.props.handleSearchChange}
          onChange={this.handleSearchChange}
          onClear={this.handleSearchChange}
          value={this.state.search}
        />
      </View>
    );
  }

  @autobind
  public renderCreateOption(item: string, index: number, getItemProps: any) {
    const { selectedColor = "faint" } = this.props;
    return (
      <ButtonMinimal
        width="100%"
        height="auto"
        minHeight="40px"
        backgroundColor={
          getItemProps.highlightedIndex === getItemProps.index
            ? selectedColor
            : undefined
        }
        data-value={item}
        justifyContent="flex-start"
        {...getItemProps}
      >
        {this.props.renderCreateOption()}
      </ButtonMinimal>
    );
  }

  public itemToString(item: any) {
    return item;
  }

  public render() {
    const {
      options: rawOptions = [],
      children,
      handleSearchChange,
      searchTerm,
      renderCreateOption,
      isOpen: dropdownOpen,
      container,
      dropdownZindex,
      popperPlacement,
      createable,
      createableText,
      isMulti,
      selectedColor,
      optionRenderer,
      onChange,
      onCreate,
      error,
      closeOnSelection,
      showStatus,
      statusRenderer,
      ...remainingProps
    } = this.props;

    const options = this.state.search
      ? filter(rawOptions, this.state.search.toLowerCase())
      : rawOptions
          .map(item => {
            item.value = item.value.toString();
            return item;
          })
          .filter((thing, index, self) => {
            return index === self.findIndex(t => t.value === thing.value);
          });

    const createAvailable = renderCreateOption && searchTerm.trim() !== "";
    const firstSelectableOptionIndex =
      0 +
      (handleSearchChange ? 1 : 0) +
      (createAvailable ? 1 : 0) +
      (showStatus ? 1 : 0);
    return (
      <Downshift
        isOpen={
          dropdownOpen !== undefined
            ? dropdownOpen &&
              !!(options.length || createAvailable || showStatus)
            : undefined
        }
        defaultHighlightedIndex={0}
        itemToString={this.itemToString}
        onOuterClick={this.handleClickOuter}
        onSelect={this.handleOptionClick}
        data-testid="select-dropdown"
      >
        {({
          getItemProps,
          getMenuProps,
          getRootProps,
          getLabelProps,
          isOpen,
          highlightedIndex,
          selectedItem,
          ...downshiftParams
        }) => (
          <View {...remainingProps} {...getRootProps({ refKey: "innerRef" })}>
            <Manager>
              <Reference>
                {({ ref }) =>
                  children({
                    ref,
                    "data-testid": "select-dropdown-trigger",
                    ...downshiftParams,
                  })
                }
              </Reference>
              {isOpen &&
                (firstSelectableOptionIndex > 0 || options.length > 0) && (
                  <Portal>
                    <Popper placement={popperPlacement}>
                      {({ ref, style, scheduleUpdate }) => (
                        <View
                          {...getMenuProps({
                            refKey: "innerRef",
                          })}
                          overflow="hidden"
                        >
                          <Options
                            renderSearch={this.renderSearch}
                            handleSearchChange={handleSearchChange}
                            searchTerm={searchTerm}
                            renderCreateOption={this.renderCreateOption}
                            container={container}
                            createAvailable={createAvailable}
                            style={style}
                            innerRef={ref}
                            dropdownZindex={dropdownZindex}
                            optionRenderer={this.optionRenderer}
                            showStatus={showStatus}
                            statusRenderer={statusRenderer}
                            options={options}
                            highlightedIndex={highlightedIndex}
                            firstSelectableOptionIndex={
                              firstSelectableOptionIndex
                            }
                            scheduleUpdate={scheduleUpdate}
                            getItemProps={getItemProps}
                          />
                        </View>
                      )}
                    </Popper>
                  </Portal>
                )}
            </Manager>
          </View>
        )}
      </Downshift>
    );
  }
}

export default SelectDropdown;
