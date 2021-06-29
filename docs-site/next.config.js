const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
})
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withPlugins(
  [
    [withMDX, {
      pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
    }],
    [withBundleAnalyzer, {}],
  ],
  {
    // global nextConfiguration
  },
);

