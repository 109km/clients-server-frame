'use strict';
const Controller = require('egg').Controller;
const dayjs = require('dayjs');
const STATUS_CODE = require('../statusCode');
class CommentController extends Controller {
  async create(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (!(user && user.id)) {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
      return;
    }
    const res = await ctx.service.comment.create({
      user_id: user.id,
      nickname: user.nickname,
      post_id: ctx.request.body.post_id,
      content: ctx.request.body.content
    });
    ctx.body = res;
  }
  async detail(ctx) {
    let body = ctx.request.body;
    body = ctx.helper.toSnakeCase(body);
    let res = await ctx.service.comment.findOne(body);
    ctx.body = res;
  }
}

module.exports = CommentController;