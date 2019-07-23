import * as React from "react";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";
import TagToggle, { TagToggleProps } from "../TagToggle";
import View, { ViewProps } from "../View";

export interface TagTogggleGroupProps extends ViewProps {
  options: TagToggleProps[];
  value?: string[];
}

interface State {
  value: string[];
}

class TagTogggleGroup extends React.PureComponent<TagTogggleGroupProps, State> {
  public static defaultProps = {
    options: [],
  };

  constructor(props: TagTogggleGroupProps) {
    super(props);
    this.state = {
      value: props.value || [],
    };
  }

  @autobind
  public onChange(evt: any) {
    const { value = this.state.value, onChange, name } = this.props;
    const checked = evt.target.checked;
    let newValue = [...value];
    if (checked) {
      newValue = newValue.filter(v => v !== evt.target.name);
    } else {
      newValue.push(evt.target.name);
    }

    this.setState({ value: newValue });
    safeInvoke(onChange, { target: { name, value: newValue } });
  }

  @autobind
  public renderTagToggle(option: TagToggleProps, index: number) {
    const { onChange, checked, onBlur, ...props } = option;
    const { value = this.state.value, disabled } = this.props;

    const change = evt => {
      this.onChange(evt);
      safeInvoke(onChange, evt);
    };

    const blur = evt => {
      safeInvoke(onBlur, evt);
      safeInvoke(this.props.onBlur, { target: { name: this.props.name } });
    };

    return (
      <TagToggle
        key={index}
        marginBottom={3}
        marginRight={3}
        {...props}
        onBlur={blur}
        onChange={change}
        value={value.includes(props.name)}
        disabled={disabled}
      />
    );
  }

  public render() {
    const { options, onChange, name, ...props } = this.props;

    return (
      <View
        marginBottom={-3}
        marginRight={-3}
        flexDirection="row"
        flexWrap="wrap"
        {...props}
      >
        {options.map(this.renderTagToggle)}
      </View>
    );
  }
}

export default TagTogggleGroup;
