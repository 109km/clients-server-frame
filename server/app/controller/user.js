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
      name: ctx.request.body.name,
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
      name: ctx.request.body.name,
      password: ctx.request.body.password
    }

    const res = await ctx.service.user.findOne(userData);

    if (res.code === 0) {
      ctx.session.user = user;
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
      name: ctx.request.body.name,
      password: ctx.request.body.password
    }
    const res = await ctx.service.user.create(userData);
    ctx.body = res;
  }
}

module.exports = UserController;