'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1510107722425_684';

  // add your config here
  config.middleware = [
    'graphql'
  ];

  config.cors = {
    origin: 'http://localhost:8000',
    credentials: true,
    allowHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };

  config.graphql = {
    router: '/graphql',
    // 是否加载到 app 上，默认开启
    app: true,
    // 是否加载到 agent 上，默认关闭
    agent: false,
    // 是否加载开发者工具 graphiql, 默认开启。路由同 router 字段。使用浏览器打开该可见。
    graphiql: true,
    // graphQL 路由前的拦截器
    onPreGraphQL: function*(ctx) {},
    // 开发工具 graphiQL 路由前的拦截器，建议用于做权限操作(如只提供开发者使用)
    onPreGraphiQL: function*(ctx) {},
  };

  config.sequelize = {
    dialect: 'mysql',
    database: 'graphql',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 'root',
  };

  config.proxyworker = {
    port: 10086,
  }

  config.security = {
    csrf: {
      ignore: () => true,
    }
  }
  return config;
};