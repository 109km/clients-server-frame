const Service = require('egg').Service;

class UserService extends Service {
  async create(userData) {
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

    await ctx.model.User.create(userData);

    return {
      code: 0,
      message: 'success',
    }
  }

  async findOne(userData) {
    const user = await this.ctx.model.User.findOne({
      where: userData,
    });
    return {
      code: 0,
      data: {
        user
      }
    }
  }
}

module.exports = UserService;