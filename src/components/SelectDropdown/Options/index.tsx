import { GetItemPropsOptions } from "downshift";
import * as elementResizeDetectorMaker from "element-resize-detector";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { SelectDropdownItemProps } from "..";
import { ZIndex } from "../../../foundations/foundation-types";
import { autobind } from "../../../utils/decorators";
import safeInvoke from "../../../utils/safeInvoke";
import View from "../../View";

interface OptionProps {
  options: any[];
  innerRef: any;
  searchTerm: string;
  getItemProps: (options: GetItemPropsOptions<any>) => any;
  firstSelectableOptionIndex: number;
  highlightedIndex: number;
  container: React.RefObject<any>;
  dropdownZindex: ZIndex | number | "";
  style: React.CSSProperties;
  createAvailable: boolean;
  renderCreateOption: any;
  handleSearchChange: any;
  renderSearch: any;
  optionRenderer: (
    item: SelectDropdownItemProps,
    index: number,
    getItemProps: any
  ) => React.ReactNode;
  /**
   * Whether showing status message defined by the statusRenderer. Defaults to false
   */
  showStatus?: boolean;

  /**
   * Used to render status like loading or not found
   */
  statusRenderer: () => React.ReactNode;
  scheduleUpdate: () => void;
}
class Options extends React.PureComponent<OptionProps, {}> {
  public static defaultProps = {
    dropdownZindex: "dropdown",
  };

  public parentNode: any;
  public elementResizeDetector: any;

  public componentDidMount() {
    this.parentNode = ReactDOM.findDOMNode(this) as any;
    this.elementResizeDetector = elementResizeDetectorMaker({
      callOnAdd: false,
    });
    this.elementResizeDetector.listenTo(this.parentNode, this.onResize);
  }

  @autobind
  public onResize() {
    safeInvoke(this.props.scheduleUpdate);
  }

  public componentWillUnmount() {
    this.elementResizeDetector.uninstall(this.parentNode);
  }

  public render() {
    const {
      options,
      optionRenderer,
      showStatus,
      statusRenderer,
      highlightedIndex,
      firstSelectableOptionIndex,
      getItemProps,
      dropdownZindex,
      innerRef,
      style,
      container,
      createAvailable,
      renderCreateOption,
      searchTerm,
      handleSearchChange,
      renderSearch,
    } = this.props;

    return (
      <View
        backgroundColor="background"
        boxShadow="strong"
        borderRadius={3}
        border={1}
        borderColor="delicate"
        maxHeight={350}
        innerRef={innerRef}
        transition="none"
        width={100}
        paddingY={3}
        marginTop={3}
        zIndex={dropdownZindex}
        style={{
          ...style,
          width:
            container && container.current
              ? container.current.offsetWidth
              : "auto",
          overflowY: "auto",
        }}
      >
        <React.Fragment>
          {showStatus && statusRenderer && statusRenderer()}
          {createAvailable &&
            renderCreateOption(searchTerm.trim() || "create", 0, {
              ...getItemProps({
                key: "create",
                index: 0,
                item: searchTerm.trim() || "create",
              }),
              highlightedIndex,
              index: 0,
            })}
          {handleSearchChange &&
            renderSearch({
              ...getItemProps({
                key: "search",
                index: createAvailable ? 1 : 0,
                item: searchTerm || "search",
                disabled: true,
              }),
            })}
          {options.map((item: any, index: number) =>
            optionRenderer(item, index, {
              ...getItemProps({
                key: index + firstSelectableOptionIndex,
                item,
                index: firstSelectableOptionIndex + index,
              }),
              highlightedIndex,
              index: firstSelectableOptionIndex + index,
            })
          )}
        </React.Fragment>
      </View>
    );
  }
}

export default Options;
