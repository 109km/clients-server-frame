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
    let dreamId;
    const uploadData = await ctx.service.upload.multiple();
    if (!uploadData.data.fields.dreamId) {
      const dreamData = await ctx.service.dream.findOne({
        user_id: user.id
      });
      dreamId = dreamData.data.dataValues.id;
    }else{
      dreamId = uploadData.data.fields.dreamId;
    }
    const params = {};
    params.user_id = user.id;
    params.content = uploadData.data.fields.content;
    params.title = uploadData.data.fields.title;
    params.dream_id = dreamId;
    uploadData.data.files && uploadData.data.files.length && (params.pics = uploadData.data.files);
    const res = await ctx.service.post.create(params);
    ctx.body = res;
  }
  async detail(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    let body = ctx.request.body;
    // body = ctx.helper.toSnakeCase(body);
    const res = await ctx.service.post.findOne(body);
    // if (user) {
    //   res.data.dataValues.user = {
    //     nickname: user.nickname,
    //     avatar_url: user.avatar_url
    //   };
    // }
    ctx.body = res;
  }
}

module.exports = PostController;