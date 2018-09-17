'use strict';
const Controller = require('egg').Controller;
class DreamController extends Controller {
  async create(ctx) {
    if (!ctx.session.user) {
      ctx.body = {
        code: 10000,
        message: 'You need to login at first'
      }
      return;
    }

    const uploadData = await ctx.service.upload.multiple();
    const req = await ctx.service.dream.create({
      userId: ctx.session.user.id,
      content: uploadData.data.fields.content,
      pics: JSON.stringify(uploadData.data.files)
    });
    ctx.body = req;
  }
}

module.exports = DreamController;