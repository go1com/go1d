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
  children: ((params: any) => JSX.Element);
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
    const { children, fileType, name, ...props } = this.props;

    return (
      <Dropzone {...props} accept={fileType} onDrop={this.onDrop}>
        {({ getInputProps, ...dropzoneProps }) => (
          <React.Fragment>
            {children({ ...dropzoneProps, name })}
            <input {...getInputProps()} name={name} />
          </React.Fragment>
        )}
      </Dropzone>
    );
  }
}

export default BaseUpload;
