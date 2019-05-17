import * as React from "react";
import Dropzone, { DropzoneProps } from "react-dropzone";
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
      multiple,
      onBlur,
      disabled = false,
      value,
      name,
      ...props
    } = this.props;

    return (
      <Dropzone accept={fileType} onDrop={this.onDrop} {...props}>
        {({ getInputProps, ...dropzoneProps }) => (
          <React.Fragment>
            {children(dropzoneProps)}
            <input {...getInputProps()} name={name} />
          </React.Fragment>
        )}
      </Dropzone>
    );
  }
}

export default BaseUpload;
