'use strict';

module.exports = app => {

  const {
    controller
  } = app;

  app.get('/', controller.home.index);


  app.get('/api/fake_chart_data', controller.api.fake_chart_data);
  app.get('/api/currentUser', controller.api.currentUser);
  app.get('/api/tags', controller.api.tags);

  // 首页feeds列表
  app.post('/home/feeds', controller.home.feeds);
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
  // 更新用户信息
  app.post('/user/update', controller.user.update);
  // 登出
  app.get('/signout', controller.user.signout);
  // 上传
  app.post('/upload/multiple', controller.uploadFile.upload);
  app.post('/upload/single', controller.uploadFile.single);
  // 项目
  app.post('/dream/create', controller.dream.create);
  app.post('/dream/update', controller.dream.update);
  app.post('/dream/detail', controller.dream.detail);
  app.post('/dream/list', controller.dream.list);
  app.post('/dream/updateGoals', controller.dream.updateGoals);
  app.post('/dream/updateTiers', controller.dream.updateTiers);

  // 文章
  app.post('/post/create', controller.post.create);
  app.post('/post/detail', controller.post.detail);

  // 评论
  app.post('/comment/create', controller.comment.create);

  // 粉丝
  app.post('/follower/add', controller.follower.add);
  app.post('/follower/find', controller.follower.find);
  app.post('/follower/remove', controller.follower.remove);

  // 探索
  app.post('/explore/feeds', controller.explore.feeds);
  app.post('/explore/search', controller.explore.search);

  app.resources('users', '/api/users', controller.user);
};