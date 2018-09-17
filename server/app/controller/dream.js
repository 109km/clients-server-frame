'use strict';
const Controller = require('egg').Controller;
class DreamController extends Controller {
  async create(ctx) {
    const postData = await ctx.getFileStream();
    const uploadData = await ctx.service.upload.multiple(ctx);
    const req = await ctx.service.dream.create({
      userId: "2",
      content: postData.fields.content,
      pics: JSON.stringify(uploadData.files)
    });

    ctx.body = req;
  }
}

module.exports = DreamController;