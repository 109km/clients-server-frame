'use strict';
const path = require('path');

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1510107722425_684';

  // add your config here
  config.middleware = [
    'graphql',
    'snakecase'
  ];

  config.cors = {
    origin: 'http://localhost:3000',
    credentials: true,
    allowHeaders: 'Origin, X-Requested-With, Content-Type, Accept, X-Api-Key',
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
    database: 'dreams_db',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: 's09070825!',
    freezeTableName: true,
    operatorsAliases: false
  };

  config.proxyworker = {
    port: 10086,
  }

  config.security = {
    csrf: {
      ignore: () => true,
    }
  }

  config.view = {
    defaultViewEngine: 'nunjucks',
    defaultExtension: '.nj',
    mapping: {
      '.nj': 'nunjucks',
    },
  };

  config.wxapp = {
    appId: 'wxa15630506d3a70e4',
    appSecret: '5ca5005ddb0ba4b92d650a640b69f22b',

    // mongodb 连接配置，生产环境请使用更复杂的用户名密码
    mongoHost: '127.0.0.1',
    mongoPort: '27017',
    mongoUser: 'weapp',
    mongoPass: 'weapp-dev',
    mongoDb: 'weapp'
  };

  config.redis = {
    client: {
      host: '127.0.0.1',
      port: '6379',
      password: 'root',
      db: '0'
    }
  };

  config.baseDir = './';

  config.UPLOAD_PATH = path.join(config.baseDir, 'app/public/uploads');

  return config;
};