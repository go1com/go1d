module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.story.@(js|jsx|ts|tsx)"
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      savePropValueAsString: false,
      propFilter: (prop, component) => {
        if (prop.parent) {
          const re = new RegExp(`src/components/${component.name}/`);
          const isOwnProp = re.test(prop.parent.fileName);

          return isOwnProp || !/(node_modules|src\/components)/.test(prop.parent.fileName);
        }

        return true;
      },
    },
  },
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
      use: [
        {
          loader: 'ts-loader',
          options: {
            // we don't need a declaration here
            transpileOnly: true,
          }
        }
      ],
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  }
}
