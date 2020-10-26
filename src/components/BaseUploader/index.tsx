import * as React from "react";
import * as DropzoneClass from "react-dropzone";
import IDropzone, { DropzoneProps } from "react-dropzone";
import { autobind } from "../../utils/decorators";
import safeInvoke from "../../utils/safeInvoke";

export interface BaseUploadProps extends DropzoneProps {
  onChange?: (files: File[]) => void;
  value?: File | string;
  name?: string;
  fileType?: string;
  multiple?: boolean;
  onBlur?: (evt: any) => void;
  disabled?: boolean;
  children: (params: any) => JSX.Element;
}

// the issue here is to wrongly import `react-dropzone` which ended up doesn't work on Node
// we can't import like: `import Dropzone from "react-dropzone"` unless we enable `esModuleInterop`
// Here is explanation: https://dev.to/tmhao2005/webpack-compiles-nodemodules-106m
const Dropzone: typeof IDropzone = (DropzoneClass.default ||
  DropzoneClass) as any;

class BaseUpload extends React.Component<BaseUploadProps, any> {
  @autobind
  public onDrop(files: File[]) {
    const { onChange } = this.props;

    if (files.length > 0) {
      safeInvoke(onChange, files);
    }
  }

  public render() {
    const {
      children,
      fileType,
      multiple = true,
      onBlur,
      disabled = false,
      value,
      name,
      ...props
    } = this.props;

    return (
      <Dropzone
        accept={fileType}
        onDrop={this.onDrop}
        disabled={disabled}
        multiple={multiple}
        {...props}
      >
        {({ getInputProps, ...dropzoneProps }) => (
          <React.Fragment>
            {children(dropzoneProps)}
            <input {...getInputProps()} disabled={disabled} name={name} />
          </React.Fragment>
        )}
      </Dropzone>
    );
  }
}

export default BaseUpload;
