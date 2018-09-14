'use strict';

const Controller = require('egg').Controller;

class DreamController extends Controller {
  async create(ctx) {
    console.log(ctx.request.body);
    ctx.body = {
      code: 0,
      message: 'success'
    };
  }
}

module.exports = DreamController;