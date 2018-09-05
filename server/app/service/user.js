const Service = require('egg').Service;

class UserService extends Service {
  async create(userData) {
    const {
      ctx
    } = this;
    const createRule = {
      username: {
        type: 'string'
      },
      password: {
        type: 'password',
        compare: 're-password'
      },
    };
    // 校验参数
    ctx.validate(createRule);

    // 密码加密储存
    userData.password = ctx.helper.encrypt(userData.password);
    await ctx.model.User.create(userData);
    return {
      code: 0,
      message: 'success',
    }
  }

  async findOne(userData) {
    const {
      ctx
    } = this;
    userData.password = ctx.helper.encrypt(userData.password);
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