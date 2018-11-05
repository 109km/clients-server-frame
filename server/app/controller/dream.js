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
      title: ctx.request.body.title
    });
    ctx.body = res;
  }
  async detail(ctx) {
    let res = await ctx.service.dream.findOne(ctx.request.body);
    ctx.body = res;
  }
  async edit(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (!(user && user.id)) {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
      return;
    }
    let res = await ctx.service.dream.findDreamByUserId({
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