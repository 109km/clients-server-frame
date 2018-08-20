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

exports.graphql = {
  enable: true,
  package: 'egg-graphql',
};

exports.sequelize = {
  enable: true,
  package: 'egg-sequelize',
};

exports.validate = {
  package: 'egg-validate',
};