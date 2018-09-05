const uuidv1 = require('uuid/v1');
const crypto = require('crypto');
const md5 = crypto.createHash('md5');
const cryptoKey = 'Hello,world!';

module.exports = {
  uuidv1,
  dayFormat: '%Y-%m-%d',
  dayTimeFormat: '%Y-%m-%d %H:%i:%s',
  encrypt(password) {
    const s = password + '_' + cryptoKey;
    return md5.update(s).digest('hex');
  }
}