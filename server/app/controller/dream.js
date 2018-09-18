'use strict';
const Controller = require('egg').Controller;
class DreamController extends Controller {
  async create(ctx) {
    let key = ctx.headers['x-api-key'];
    let user = await this.app.redis.get(key);
    user = JSON.parse(user);
    if (!(user && user.id)) {
      ctx.body = {
        code: 10000,
        message: 'You need to login at first'
      }
      return;
    }
    const uploadData = await ctx.service.upload.multiple();
    const req = await ctx.service.dream.create({
      userId: user.id,
      content: uploadData.data.fields.content,
      pics: JSON.stringify(uploadData.data.files)
    });


    if (req.code === 0) {
      ctx.body = {
        code: 0
      };
    }


  }
}

module.exports = DreamController;