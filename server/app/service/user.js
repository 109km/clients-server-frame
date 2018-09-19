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
    const user = await ctx.model.User.create(userData);
    console.log(user);
    return {
      code: 0,
      message: 'success',
    }
  }
  async findOne(data, isUpdate = false) {
    const {
      ctx
    } = this;
    let res;
    let userData = Object.assign({}, data);
    userData.password = ctx.helper.encrypt(userData.password);
    const user = await ctx.model.User.findOne({
      where: userData,
    });
    if (user) {
      if (isUpdate) {
        user.update({
          lastSignInAt: new Date().getTime()
        });
      }

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