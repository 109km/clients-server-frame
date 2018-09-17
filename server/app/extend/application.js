const http = require('http');
const qs = require('querystring');

module.exports = {
  api: {
    get(options = {}) {
      options.port = options.port || 80;
      options.data = qs.stringify(options.data);
      http.request(options, res => {

      });
    },
    post(options = {}) {
      options.port = options.port || 80;
      options.data = qs.stringify(options.data);
      options.headers = options.headers || {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
      const req = http.request(options, res => {

      });

    }
  }
}