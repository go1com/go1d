import React, { useEffect, useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import prismTheme from "prism-react-renderer/themes/nightOwlLight"

import * as Go1dComponents from '@go1d/go1d'

import Column from "@go1d/go1d/build/components/Column";
import Text from "@go1d/go1d/build/components/Text";
import Theme from "@go1d/go1d/build/components/Theme";
import View from "@go1d/go1d/build/components/View";

import { ThemeType, Colors } from "../../src/foundations/foundation-types";

const liveEditorStyle = (type : ThemeType, colors: Colors) => ({
  backgroundColor: colors.soft,
  border: `1px solid ${colors.delicate}`,
  fontFamily: type.family.mono,
  borderTopWidth: 0,
});

const LiveEdit = ({ noInline, code, scope = {} }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <Theme.Consumer>
      {({ type, colors }) => (
        <LiveProvider
          code={code}
          noInline={noInline}
          mountStylesheet={false}
          scope={{ ...scope, ...Go1dComponents}}
          theme={prismTheme}
        >
          <Column>
            <View
              backgroundColor="background"
              border={1}
              borderColor="delicate"
              marginTop={5}
              padding={5}
              whiteSpace="pre-line"
            >
              {/* react-live uses Bublé so the generated classnames aren't stable and a remount is needed after SSR */}
              <LivePreview key={mounted ? 'preview-client' : 'preview-ssr'} />
            </View>
            <Text element="div" lineHeight="paragraph">
              <LiveEditor style={liveEditorStyle(type, colors)} />
            </Text>
            <View paddingBottom={3}>
              <Text element="div" color="warningLow" lineHeight="paragraph">
                <LiveError />
              </Text>
            </View>
          </Column>

        </LiveProvider>
      )}
    </Theme.Consumer>
  );
};

export default LiveEdit;
