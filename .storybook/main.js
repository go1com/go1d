module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.story.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
      }
    },
    "@storybook/addon-a11y"
  ],
  "webpackFinal": async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [{
        loader: require.resolve('ts-loader'),
      },],
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  }
}
