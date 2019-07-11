const path = require('path');

module.exports = ({ config }) => {
  config.node= {
    fs: "empty"
  };
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    include: path.resolve(__dirname, "../src"),
    exclude: /node_modules/,
    use: [ {
      loader: 'babel-loader',
      options: {
        cacheDirectory: true,
      }
    },{
      loader: require.resolve('ts-loader'),
      options:{
        transpileOnly:true
      }
    }
     ]
  });
  config.resolve.extensions.push('.ts', '.tsx');

  config.devtool = false;

  return config;
};
