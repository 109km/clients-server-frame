'use strict';

const Controller = require('egg').Controller;

class ExploreController extends Controller {
  async feeds(ctx) {
    let res = await ctx.service.dream.findAndCountAll(ctx.request.body);
    ctx.body = res;
  }
  async search(ctx) {
    let res = await ctx.service.dream.findWithFilter({
      keyword: '2'
    });
    ctx.body = res;
  }
}

module.exports = ExploreController;