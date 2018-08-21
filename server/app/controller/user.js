'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

  async signup() {
    this.ctx.body = '注册';
  }

  async signin() {
    this.ctx.body = `${this.ctx.query.name}登录`;
    
  }

  // 新增用户接口
  async create() {
    const {
      ctx
    } = this;
    const createRule = {
      name: {
        type: 'string'
      },
      password: {
        type: 'password',
        compare: 're-password'
      },
    };

    // 校验参数
    ctx.validate(createRule);

    await ctx.model.User.create(ctx.request.body);
    ctx.body = {
      code: 0,
      message: 'success',
    };
  }

  // 用户登录接口
  async login() {

  }
}

module.exports = UserController;