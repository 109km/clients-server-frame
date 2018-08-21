'use strict';

module.exports = app => {

  const {
    controller
  } = app;

  app.get('/', controller.home.index);
  
  app.get('/api/fake_chart_data', controller.api.fake_chart_data);
  app.get('/api/currentUser', controller.api.currentUser);
  app.get('/api/tags', controller.api.tags);

  // 注册
  app.get('/user/signup',controller.user.signup);
  // 登录
  app.get('/user/signin', controller.user.signin);
  // 新增用户
  app.post('/user/create', controller.user.create);

  app.resources('users', '/api/users', controller.user);
};