'use strict';
const Controller = require('egg').Controller;
const STATUS_CODE = require('../statusCode');

const maxAge = 3600 * 24;
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
      ctx.redirect('/login');
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
    const res = await ctx.service.user.findOne(userData, true);
    const sessionId = ctx.helper.uuidv1();
    let currentMaxAge = maxAge;
    if (res.code === 0) {
      ctx.session.user = res.data.user;
      ctx.session.sessionId = sessionId;
      // 记住我
      if (ctx.request.body.rememberMe) {
        currentMaxAge = maxAge * 30;
      }
      // session记录到redis
      await this.app.redis.set(sessionId, JSON.stringify(res.data), 'EX', currentMaxAge);
      res.data.sessionId = sessionId;
      ctx.body = JSON.stringify(res);
      // ctx.redirect('/');
    } else {
      ctx.body = res;
    }

  }

  async detail(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (user) {
      let findResult = await ctx.service.user.findOne({
        id: user.id
      });
      ctx.body = findResult;
    } else {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
    }
  }

  // GET 登出
  async signout(ctx) {
    this.app.redis.del(ctx.session.sessionId);
    ctx.session = null;
    ctx.body = STATUS_CODE['SUCCESS'];
  }

  // 新增用户接口
  async create(ctx) {
    const userData = {
      username: ctx.request.body.username,
      password: ctx.request.body.password,
      're-password': ctx.request.body['re-password']
    }
    const res = await ctx.service.user.create(userData);
    ctx.body = res;
  }

  async update(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (user) {
      let findResult = await ctx.service.user.findOne({
        id: user.id
      }, false, true);
      console.log(findResult.data);

      // Check the old password matches or not.
      if (findResult.data.password !== ctx.helper.encrypt(ctx.request.body['old_password'])) {
        ctx.body = STATUS_CODE['OLD_PASSWORD_DONT_MATCH'];
      } else {
        let updateData = {
          nickname: ctx.request.body['nickname'],
          avatar_url: ctx.request.body['avatar_url'],
          password: ctx.request.body['new_password'],
        }
        const res = await ctx.service.user.updateOne(user.id, updateData);
        ctx.body = res;
      }

    } else {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
    }
  }
}

module.exports = UserController;