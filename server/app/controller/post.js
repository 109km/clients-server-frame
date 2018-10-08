'use strict';
const Controller = require('egg').Controller;
const STATUS_CODE = require('../statusCode');
class PostController extends Controller {
  async create(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (!(user && user.id)) {
      ctx.body = STATUS_CODE['USER_NOT_LOGIN'];
      return;
    }
    const uploadData = await ctx.service.upload.multiple();

    const params = {};
    params.user_id = user.id;
    params.content = uploadData.data.fields.content;
    params.title = uploadData.data.fields.title;
    params.dream_id = uploadData.data.fields.dreamId;
    uploadData.data.files && uploadData.data.files.length && (params.pics = uploadData.data.files);
    const res = await ctx.service.post.create(params);
    ctx.body = res;
  }
  async detail(ctx) {
    let body = ctx.request.body;
    // body = ctx.helper.toSnakeCase(body);
    const res = await ctx.service.post.findOne(body);
    ctx.body = res;
  }
}

module.exports = PostController;