'use strict';
const Controller = require('egg').Controller;
const axios = require('axios');
class DreamController extends Controller {
  async create(ctx) {
    // console.log(ctx.request.body);
    
    const req = await this.app.controller.uploadFile.upload(ctx);
    console.log(req);
    ctx.body = {
      code: 0,
      message: 'success'
    };
  }
}

module.exports = DreamController;