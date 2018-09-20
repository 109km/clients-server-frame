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
  app.get('/signup', controller.user.signup);
  app.post('/user/signup', controller.user.doSignup);
  // 登录
  app.get('/signin', controller.user.signin);
  app.post('/user/signin', controller.user.doSignin);
  // 新增用户
  app.post('/user/create', controller.user.create);
  // 登出
  app.get('/signout', controller.user.signout);
  // 上传
  app.post('/upload', controller.uploadFile.upload);

  app.post('/dream/create', controller.dream.create);
  app.post('/dream/detail', controller.dream.detail);

  app.resources('users', '/api/users', controller.user);
};