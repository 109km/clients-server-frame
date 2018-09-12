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
  async updateOne(userData) {
    const {
      ctx
    } = this;
    let res;
    userData.password = ctx.helper.encrypt(userData.password);
    const user = await this.ctx.model.User.findOne({
      where: userData,
    });
    if (user) {
      user.update({
        lastSignInAt: new Date().getTime()
      });
      res = {
        code: 0,
        data: {
          user
        }
      }
    } else {
      res = {
        code: 10000,
        message: 'User not found'
      }
    }
    return res;
  }
  async findOne(userData) {
    const {
      ctx
    } = this;
    let res;
    userData.password = ctx.helper.encrypt(userData.password);
    const user = await this.ctx.model.User.findOne({
      where: userData,
    });
    if (user) {
      res = {
        code: 0,
        data: {
          user
        }
      }
    } else {
      res = {
        code: 10000,
        message: 'User not found'
      }
    }
    return res;
  }
}

module.exports = UserService;