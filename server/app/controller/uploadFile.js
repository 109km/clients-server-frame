const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');
const awaitWriteStream = require('await-stream-ready').write;
const pump = require('mz-modules/pump');

class UploaderController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.UPLOAD_PATH = this.config.UPLOAD_PATH;
  }
  async single(ctx) {
    const stream = await ctx.getFileStream();
    const filename = ctx.helper.md5(stream.filename) + path
      .extname(stream.filename)
      .toLocaleLowerCase();
    const target = path.join(this.UPLOAD_PATH, filename);
    //生成一个文件写入 文件流
    const writeStream = fs.createWriteStream(target);
    try {
      //异步把文件流 写入
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      //如果出现错误，关闭管道
      await sendToWormhole(stream);
      throw err;
    }
    //文件响应
    ctx.body = {
      filename: filename,
      url: target
    };
  }
  async upload(ctx) {
    const parts = ctx.multipart({
      autoFields: true
    });
    const files = [];
    let stream;

    // 多文件循环
    while ((stream = await parts()) != null) {
      const filename = ctx.helper.md5(stream.filename) + path
        .extname(stream.filename)
        .toLocaleLowerCase();
      const target = path.join(this.UPLOAD_PATH, filename);
      const writeStream = fs.createWriteStream(target);
      await pump(stream, writeStream);
      files.push({
        filename: filename,
        url: target
      });
    }
    ctx.body = {
      code: 0,
      data: {
        pics: files
      },
      message: 'success'
    };
  }
}

module.exports = UploaderController;