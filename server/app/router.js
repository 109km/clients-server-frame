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
  // 用户详情
  app.post('/user/detail', controller.user.detail);

  // 登出
  app.get('/signout', controller.user.signout);
  // 上传
  app.post('/upload', controller.uploadFile.upload);

  // 项目
  app.post('/dream/create', controller.dream.create);
  app.post('/dream/detail', controller.dream.detail);
  app.post('/dream/list', controller.dream.list);
  app.post('/dream/addGoals', controller.dream.addGoals);
  app.post('/dream/addTiers', controller.dream.addTiers);

  // 文章
  app.post('/post/create', controller.post.create);
  app.post('/post/detail', controller.post.detail);

  // 评论
  app.post('/comment/create', controller.comment.create);

  // 粉丝
  app.post('/follower/add', controller.follower.add);
  app.post('/follower/find', controller.follower.find);
  app.post('/follower/remove', controller.follower.remove);

  app.resources('users', '/api/users', controller.user);
};