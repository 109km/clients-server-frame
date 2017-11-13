'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1510107722425_684';

  // add your config here
  config.middleware = [];
  
  config.cors = {
    origin: 'http://localhost:8000',
    credentials: true,
    allowHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  return config;
};
