'use strict';
const Controller = require('egg').Controller;
const STATUS_CODE = require('../statusCode');
class FollowerController extends Controller {

  async add(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (user) {
      const addResponse = await ctx.service.follower.add({
        user_id: user.id,
        follower_id: ctx.request.body.follower_id
      });
      ctx.body = addResponse;
    } else {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
    }
  }

  async remove(ctx) {

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