import React from "react";
import { DocsPage } from '@storybook/addon-docs/blocks';
import 'happo-plugin-storybook/register';

import { Provider } from "../src";
import { colors } from "../src/foundations";
import { generateTheme } from "../src/foundations";
import { StoryContext, StoryGetter, StoryWrapper } from '@storybook/addons';

import { globalCSS } from "../src";
globalCSS();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewMode: 'docs',
  backgrounds: {
    default: 'White',
    values: [
      {
        name: 'White',
        value: '#ffffff',
      },
      {
        name: 'N100',
        value: '#F7F8F8',
      },
      {
        name: 'N900',
        value: '#22292A',
      },
    ],
  },
  layout: 'centered',
  docs: { page: DocsPage },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Overview', 'Athletic', ['Foundations'], 'Original Go1d'],
    },
  },
  previewTabs: {
    'storybook/docs/panel': { index: -1 }
  },
}

export const globalTypes = {
  accent: {
    name: 'Accent',
    description: 'Accent brand color',
    defaultValue: colors.accent,
    toolbar: {
      icon: 'contrast',
      items: [
          { value: colors.accent, right: '🥇', title: 'Athletic Go1d accent' },
          { value: '#31B8DA', right: '🎨', title: 'Original Go1d accent' },
          { value: '#ff1493', right: '🎨', title: 'Example customer accent deeppink' },
      ],
    },
  },
  mode: {
    name: 'Mode',
    description: 'Light or dark mode',
    defaultValue: 'light',
    toolbar: {
      icon: 'lightningoff',
      items: [
          { value: 'light', right: 'b', title: 'Light' },
          { value: 'dark', right: 'a', title: 'Dark' },
      ],
    },
  },
};

const withThemeProvider=(Story,context)=>{
  const theme = generateTheme({accent: context.globals.accent, mode: context.globals.mode});
  return (
    <Provider theme={theme}>
      <Story {...context} />
    </Provider>
  )
}
export const decorators = [withThemeProvider];
