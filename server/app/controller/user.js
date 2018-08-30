'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  // GET ， 展示页面
  async signup(ctx) {
    await ctx.render('signup', ctx);
  }
  // GET ， 展示页面
  async signin(ctx) {
    await ctx.render('signin', ctx);
  }
  // POST 用户注册
  async doSignup(ctx) {
    const userData = {
      username: ctx.request.body.username,
      password: ctx.request.body.password,
      're-password': ctx.request.body['re-password']
    }
    const res = await ctx.service.user.create(userData);

    if (res.code === 0) {
      ctx.redirect('/');
    } else {
      ctx.body = res.message;
    }

  }
  // POST 用户登录
  async doSignin(ctx) {

    const userData = {
      username: ctx.request.body.username,
      password: ctx.request.body.password
    }
    const sessionid = ctx.helper.uuidv1();
    const res = await ctx.service.user.findOne(userData);

    if (res.code === 0) {
     
      ctx.session.user = res.data.user;
      await app.redis.setex(sessionid, 3600 * 24, res.data.user);
      ctx.redirect('/');
    } else {
      ctx.body = {
        code: 10000,
        message: '用户不存在',
      };
    }

  }

  // GET 登出
  async signout(ctx) {

  }

  // 新增用户接口
  async create(ctx) {
    const userData = {
      username: ctx.request.body.username,
      password: ctx.request.body.password
    }
    const res = await ctx.service.user.create(userData);
    ctx.body = res;
  }
}

module.exports = UserController;