const crypto = require('crypto');
const md5 = crypto.createHash('md5');
const cryptoKey = 'Hello,world!';

module.exports = {
  encrypt(password){
    const s = password + '_' + cryptoKey;
    return md5.update(s).digest('hex');
  }
}