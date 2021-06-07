const { addLessLoader, override, fixBabelImports } = require('customize-cra');

module.exports = {
  webpack: override(
    fixBabelImports('import', {
      libraryDirectory: 'es',
      libraryName: 'antd',
      style: true,
    }),
    addLessLoader({
      lessOptions: {
        modifyVars: {
          '@primary-color': '#64b5f6',
        },
        javascriptEnabled: true,
        cssModules: {
          localIdentName: '[local]_[hash:base64:5]',
        },
      },
    }),
  )
};
