const { RemoteBrowserTarget } = require('happo.io');
const happoPluginTypescript = require('happo-plugin-typescript');
const happoPluginStorybook = require('happo-plugin-storybook');
const path = require('path');


module.exports = {
  // It's good practice to never store API tokens directly in the config file.
  // Here, we're using environment variables.
  apiKey: process.env.HAPPO_API_KEY,
  apiSecret: process.env.HAPPO_API_SECRET,
  plugins: [
    happoPluginTypescript(),
    happoPluginStorybook(),
  ],
  stylesheets: [path.resolve(__dirname,'.storybook')+'/happo.css'],
  include: '**/*.story.js',
  targets: {
    'chrome-desktop': new RemoteBrowserTarget('chrome', {
      viewport: '1024x768',
    }),
    'chrome-mobile': new RemoteBrowserTarget('chrome', {
      viewport: '320x640',
    }),
    'edge-desktop': new RemoteBrowserTarget('edge', {
      viewport: '1024x768',
    }),
    'firefox-desktop': new RemoteBrowserTarget('firefox', {
      viewport: '1024x768',
    }),
    'safari': new RemoteBrowserTarget('safari', {
      viewport: '1024x768',
    }),
    'safari-mobile': new RemoteBrowserTarget('ios-safari', {
      viewport: '320x640',
    }),
  },
};
