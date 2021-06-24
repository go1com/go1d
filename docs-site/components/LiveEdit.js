import React, { useEffect, useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as Go1dComponents from '@go1d/go1d'

import Column from "@go1d/go1d/build/components/Column";
import Text from "@go1d/go1d/build/components/Text";

const LiveEdit = ({ noInline, code, scope = {} }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <LiveProvider
      code={code}
      noInline={noInline}
      mountStylesheet={false}
      scope={{ ...scope, ...Go1dComponents}}
    >
      <Column>
        {/* react-live uses Bublé so the generated classnames aren't stable and a remount is needed after SSR */}
        <LivePreview className="notranslate" key={mounted ? 'preview-client' : 'preview-ssr'} />

        <Text
          color="noteLow"
          element="code"
          fontSize={2}
          fontWeight="normal"
          fontFamily="mono"
          lineHeight="paragraph"
        >
          <LiveEditor />
        </Text>
      </Column>
      <LiveError />
    </LiveProvider>
  );
};

export default LiveEdit;
