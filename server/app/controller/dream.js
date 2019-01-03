'use strict';
const Controller = require('egg').Controller;
const STATUS_CODE = require('../statusCode');
class DreamController extends Controller {
  async create(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (!(user && user.id)) {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
      return;
    }
    const res = await ctx.service.dream.create({
      user_id: user.id,
      content: ctx.request.body.content,
      title: ctx.request.body.title,
      cover_url: ctx.request.body.cover_url
    });
    ctx.body = res;
  }
  async detail(ctx) {
    let res;
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (!(user && user.id || ctx.request.body['dream_id'])) {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
      return;
    }
    let params = {};

    user && user.id && (params.user_id = user.id);

    ctx.request.body['dream_id'] && (params['dream_id'] = ctx.request.body['dream_id']);
    ctx.request.body['user_id'] && (params['user_id'] = ctx.request.body['user_id']);

    if (params['dream_id'] || params['user_id']) {
      res = await ctx.service.dream.findOne(params);
    } else {
      res = STATUS_CODE['PARAMS_MISSING'];
    }
    ctx.body = res;
  }
  async update(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (!(user && user.id)) {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
      return;
    }

    let res = await ctx.service.dream.updateOne({
      user_id: user.id
    });
    ctx.body = res;
  }
  async updateGoals(ctx) {
    let res = await ctx.service.dream.updateGoals(ctx.request.body);
    ctx.body = res;
  }
  async updateTiers(ctx) {
    let res = await ctx.service.dream.updateTiers(ctx.request.body);
    ctx.body = res;
  }
  async list(ctx) {
    let res = await ctx.service.dream.findAndCountAll(ctx.request.body);
    ctx.body = res;
  }
}

module.exports = DreamController;