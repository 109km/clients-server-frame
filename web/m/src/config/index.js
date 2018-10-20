import defaultConfig from './config.default';
import prodConfig from './config.prod';

let config;
if (window.location.host.indexOf('127.0.0.1') >= 0 || window.location.host.indexOf('localhost') >= 0) {
  config = defaultConfig;
} else {
  config = prodConfig;
}
export default config;