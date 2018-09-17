'use strict';
const Controller = require('egg').Controller;
class DreamController extends Controller {
  async create(ctx) {
    // const postData = await ctx.getFileStream();
    const uploadData = await ctx.service.upload.multiple();
    console.log(uploadData);
    const req = await ctx.service.dream.create({
      userId: "2",
      content: uploadData.data.fields.content,
      pics: JSON.stringify(uploadData.data.files)
    });

    ctx.body = req;
  }
}

module.exports = DreamController;