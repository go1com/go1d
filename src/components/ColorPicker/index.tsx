import * as React from "react";
import { HexColorPicker } from "react-colorful";
import { ColorPickerBaseProps } from "react-colorful/dist/types";
import safeInvoke from "../../utils/safeInvoke";
import Dropdown, { DropdownProps } from "../Dropdown";
import TextInput, { TextInputProps } from "../TextInput";
import View, { ViewProps } from "../View";

const hex3 = /^#?[0-9A-F]{3}$/i;
const hex6 = /^#?[0-9A-F]{6}$/i;

export const validHex = (color: string): boolean =>
  hex6.test(color) || hex3.test(color);

export interface Props extends ColorPickerBaseProps<string> {
  color: string;
  onChange: ColorPickerBaseProps<string>["onChange"];
  // in case of keen to customize more
  placement?: DropdownProps["placement"];
  inputProps?: TextInputProps;
  wrapperProps?: ViewProps;
}

// Just a placeholder
const items = [{}];

const ColorPicker: React.FunctionComponent<Props> = ({
  color: initColor,
  onChange,
  placement = "top",
  inputProps,
  wrapperProps,
  ...rest
}) => {
  const inputRef = React.useRef<HTMLInputElement>();
  const [isOpen, setOpen] = React.useState(false);
  const [color, setColor] = React.useState(initColor);
  const [lastValidColor, setLastValidColor] = React.useState(initColor);

  React.useEffect(() => {
    const input = inputRef.current;
    if (input) {
      input.addEventListener("paste", handleInputPaste);
    }

    return () => {
      const textInput = inputRef.current;
      if (textInput) {
        textInput.removeEventListener("paste", handleInputPaste);
      }
    };
  }, []);

  function handleInputPaste(event: ClipboardEvent) {
    let paste = event.clipboardData.getData("text");
    paste = paste.toLowerCase();

    const input = inputRef.current;
    if (validHex(paste)) {
      paste = paste.replace(/^(?!#)(.+)$/, "#$1");

      input.value = paste;
      safeInvoke(onChange, paste);
    } else {
      return false;
    }

    event.preventDefault();
  }

  function handleStateChange(changes: any) {
    if (changes.isOpen) {
      setOpen(changes.isOpen);
    }
  }

  function handleChange(value: string) {
    setColor(value);

    safeInvoke(onChange, value);
  }

  function handleInputChange(event: React.ChangeEvent<any>) {
    const { value } = event.target;

    if (value.length <= 7) {
      setColor(value);
    }
  }

  function handleOuterClick() {
    setOpen(false);
  }

  function handleBlur(event: React.ChangeEvent<any>) {
    const { value } = event.target;

    if (value && validHex(value)) {
      setColor(value);
      setLastValidColor(value);

      safeInvoke(onChange, value);
    } else {
      setColor(lastValidColor);
    }
  }

  const itemToString: DropdownProps["itemToString"] = item =>
    item ? item.name : "";
  const renderFunction: DropdownProps["renderFunction"] = (
    item,
    index,
    getItemProps
  ) => (
    <div
      key={index}
      {...getItemProps({
        key: index,
        item,
        index,
      })}
    >
      <HexColorPicker color={color} {...rest} onChange={handleChange} />
    </div>
  );

  const prefixIcon = () => (
    <View
      width={24}
      height={24}
      borderRadius={1}
      borderColor="delicate"
      border={1}
      css={{ backgroundColor: color, borderColor: color }}
    />
  );

  return (
    <Dropdown
      isOpen={isOpen}
      placement={placement}
      paddingY={0}
      itemToString={itemToString}
      onStateChange={handleStateChange}
      onOuterClick={handleOuterClick}
      renderFunction={renderFunction}
      itemList={items}
    >
      {({ ref, getToggleButtonProps }) => (
        <View
          {...getToggleButtonProps()}
          innerRef={ref}
          disabled={false}
          width={200}
          {...wrapperProps}
        >
          <TextInput
            innerRef={inputRef}
            id="input-color"
            data-testid="input-color"
            size="lg"
            label="Color"
            placeholder="#114954"
            fontSize={1}
            floating={true}
            value={color}
            onChange={handleInputChange}
            onBlur={handleBlur}
            icon={prefixIcon}
            {...inputProps}
          />
        </View>
      )}
    </Dropdown>
  );
};

ColorPicker.displayName = "ColorPicker";

export default ColorPicker;
