'use strict';

// had enabled by egg
// exports.static = true;
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.security = {
  domainWhiteList: [ 'http://localhost:8000' ],
};

