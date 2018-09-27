const {
  injectBabelPlugin
} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const theme = require('./src/theme');

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {
    libraryName: 'antd-mobile',
    libraryDirectory: 'es',
    style: true
  }], config);
  config = rewireLess.withLoaderOptions({
    modifyVars: theme,
    javascriptEnabled: true
  })(config, env);

  return config;
};