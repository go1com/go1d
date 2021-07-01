import React from 'react';
import { Editor } from 'react-live';
import prismTheme from "prism-react-renderer/themes/ultramin"
import Theme from "@go1d/go1d/build/components/Theme";
import View from "@go1d/go1d/build/components/View";
import { ThemeType, Colors } from '@go1d/go1d/build/foundations/foundation-types';

const codeBlockStyle = (type: ThemeType, colors: Colors) => ({
  backgroundColor: colors.soft,
  border: `1px solid ${colors.delicate}`,
  fontFamily: type.family.mono,
});

const CodeBlock = (props: any) => {
  const language = (props.language || 'js').toLowerCase().trim();

  return (
    <View
      marginY={3}
    >
      <Theme.Consumer>
        {({ type, colors }) => (
          <Editor {...props} theme={prismTheme} style={codeBlockStyle(type, colors)} disabled language={language} />
        )}
      </Theme.Consumer>
    </View>
  );
};

export default CodeBlock;
