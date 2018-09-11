const uuidv1 = require('uuid/v1');
const crypto = require('crypto');
const cmd5 = crypto.createHash('md5');
const cryptoKey = 'Hello,world!';

module.exports = {
  uuidv1,
  dayFormat: '%Y-%m-%d',
  dayTimeFormat: '%Y-%m-%d %H:%i:%s',
  encrypt(str) {
    const s = str + '_' + cryptoKey;
    return cmd5.update(s).digest('hex');
  },
  md5(s){
    return cmd5.update(s).digest('hex');
  }
}