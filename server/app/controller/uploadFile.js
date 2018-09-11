const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');
const awaitWriteStream = require('await-stream-ready').write;
const pump = require('mz-modules/pump');

class UploaderController extends Controller {
  async upload() {
    const ctx = this.ctx;
    // const stream = await ctx.getFileStream();
    // console.log(stream.filename);
    // const filename = stream.filename.toLocaleLowerCase();
    // const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
    // //生成一个文件写入 文件流
    // const writeStream = fs.createWriteStream(target);
    // try {
    //   //异步把文件流 写入
    //   await awaitWriteStream(stream.pipe(writeStream));
    // } catch (err) {
    //   //如果出现错误，关闭管道
    //   await sendToWormhole(stream);
    //   throw err;
    // }
    // //文件响应
    // ctx.body = {
    //   url: '/public/uploads/' + filename
    // };
    // return;
    const parts = ctx.multipart({
      autoFields: true
    });
    const files = [];
    const fileUrls = [];
    let stream;
    while ((stream = await parts()) != null) {
      const filename = ctx.helper.md5(stream.filename) + path
        .extname(stream.filename)
        .toLocaleLowerCase();
      const target = path.join(this.config.baseDir, 'app/public/uploads', filename);
      fileUrls.push(target);
      const writeStream = fs.createWriteStream(target);
      await pump(stream, writeStream);
      files.push(filename);
    }
    ctx.body = {
      code: 0,
      data: {
        pics: fileUrls
      },
      message: 'success'
    };
  }
}

module.exports = UploaderController;