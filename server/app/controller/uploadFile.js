const sendToWormhole = require('stream-wormhole');
const Controller = require('egg').Controller;

class UploaderController extends Controller {
  async upload() {
    const ctx = this.ctx;
    const parts = ctx.multipart();
    let part;
    while ((part = await parts() != null)) {
      console.log(part);
      this.ctx.body = {
        code: 0,
        message: 'success'
      };
      if (part.length) {
        // 如果是数组的话是 filed
        console.log('field: ' + part[0]);
        console.log('value: ' + part[1]);
        console.log('valueTruncated: ' + part[2]);
        console.log('fieldnameTruncated: ' + part[3]);

      } else {
        if (!part.filename) {
          return;
        }
        // part 是上传的文件流
        console.log('field: ' + part.fieldname);
        console.log('filename: ' + part.filename);
        console.log('encoding: ' + part.encoding);
        console.log('mime: ' + part.mime);
        let result;
        try {
          result = await ctx.oss.put('egg-multipart-test/' + part.filename, part);
        } catch (err) {
          await sendToWormhole(part);
          throw err;
        }
        this.ctx.body = {
          code: 0,
          message: 'success'
        };
      }
    }
  }
}

module.exports = UploaderController;