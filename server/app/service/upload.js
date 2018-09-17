const sendToWormhole = require('stream-wormhole');
const Service = require('egg').Service;
const path = require('path');
const fs = require('fs');
const awaitWriteStream = require('await-stream-ready').write;
const pump = require('mz-modules/pump');

class UploaderService extends Service {
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
    return {
      code: 0,
      data: {
        filename: filename,
        url: target
      },
      message: 'success'
    }
  }
  async multiple() {
    const {
      ctx
    } = this;
    const parts = ctx.multipart();
    const files = [];
    const fields = {};
    let stream;
    // 多文件循环
    while ((stream = await parts()) != null) {
      console.log('while stream:', stream);
      if (stream.length) {
        fields[stream[0]] = stream[1];
      } else {
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
    }

    return {
      code: 0,
      data: {
        files,
        fields
      },
      message: 'success'
    }
  }
}

module.exports = UploaderService;