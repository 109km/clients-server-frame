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
      ctx.redirect('/signin');
    } else {
      ctx.body = res.message;
    }

  }
  // POST 用户登录
  async doSignin(ctx) {
    let maxAge = 3600 * 24;
    const userData = {
      username: ctx.request.body.username,
      password: ctx.request.body.password
    }
    const res = await ctx.service.user.findOne(userData, true);
    const sessionId = ctx.helper.uuidv1();

    if (res.code === 0) {
      ctx.session.user = res.data.user;
      ctx.session.sessionId = sessionId;
      // 记住我
      if (ctx.request.body.rememberMe) {
        maxAge = maxAge * 30;
      }
      // session记录到redis
      await this.app.redis.set(sessionId, JSON.stringify(res.data.user), 'EX', maxAge);
      res.data.sessionId = sessionId;
      ctx.body = JSON.stringify(res);
      // ctx.redirect('/');
    } else {
      ctx.body = res;
    }

  }

  // GET 登出
  async signout(ctx) {
    this.app.redis.del(ctx.session.sessionId);
    ctx.session = null;
    ctx.redirect('/');
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