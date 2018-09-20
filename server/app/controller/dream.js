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
    const uploadData = await ctx.service.upload.multiple();
    const res = await ctx.service.dream.create({
      userId: user.id,
      content: uploadData.data.fields.content,
      pics: JSON.stringify(uploadData.data.files)
    });
    ctx.body = res;
  }
  async detail(ctx) {
    console.log();
    let res = await ctx.service.dream.findOne(ctx.request.body);
    ctx.body = res;
  }
}

module.exports = DreamController;