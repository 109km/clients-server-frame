const uuidv1 = require('uuid/v1');
const crypto = require('crypto');
const _ = require('lodash');
// const cmd5 = crypto.createHash('md5');
const cryptoKey = 'Hello,world!';

module.exports = {
  uuidv1,
  dayFormat: '%Y-%m-%d',
  dayTimeFormat: '%Y-%m-%d %H:%i:%s',
  encrypt(str) {
    const cmd5 = crypto.createHash('md5');
    const s = str + '_' + cryptoKey;
    return cmd5.update(s).digest('hex');
  },
  md5(s) {
    const cmd5 = crypto.createHash('md5');
    return cmd5.update(s).digest('hex');
  },
  toSnakeCase(o) {
    return _.mapKeys(o, (value, key) => {
      return _.snakeCase(key);
    });
  },
  toCamelCase(o) {
    return _.mapKeys(o, (value, key) => {
      return _.camelCase(key);
    });
  }
}