'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index(ctx) {
    console.log(ctx.cookies.get('csrfToken',{
      signed:false
    }));
    await ctx.render('index', ctx.session);
  }
}

module.exports = HomeController;