'use strict';
const Controller = require('egg').Controller;
const STATUS_CODE = require('../statusCode');
class FollowerController extends Controller {

  async add(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (user) {
      const response = await ctx.service.follower.add({
        user_id: user.id,
        follower_id: ctx.request.body.follower_id
      });
      ctx.body = response;
    } else {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
    }
  }

  async remove(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (user) {
      const response = await ctx.service.follower.remove({
        user_id: user.id,
        follower_id: ctx.request.body.follower_id
      });
      ctx.body = response;
    } else {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
    }
  }

  async find(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    let response;
    let userId;
    if (user) {
      userId = user.id;
    } else {
      userId = ctx.request.body.follower_id;
    }
    response = await ctx.service.follower.find({
      follower_id: userId
    });
    ctx.body = response;
  }

  async list(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (user) {
      ctx.body = user;
    } else {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
    }
  }
}

module.exports = FollowerController;