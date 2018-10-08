'use strict';
const Controller = require('egg').Controller;
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
    const uploadData = await ctx.service.upload.multiple();

    const params = {};
    params.userId = user.id;
    params.content = uploadData.data.fields.content;
    params.title = uploadData.data.fields.title;
    params.dreamId = uploadData.data.fields.dreamId;
    uploadData.data.files && uploadData.data.files.length && (params.pics = uploadData.data.files);
    console.log(params);
    const res = await ctx.service.post.create(params);
    ctx.body = res;
  }
  async detail(ctx) {
    console.log(ctx.request.body);
    let res = await ctx.service.post.findOne(ctx.request.body);
    ctx.body = res;
  }
}

module.exports = CommentController;