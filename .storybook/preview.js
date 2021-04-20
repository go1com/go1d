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
  // this layout somehow creates an problem which makes child scale down which means it no longer displays as 100% width
  // layout: 'centered',
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
        { value: colors.accent, right: '🟢', left: '🥇', title: 'Athletic Go1d accent' },
        { value: '#409cb2', right: '🟢', left: '🌱', title: "CityFibre" },
        { value: '#0d47a1', right: '🔵', left: '🎓', title: 'Hays' },
        { value: '#ffca28', right: '🟡', left: '☀️', title: 'Suncorp' },
        { value: '#faa519', right: '🟠', left: '💸', title: 'Bentleys' },
        { value: '#f44336', right: '🔴', left: '💰', title: "Westpac" },
        { value: '#e53935', right: '🔴', left: '🍙', title: "Roll'd" },
        { value: '#d32f2f', right: '🔴', left: '🐝', title: 'Busy Bees' },
        { value: '#e91e63', right: '💖', left: '🛍', title: 'CAMILLA' },
        { value: '#9c27b0', right: '🟣', left: '💳', title: '🕴🏿' },
        { value: '#ff1493', right: '💖', left: '🎨', title: 'Example customer accent deeppink' },
        { value: '#31B8DA', right: '🔵', left: '🎨', title: 'Original Go1d accent' },
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
