'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    console.log(ctx.session);
    if (ctx.session && ctx.session.sessionId) {
      ctx.cookies.set('sessionId', ctx.session.sessionId);
    }
    await ctx.render('index', ctx.session);
  }
}

module.exports = HomeController;