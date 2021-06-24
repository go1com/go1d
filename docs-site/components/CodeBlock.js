import React from 'react';
import { Editor } from 'react-live';

const CodeBlock = (props) => {
  const language = (props.language || 'js').toLowerCase().trim();

  return <Editor {...props} disabled language={language} />;
};

export default CodeBlock;
