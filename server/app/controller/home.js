'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    if (ctx.session && ctx.session.sessionId) {
      ctx.cookies.set('sessionId', ctx.session.sessionId);
    }
    await ctx.render('index', ctx.session);
  }
  async feeds(ctx) {
    console.log(ctx.request.body);
    let res = await ctx.service.dream.findAndCountAll(ctx.request.body);
    ctx.body = res;
  }
}

module.exports = HomeController;