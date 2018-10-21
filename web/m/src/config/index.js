import defaultConfig from './config.default';
import prodConfig from './config.prod';
import devConfig from './config.dev';

let config;
if (window.location.host.indexOf('127.0.0.1') >= 0 || window.location.host.indexOf('localhost') >= 0) {
  config = Object.assign({}, defaultConfig, devConfig);
} else {
  config = Object.assign({}, defaultConfig, prodConfig);
}
export default config;