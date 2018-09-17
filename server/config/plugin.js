'use strict';

// had enabled by egg
// exports.static = true;
exports.cors = {
  enable: true,
  package: 'egg-cors',
};

exports.security = {
  domainWhiteList: ['http://localhost:3000'],
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

exports.nunjucks = {
  enable: true,
  package: 'egg-view-nunjucks',
};

exports.redis = {
  enable: true,
  package: 'egg-redis',
};

exports.sessionRedis = {
  enable: true,
  package: 'egg-session-redis',
};