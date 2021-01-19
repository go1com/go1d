import { DocsPage } from '@storybook/addon-docs/blocks';

import { globalCSS } from "../src";
globalCSS();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'story',
  layout: 'centered',
  docs: { page: DocsPage },
  previewTabs: {
    'storybook/docs/canvas': { index: -1 }
  },
}
