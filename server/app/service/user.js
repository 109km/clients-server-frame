const crypto = require('crypto');
const Service = require('egg').Service;
const md5 = crypto.createHash('md5');

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
    userData.password = md5.update(userData.password).digest('hex');

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